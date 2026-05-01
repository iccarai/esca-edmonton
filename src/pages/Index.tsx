import { useLanguage } from '@/i18n/LanguageContext';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Users, Heart, BookOpen } from 'lucide-react';

const Index = () => {
  const { t } = useLanguage();

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero/background.jpg)' }}
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <ScrollReveal delay={200}>
            <img src="/images/logos/esca-logo-white.png" alt="ESCA Logo" className="h-28 md:h-36 w-auto mx-auto mb-8" />
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif-display font-bold text-primary-foreground leading-tight mb-4">
              {t('hero', 'title') as string}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={600}>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6" />
          </ScrollReveal>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-primary-foreground/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Who Are ESCA */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="flex justify-center">
                <img src="/images/home/what-is-esca.jpg" alt="ESCA" className="w-full h-auto rounded-2xl shadow-lg" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif-display font-bold text-foreground mb-6">
                  {t('whoAreWe', 'title') as string}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('whoAreWe', 'p1') as string}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t('whoAreWe', 'p2') as string}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-serif-display font-bold text-foreground text-center mb-16">
              {t('whatWeDo', 'title') as string}
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="left">
              <div className="relative">
                <img
                  src="/images/home/what-we-do.png"
                  alt="El Salvador landscape"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
            </ScrollReveal>
            <div className="flex flex-col gap-8">
              {[
                { icon: Users, titleKey: 'pillar1', color: 'text-accent' },
                { icon: Heart, titleKey: 'pillar2', color: 'text-secondary' },
                { icon: BookOpen, titleKey: 'pillar3', color: 'text-accent' },
              ].map(({ icon: Icon, titleKey, color }, i) => {
                const pillarData = (t('whatWeDo', titleKey) as any);
                const title = pillarData?.title || '';
                const desc = pillarData?.desc || '';
                return (
                  <ScrollReveal key={titleKey} direction="right" delay={i * 150}>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className={`h-6 w-6 ${color}`} />
                      </div>
                      <div>
                        <h3 className="font-serif-display text-xl font-semibold text-foreground mb-2">
                          {title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Index;
