// Post-build prerender for GitHub Pages.
//
// GitHub Pages has no server-side rewrites, so a direct request to a
// client-side route (e.g. /events) returns a real HTTP 404 (served by
// public/404.html) and search engines refuse to index it. This script runs the
// built SPA in a headless browser, lets React render and useSeo set the
// per-page <head>, then writes a static HTML file per route:
//
//   dist/index.html, dist/about.html, dist/events.html, ...
//
// GitHub Pages serves /about.html at /about with a straight 200 (a directory
// index.html would 301 to /about/), so served URLs match the canonical tags,
// sitemap and router links. Page content is unchanged; this snapshots exactly
// what the site already renders.
//
// Keep ROUTES in sync with src/lib/seo.ts and public/sitemap.xml.

import { preview } from 'vite';
import puppeteer from 'puppeteer';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const PORT = 4173;
const ROUTES = ['/', '/about', '/events', '/gallery', '/membership', '/financials'];

const server = await preview({
  appType: 'spa',
  preview: { port: PORT, strictPort: true },
});
const origin = `http://localhost:${PORT}`;

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

let failed = false;
try {
  for (const route of ROUTES) {
    const page = await browser.newPage();

    // Only allow same-origin (and data:) requests so third-party widgets
    // (the Behold Instagram feed) don't stall or inject into the static HTML.
    // They still load normally for visitors.
    await page.setRequestInterception(true);
    page.on('request', (req) => {
      const url = req.url();
      if (url.startsWith(origin) || url.startsWith('data:')) req.continue();
      else req.abort();
    });

    await page.goto(`${origin}${route}`, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForSelector('#root *', { timeout: 15000 });
    // Let mount effects (useSeo head sync) run.
    await new Promise((r) => setTimeout(r, 700));

    // Drop third-party scripts injected at runtime; the page's own effects
    // re-add them when it loads in a real browser.
    await page.evaluate(() => {
      document.querySelectorAll('script[src]').forEach((s) => {
        if (new URL(s.src, location.href).origin !== location.origin) s.remove();
      });
    });

    const html = await page.content();
    const outPath = route === '/' ? join('dist', 'index.html') : join('dist', `${route.slice(1)}.html`);
    await mkdir(dirname(outPath), { recursive: true });
    await writeFile(outPath, html, 'utf8');
    console.log(`prerendered ${route} -> ${outPath}`);
    await page.close();
  }
} catch (err) {
  failed = true;
  console.error('Prerender failed:', err);
} finally {
  await browser.close();
  await server.httpServer?.close();
}

process.exit(failed ? 1 : 0);
