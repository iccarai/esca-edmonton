/**
 * TSO standard IndexNow submitter. Copy into every site repo as
 * scripts/indexnow-submit.mjs and fill HOST + KEY, or run it from the skill
 * with INDEXNOW_HOST / INDEXNOW_KEY set.
 *
 * Pings Bing, Yandex, Seznam and Naver so they recrawl without waiting to
 * discover the change. Google does NOT participate; for Google the lever is the
 * sitemap resubmit in Search Console.
 *
 * Auth is the key file at the domain root (<key>.txt, body = the key exactly),
 * public by design, not a secret. It proves control of the domain.
 *
 * Usage:
 *   node scripts/indexnow-submit.mjs                 # every URL in the sitemap
 *   node scripts/indexnow-submit.mjs /blog/ /faq/    # just these paths (PowerShell)
 *   node scripts/indexnow-submit.mjs blog/ faq/      # same, safe in Git Bash
 *
 * Submit only URLs that actually CHANGED. Re-pinging the whole site on every
 * deploy is what gets a host rate-limited (429).
 *
 * Reference implementation: Ben's Carpentry, commit a6c58f4 (2026-09-30).
 */
const HOST = process.env.INDEXNOW_HOST || 'escaedmonton.ca'; // e.g. example.com, no scheme, no www unless canonical
const KEY = process.env.INDEXNOW_KEY || 'f4a25011c152bf7c3d749c3467cf5127';
const SITEMAP = process.env.INDEXNOW_SITEMAP || `https://${HOST}/sitemap.xml`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';
const DELAY_MS = 500;

if (HOST.startsWith('REPLACE_') || KEY.startsWith('REPLACE_')) {
  console.error('Set HOST and KEY in this file (or INDEXNOW_HOST / INDEXNOW_KEY) first.');
  process.exit(1);
}

async function sitemapUrls() {
  const xml = await fetch(SITEMAP).then((r) => r.text());
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const meaningOf = (status) =>
  ({
    200: 'accepted',
    202: 'accepted, key validation pending',
    400: 'bad request format',
    403: 'key invalid or key file not reachable',
    422: 'URL does not match the host, or key schema violation',
    429: 'rate limited, too many submissions',
  })[status] || 'unexpected';

async function submit(url, keyUrl) {
  const body = { host: HOST, key: KEY, keyLocation: keyUrl, urlList: [url] };
  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(body),
    });
    return { status: res.status, text: (await res.text()).trim() };
  } catch (err) {
    return { status: 0, text: `network error: ${err.message}` };
  }
}

// Exit by setting exitCode rather than process.exit(): exiting straight after
// a fetch can crash Node on Windows (libuv assertion, exit 127).
async function main() {
  const args = process.argv.slice(2);
  const urlList = args.length
    ? args.map((p) => new URL(p, `https://${HOST}`).href)
    : await sitemapUrls();

  if (!urlList.length) {
    console.error('no URLs to submit');
    return 1;
  }

  // Git Bash on Windows rewrites an argument that starts with "/" into a Windows
  // path, so "/blog/" arrives as "C:/Program Files/Git/blog/" and IndexNow rejects
  // it with a 422 that looks like a key problem. Refuse anything off-host before
  // sending. Paths without the leading slash ("blog/") are never rewritten.
  const offHost = urlList.filter((u) => {
    try {
      return new URL(u).host !== HOST;
    } catch {
      return true;
    }
  });
  if (offHost.length) {
    console.error(`not on ${HOST}, nothing submitted:\n  ${offHost.join('\n  ')}`);
    console.error('In Git Bash, drop the leading slash (blog/) or run from PowerShell.');
    return 1;
  }

  // The key file must be live and exact, or every submission fails with 403.
  // Drag-and-drop deploys that omit it are the usual cause.
  const keyUrl = `https://${HOST}/${KEY}.txt`;
  const liveKey = await fetch(keyUrl)
    .then((r) => (r.ok ? r.text() : ''))
    .catch(() => '');
  if (liveKey.trim() !== KEY) {
    console.error(`key file missing or wrong at ${keyUrl}, nothing submitted`);
    return 1;
  }

  // One URL per request, so a single bad URL is reported on its own instead of
  // failing the whole submission.
  console.log(`submitting ${urlList.length} URL(s) to ${ENDPOINT}, one per request`);

  let failed = 0;
  for (const [i, url] of urlList.entries()) {
    if (i) await new Promise((r) => setTimeout(r, DELAY_MS));
    const { status, text } = await submit(url, keyUrl);
    const ok = status === 200 || status === 202;
    if (!ok) failed++;
    console.log(`HTTP ${status}  ${meaningOf(status)}  ${url}`);
    if (!ok && text) console.log(`  ${text.slice(0, 400)}`);
    if (status === 429) {
      console.error('rate limited, stopping; the rest were NOT submitted');
      failed += urlList.length - i - 1;
      break;
    }
  }

  console.log(`${urlList.length - failed} of ${urlList.length} accepted`);
  return failed ? 1 : 0;
}

process.exitCode = await main();
