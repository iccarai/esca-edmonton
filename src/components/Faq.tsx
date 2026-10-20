import { useLanguage } from '@/i18n/LanguageContext';
import type { FaqItem } from '@/i18n/faq';
import { JsonLd } from '@/components/JsonLd';
import { ScrollReveal } from '@/components/ScrollReveal';

/**
 * Visible FAQ (question-form headings, answers always in the DOM) plus a
 * matching FAQPage schema built from the English text the prerender captures.
 */
export const Faq = ({ items, className = 'bg-background' }: { items: FaqItem[]; className?: string }) => {
  const { t, language } = useLanguage();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q.en,
      acceptedAnswer: { '@type': 'Answer', text: a.en },
    })),
  };

  return (
    <section className={`py-20 md:py-24 ${className}`}>
      <JsonLd data={schema} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-serif-display font-bold text-foreground text-center mb-4">
            {t('faq', 'title') as string}
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-12" />
        </ScrollReveal>
        <div className="space-y-8">
          {items.map(({ q, a }) => (
            <div key={q.en} className="border-b border-border pb-8 last:border-0">
              <h3 className="font-serif-display text-xl font-semibold text-foreground mb-3">{q[language]}</h3>
              <p className="text-muted-foreground leading-relaxed">{a[language]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
