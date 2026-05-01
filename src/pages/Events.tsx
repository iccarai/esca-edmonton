import { useLanguage } from '@/i18n/LanguageContext';
import { ScrollReveal } from '@/components/ScrollReveal';
import { useEffect } from 'react';

const BEHOLD_FEED_ID = ''; // paste your Behold feed ID here once connected

const FB_URL = 'https://www.facebook.com/profile.php?id=61567303020814';
const IG_URL = 'https://www.instagram.com/esca_edmonton';

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
