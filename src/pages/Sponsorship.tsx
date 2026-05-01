import { useLanguage } from '@/i18n/LanguageContext';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Heart, Send, ImageIcon } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Sponsorship = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t('sponsorshipPage', 'formSuccess') as string,
      description: t('sponsorshipPage', 'formSuccessDesc') as string,
    });
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif-display font-bold mb-4">
            {t('sponsorshipPage', 'title') as string}
          </h1>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6" />
          <p className="text-lg opacity-90">{t('sponsorshipPage', 'subtitle') as string}</p>
        </div>
      </section>

      {/* Why Sponsor */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <Heart className="h-14 w-14 text-secondary mx-auto mb-6" />
            <h2 className="text-3xl font-serif-display font-bold text-primary mb-4">
              {t('sponsorshipPage', 'whyTitle') as string}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              {t('sponsorshipPage', 'whyDesc') as string}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Sponsors */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-serif-display font-bold text-primary text-center mb-4">
              {t('sponsorshipPage', 'sponsorsTitle') as string}
            </h2>
            <p className="text-muted-foreground text-center mb-12">
              {t('sponsorshipPage', 'sponsorsSubtitle') as string}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="flex justify-center">
              <div className="bg-card border border-dashed border-secondary/30 rounded-xl p-10 flex flex-col items-center justify-center w-full max-w-sm min-h-48">
                <ImageIcon className="h-12 w-12 text-secondary/40 mb-3" />
                <span className="text-sm text-muted-foreground italic text-center">
                  {t('sponsorshipPage', 'sponsorsPlaceholder') as string}
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-20 bg-background">
        <div className="max-w-2xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-serif-display font-bold text-primary text-center mb-4">
              {t('sponsorshipPage', 'formTitle') as string}
            </h2>
            <p className="text-muted-foreground text-center mb-10">
              {t('sponsorshipPage', 'formSubtitle') as string}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="sp-name">{t('sponsorshipPage', 'labelName') as string}</Label>
                      <Input
                        id="sp-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData(d => ({ ...d, name: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="sp-email">{t('sponsorshipPage', 'labelEmail') as string}</Label>
                      <Input
                        id="sp-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(d => ({ ...d, email: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sp-company">{t('sponsorshipPage', 'labelCompany') as string}</Label>
                    <Input
                      id="sp-company"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData(d => ({ ...d, company: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sp-message">{t('sponsorshipPage', 'labelMessage') as string}</Label>
                    <Textarea
                      id="sp-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData(d => ({ ...d, message: e.target.value }))}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Send className="mr-2 h-5 w-5" />
                    {t('sponsorshipPage', 'submitBtn') as string}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Sponsorship;
