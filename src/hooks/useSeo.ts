import { useEffect } from 'react';

const SITE_URL = 'https://escaedmonton.ca';

interface SeoOptions {
  /** Full page title */
  title: string;
  /** Meta description */
  description: string;
  /** Path beginning with "/" e.g. "/about" ("/" for the homepage) */
  path: string;
}

function setMetaContent(selector: string, value: string) {
  const el = document.head.querySelector<HTMLMetaElement>(selector);
  if (el) el.setAttribute('content', value);
}

/**
 * Syncs the document <head> for the current route: title, meta description,
 * self-referential canonical, and OG/Twitter mirrors. Updates the tags shipped
 * in index.html in place (never adds duplicates). The build-time prerender
 * (scripts/prerender.mjs) captures these into static HTML so each page is
 * indexed with its own metadata.
 */
export function useSeo({ title, description, path }: SeoOptions) {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${path}`;

    document.title = title;
    setMetaContent('meta[name="description"]', description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[property="og:description"]', description);
    setMetaContent('meta[property="og:url"]', canonicalUrl);
    setMetaContent('meta[name="twitter:title"]', title);
    setMetaContent('meta[name="twitter:description"]', description);
  }, [title, description, path]);
}
