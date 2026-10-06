import { useLanguage } from '@/i18n/LanguageContext';
import { ScrollReveal } from '@/components/ScrollReveal';
import { useEffect } from 'react';

const BEHOLD_FEED_ID = 'zrWIVQGqZs94b1NA3UgW';

const FB_URL = 'https://www.facebook.com/profile.php?id=61567303020814';
const IG_URL = 'https://www.instagram.com/esca_edmonton';
const LI_URL = 'https://www.linkedin.com/company/el-salvador-cultural-association-of-edmonton-esca/';

const SOCIALS = [
  {
    name: 'Instagram',
    href: IG_URL,
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
  },
  {
    name: 'Facebook',
    href: FB_URL,
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    name: 'LinkedIn',
    href: LI_URL,
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
];

const Events = () => {
  const { t } = useLanguage();

  useEffect(() => {
    if (!BEHOLD_FEED_ID) return;
    const script = document.createElement('script');
    script.src = 'https://w.behold.so/widget.js';
    script.type = 'module';
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="pt-20">
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif-display font-bold mb-4">
            {t('events', 'title') as string}
          </h1>
          <div className="w-24 h-1 bg-secondary mx-auto" />
        </div>
      </section>

      {/* Upcoming events — stay connected */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-serif-display font-bold text-foreground mb-4">
              {t('events', 'upcomingTitle') as string}
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6" />
            <p className="text-lg text-foreground/80 mb-8">
              {t('events', 'upcomingDesc') as string}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {SOCIALS.map(({ name, href, path }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 font-semibold text-secondary-foreground shadow-md transition-transform hover:scale-105"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d={path} /></svg>
                  {name}
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Past events — Alegría */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-serif-display font-bold text-foreground mb-4">
                {t('events', 'pastTitle') as string}
              </h2>
              <div className="w-24 h-1 bg-secondary mx-auto" />
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center bg-card rounded-3xl shadow-xl overflow-hidden border border-border">
              {/* Poster */}
              <img
                src="/images/events/alegria-poster.jpg"
                alt={t('events', 'featuredName') as string}
                className="w-full h-full object-cover"
              />

              {/* Details */}
              <div className="p-8 lg:p-12">
                <p className="inline-block text-sm font-semibold tracking-widest uppercase text-secondary mb-4">
                  ✨ {t('events', 'saveTheDate') as string} ✨
                </p>
                <p className="text-base md:text-lg font-medium text-secondary mb-2">
                  {t('events', 'featuredTagline') as string}
                </p>
                <h2 className="text-3xl md:text-4xl font-serif-display font-bold text-foreground mb-4">
                  {t('events', 'featuredName') as string}
                </h2>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  {t('events', 'featuredDesc') as string} 🌎🎶💃🏽
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3 text-foreground">
                    <span className="text-xl" aria-hidden="true">📅</span>
                    <span className="font-medium">{t('events', 'featuredDate') as string}</span>
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <span className="text-xl" aria-hidden="true">⏰</span>
                    <span className="font-medium">{t('events', 'featuredTime') as string}</span>
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <span className="text-xl" aria-hidden="true">📍</span>
                    <span className="font-medium">{t('events', 'featuredLocation') as string}</span>
                  </li>
                </ul>

                <p className="text-sm text-muted-foreground mb-4">
                  {t('events', 'featuredPartner') as string}
                </p>
                <p className="text-foreground font-medium mb-1">
                  {t('events', 'featuredCalendars') as string}
                </p>
                <p className="text-foreground">
                  {t('events', 'featuredMore') as string} ❤️
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Alegría sponsor thank yous */}
      <section className="pb-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-serif-display font-bold text-foreground mb-4">
                {t('events', 'sponsorsTitle') as string}
              </h2>
              <div className="w-24 h-1 bg-secondary mx-auto mb-4" />
              <p className="text-foreground/80 max-w-2xl mx-auto">
                {t('events', 'sponsorsDesc') as string}
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <img
                src="/images/events/alegria-partners.jpg"
                alt={t('events', 'sponsorsPartnersAlt') as string}
                loading="lazy"
                className="w-full rounded-3xl shadow-xl border border-border"
              />
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <img
                src="/images/events/alegria-sponsors.jpg"
                alt={t('events', 'sponsorsLogosAlt') as string}
                loading="lazy"
                className="w-full rounded-3xl shadow-xl border border-border"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Instagram feed */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            {BEHOLD_FEED_ID ? (
              <behold-widget feed-id={BEHOLD_FEED_ID} />
            ) : (
              <p className="text-center text-muted-foreground py-10">
                {t('events', 'feedComingSoon') as string}{' '}
                <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="text-secondary underline">
                  @esca_edmonton
                </a>
              </p>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* Follow us callout */}
      <section className="pb-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <p className="text-lg md:text-xl text-foreground font-medium mb-8">
              {t('events', 'followUsBefore') as string}{' '}
              <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Instagram</a>
              {' '}{t('events', 'followUsBetween') as string}{' '}
              <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Facebook</a>
              {' '}{t('events', 'followUsAfter') as string}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="block group">
              <img
                src="/images/fb-screenshot.png"
                alt="ESCA Facebook page"
                className="rounded-2xl shadow-xl w-full transition-opacity group-hover:opacity-90"
              />
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Events;
