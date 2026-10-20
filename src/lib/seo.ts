// Per-page <head> metadata. Paths here must match the routes in App.tsx,
// public/sitemap.xml and the ROUTES list in scripts/prerender.mjs.

export const PAGE_SEO = {
  home: {
    path: '/',
    title: 'Salvadoran and Latin Community in Edmonton | ESCA',
    description:
      'ESCA brings Salvadorans, Latinos and Latinas in Edmonton together through Latin American cultural events, pupusa fundraisers and community support.',
  },
  about: {
    path: '/about',
    title: 'About ESCA and Founder Alicia Dimas | Edmonton',
    description:
      'Meet Alicia Dimas, founder of the El Salvador Cultural Association of Edmonton, and learn about our mission to keep Salvadoran roots strong in Alberta.',
  },
  events: {
    path: '/events',
    title: 'Salvadoran and Latin American Events in Edmonton | ESCA',
    description:
      "Salvadoran and Latin cultural events in Edmonton, from pupusa fundraisers to Alegría at the University of Alberta Botanic Garden. See what's coming up.",
  },
  gallery: {
    path: '/gallery',
    title: 'Photo Gallery | El Salvador Cultural Association of Edmonton',
    description:
      'Photos from ESCA pupusa fundraisers, cultural celebrations and community gatherings with the Salvadoran and Latin community in Edmonton.',
  },
  membership: {
    path: '/membership',
    title: 'Volunteer With the Latin Community in Edmonton | ESCA',
    description:
      'Volunteer with ESCA, sponsor our events or partner with the Salvadoran and Latin community in Edmonton. No experience needed to volunteer.',
  },
  financials: {
    path: '/financials',
    title: 'Annual Reports and Financials | ESCA Edmonton',
    description:
      'Annual reports from the El Salvador Cultural Association of Edmonton. Transparency and accountability are core to our mission.',
  },
} as const;
