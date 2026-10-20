// Visible FAQ content, English and Spanish. The FAQPage schema on each page is
// generated from the English text here, so the markup always matches what's
// on the page. Don't add membership timing or fees until they're finalized.

import type { Language } from './translations';

export interface FaqItem {
  q: Record<Language, string>;
  a: Record<Language, string>;
}

export const HOME_FAQ: FaqItem[] = [
  {
    q: {
      en: 'What is the El Salvador Cultural Association of Edmonton?',
      es: '¿Qué es la Asociación Cultural de El Salvador de Edmonton?',
    },
    a: {
      en: "ESCA is a Salvadoran cultural organization in Edmonton, Alberta, incorporated on October 31, 2024. We preserve and celebrate the culture of El Salvador through cultural events, educational programs and community support, and we help the next generation stay connected to their roots.",
      es: 'ESCA es una organización cultural salvadoreña en Edmonton, Alberta, incorporada el 31 de octubre de 2024. Preservamos y celebramos la cultura de El Salvador a través de eventos culturales, programas educativos y apoyo comunitario, y ayudamos a la nueva generación a mantenerse conectada con sus raíces.',
    },
  },
  {
    q: {
      en: 'Is there a Salvadoran community in Edmonton?',
      es: '¿Hay una comunidad salvadoreña en Edmonton?',
    },
    a: {
      en: 'Yes. ESCA brings Salvadorans and Salvadoran-Canadians in Edmonton together through cultural celebrations, fundraisers and community gatherings across the city. Follow us on Instagram and Facebook to meet the community at our next event.',
      es: 'Sí. ESCA une a salvadoreños y salvadoreño-canadienses en Edmonton a través de celebraciones culturales, recaudaciones de fondos y reuniones comunitarias en toda la ciudad. Síguenos en Instagram y Facebook para conocer a la comunidad en nuestro próximo evento.',
    },
  },
  {
    q: {
      en: 'Is ESCA only for Salvadorans?',
      es: '¿ESCA es solo para salvadoreños?',
    },
    a: {
      en: "No. Our events celebrate Latin American cultures and everyone's welcome, whether you're Salvadoran, a Latino or Latina from anywhere in Latin America, or simply love the culture.",
      es: 'No. Nuestros eventos celebran las culturas latinoamericanas y todos son bienvenidos, ya seas salvadoreño, latino o latina de cualquier parte de América Latina, o simplemente ames la cultura.',
    },
  },
  {
    q: {
      en: 'Where can I find Latin American cultural events in Edmonton?',
      es: '¿Dónde puedo encontrar eventos culturales latinoamericanos en Edmonton?',
    },
    a: {
      en: 'Our Events page lists ESCA events in Edmonton, like Alegría, Latin American Cultures at the University of Alberta Botanic Garden. New events are announced first on our Instagram and Facebook.',
      es: 'Nuestra página de Eventos muestra los eventos de ESCA en Edmonton, como Alegría, Culturas Latinoamericanas en el University of Alberta Botanic Garden. Los nuevos eventos se anuncian primero en nuestro Instagram y Facebook.',
    },
  },
  {
    q: {
      en: 'Does ESCA serve pupusas in Edmonton?',
      es: '¿ESCA vende pupusas en Edmonton?',
    },
    a: {
      en: "Yes. Pupusas are a big part of our fundraisers and community events, like our Pupusa Fundraiser in January 2026. Follow us on Instagram and Facebook so you don't miss the next one.",
      es: 'Sí. Las pupusas son una parte importante de nuestras recaudaciones de fondos y eventos comunitarios, como nuestra venta de pupusas de enero de 2026. Síguenos en Instagram y Facebook para no perderte la próxima.',
    },
  },
];

export const GET_INVOLVED_FAQ: FaqItem[] = [
  {
    q: {
      en: 'How can I volunteer with ESCA?',
      es: '¿Cómo puedo ser voluntario en ESCA?',
    },
    a: {
      en: "Fill out our volunteer sign-up form on this page. No experience is needed. Volunteers help set up events, welcome guests, serve food and coordinate activities.",
      es: 'Completa nuestro formulario de voluntariado en esta página. No se necesita experiencia. Los voluntarios ayudan a montar eventos, dar la bienvenida a los invitados, servir comida y coordinar actividades.',
    },
  },
  {
    q: {
      en: "Can I volunteer if I'm not Salvadoran?",
      es: '¿Puedo ser voluntario si no soy salvadoreño?',
    },
    a: {
      en: 'Absolutely. Latinos, Latinas and anyone in Edmonton who wants to support Latin American culture is welcome on our volunteer team.',
      es: 'Por supuesto. Latinos, latinas y cualquier persona en Edmonton que quiera apoyar la cultura latinoamericana es bienvenida en nuestro equipo de voluntarios.',
    },
  },
  {
    q: {
      en: 'How can my business sponsor ESCA?',
      es: '¿Cómo puede mi empresa patrocinar a ESCA?',
    },
    a: {
      en: 'Email us at esca@escaedmonton.ca and tell us about your business. Sponsors get logo placement at our events, on our website and across our social media, plus public recognition as a supporter of Salvadoran culture in Edmonton.',
      es: 'Escríbenos a esca@escaedmonton.ca y cuéntanos sobre tu empresa. Los patrocinadores reciben su logo en nuestros eventos, en nuestro sitio web y en nuestras redes sociales, además de reconocimiento público como patrocinadores de la cultura salvadoreña en Edmonton.',
    },
  },
  {
    q: {
      en: 'How do I become an ESCA member?',
      es: '¿Cómo me hago miembro de ESCA?',
    },
    a: {
      en: "Membership is coming soon. Follow us on Instagram and Facebook and you'll be the first to know when it opens.",
      es: 'La membresía estará disponible próximamente. Síguenos en Instagram y Facebook y serás de los primeros en saber cuándo abre.',
    },
  },
];
