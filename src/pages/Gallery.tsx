import { useLanguage } from '@/i18n/LanguageContext';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Images } from 'lucide-react';

const Gallery = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20">
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif-display font-bold mb-4">
            {t('gallery', 'title') as string}
          </h1>
          <div className="w-24 h-1 bg-secondary mx-auto" />
        </div>
      </section>

      <section className="py-32 bg-background">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <ScrollReveal>
            <Images className="h-16 w-16 text-secondary/40 mx-auto mb-6" />
            <h2 className="text-2xl font-serif-display font-bold text-primary">
              {t('gallery', 'comingSoon') as string}
            </h2>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
