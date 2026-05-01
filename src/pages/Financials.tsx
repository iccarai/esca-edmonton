import { useLanguage } from '@/i18n/LanguageContext';
import { ScrollReveal } from '@/components/ScrollReveal';
import { FileText, Download } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Financials = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20">
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif-display font-bold mb-4">{t('financials', 'title') as string}</h1>
          <div className="w-24 h-1 bg-secondary mx-auto mt-4" />
          <p className="text-primary-foreground/70 mt-4">{t('financials', 'subtitle') as string}</p>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <a href="/docs/annual-report-25.pdf" target="_blank" rel="noopener noreferrer" className="block group">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 sm:p-8 flex items-center justify-between gap-6">
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <FileText className="h-7 w-7 sm:h-8 sm:w-8 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-serif-display text-lg sm:text-xl font-semibold">{t('financials', 'firstYear') as string}</h3>
                      <p className="text-muted-foreground text-sm">ESCA '25 Year Report</p>
                    </div>
                  </div>
                  <Download className="h-5 w-5 text-muted-foreground group-hover:text-secondary transition-colors flex-shrink-0" />
                </CardContent>
              </Card>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Financials;
