/** Renders a JSON-LD structured data block. Captured into static HTML by the prerender. */
export const JsonLd = ({ data }: { data: Record<string, unknown> }) => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
);
