import { useLanguage } from '@/i18n/LanguageContext';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Card, CardContent } from '@/components/ui/card';
import { Handshake, ImageIcon } from 'lucide-react';

const Partnerships = () => {
  const { t } = useLanguage();

  // Placeholder partners — logos and details to be provided later
  const partners: { name: string; description: string; logo?: string }[] = [];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif-display font-bold mb-4">
            {t('partnershipsPage', 'title') as string}
          </h1>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6" />
          <p className="text-lg opacity-90">{t('partnershipsPage', 'subtitle') as string}</p>
        </div>
      </section>

      {/* About Partnerships */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <Handshake className="h-14 w-14 text-secondary mx-auto mb-6" />
            <h2 className="text-3xl font-serif-display font-bold text-primary mb-4">
              {t('partnershipsPage', 'aboutTitle') as string}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              {t('partnershipsPage', 'aboutDesc') as string}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Partner Cards */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-serif-display font-bold text-primary text-center mb-4">
              {t('partnershipsPage', 'partnersTitle') as string}
            </h2>
            <p className="text-muted-foreground text-center mb-12">
              {t('partnershipsPage', 'partnersSubtitle') as string}
            </p>
          </ScrollReveal>

          {partners.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partners.map((partner, i) => (
                <ScrollReveal key={partner.name} delay={i * 100}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6 flex flex-col items-center text-center">
                      {partner.logo ? (
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="max-h-20 max-w-full object-contain mb-4"
                          loading="lazy"
                        />
                      ) : (
                        <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center mb-4">
                          <Handshake className="h-8 w-8 text-secondary" />
                        </div>
                      )}
                      <h3 className="font-serif-display font-semibold text-primary text-lg mb-2">
                        {partner.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">{partner.description}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <ScrollReveal delay={100}>
              <div className="flex justify-center">
                <div className="bg-card border border-dashed border-secondary/30 rounded-xl p-10 flex flex-col items-center justify-center max-w-md">
                  <ImageIcon className="h-12 w-12 text-secondary/40 mb-3" />
                  <span className="text-muted-foreground italic text-center">
                    {t('partnershipsPage', 'partnersPlaceholder') as string}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>
    </div>
  );
};

export default Partnerships;
