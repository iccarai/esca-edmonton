import { useLanguage } from '@/i18n/LanguageContext';
import { ScrollReveal } from '@/components/ScrollReveal';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20">
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif-display font-bold mb-4">{t('about', 'title') as string}</h1>
          <div className="w-24 h-1 bg-secondary mx-auto" />
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-serif-display font-bold text-foreground mb-8">{t('founder', 'title') as string}</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <ScrollReveal direction="left">
              <img src="/images/about/founder.jpg" alt="Alicia Dimas" className="rounded-2xl shadow-lg w-full" />
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <h3 className="font-serif-display text-xl font-semibold text-secondary mb-4">{t('founder', 'name') as string}</h3>
                {(t('founder', 'bio') as string[]).map((p, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed mb-3 text-sm">{p}</p>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
