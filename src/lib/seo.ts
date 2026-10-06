// Per-page <head> metadata. Paths here must match the routes in App.tsx,
// public/sitemap.xml and the ROUTES list in scripts/prerender.mjs.

export const PAGE_SEO = {
  home: {
    path: '/',
    title: 'El Salvador Cultural Association of Edmonton | ESCA',
    description:
      'ESCA preserves and celebrates Salvadoran culture in Edmonton, Alberta through cultural events, education and community support. Join us.',
  },
  about: {
    path: '/about',
    title: 'About ESCA and Founder Alicia Dimas | Edmonton',
    description:
      'Meet Alicia Dimas, founder of the El Salvador Cultural Association of Edmonton, and learn about our mission to keep Salvadoran roots strong in Alberta.',
  },
  events: {
    path: '/events',
    title: 'Salvadoran Cultural Events in Edmonton | ESCA',
    description:
      'Upcoming and past ESCA events in Edmonton, including Alegría, Latin American Cultures at the University of Alberta Botanic Garden. Follow us for announcements.',
  },
  gallery: {
    path: '/gallery',
    title: 'Photo Gallery | El Salvador Cultural Association of Edmonton',
    description:
      'Photos from ESCA cultural celebrations, fundraisers and community gatherings across Edmonton.',
  },
  membership: {
    path: '/membership',
    title: 'Get Involved with ESCA | Membership and Volunteering',
    description:
      'Become a member, volunteer at our events or sponsor ESCA to help preserve Salvadoran culture in Edmonton.',
  },
  financials: {
    path: '/financials',
    title: 'Annual Reports and Financials | ESCA Edmonton',
    description:
      'Annual reports from the El Salvador Cultural Association of Edmonton. Transparency and accountability are core to our mission.',
  },
} as const;
