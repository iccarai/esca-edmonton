import { useLanguage } from '@/i18n/LanguageContext';
import { ScrollReveal } from '@/components/ScrollReveal';
import { useEffect } from 'react';

const BEHOLD_FEED_ID = 'zrWIVQGqZs94b1NA3UgW';

const FB_URL = 'https://www.facebook.com/profile.php?id=61567303020814';
const IG_URL = 'https://www.instagram.com/esca_edmonton';
const TICKETS_URL = 'https://www.ualberta.ca/en/botanic-garden/events-programs/events.html';

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

      {/* Featured event — Save the Date */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center bg-card rounded-3xl shadow-xl overflow-hidden border border-border">
              {/* Poster */}
              <a
                href={TICKETS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <img
                  src="/images/events/alegria-poster.jpg"
                  alt={t('events', 'featuredName') as string}
                  className="w-full h-full object-cover transition-opacity group-hover:opacity-95"
                />
              </a>

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
                <p className="text-foreground mb-1">
                  {t('events', 'featuredMore') as string} ❤️
                </p>
                <p className="text-sm font-semibold text-foreground mb-6">
                  {t('events', 'featuredTickets') as string}
                </p>

                <a
                  href={TICKETS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-secondary px-8 py-3 font-semibold text-secondary-foreground shadow-md transition-transform hover:scale-105"
                >
                  {t('events', 'featuredTicketsBtn') as string}
                </a>
              </div>
            </div>
          </ScrollReveal>
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
