import { useState } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Users, Heart, Handshake, Calendar, BookOpen, Globe, Send, Megaphone, Award, Building2, PersonStanding } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/i18n/LanguageContext';

const GetInvolved = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: '',
    message: '',
  });

  const membershipBenefits = [
    { icon: Calendar, title: t('membershipPage', 'benefit1Title') as string, desc: t('membershipPage', 'benefit1Desc') as string },
    { icon: BookOpen, title: t('membershipPage', 'benefit2Title') as string, desc: t('membershipPage', 'benefit2Desc') as string },
    { icon: Globe, title: t('membershipPage', 'benefit3Title') as string, desc: t('membershipPage', 'benefit3Desc') as string },
    { icon: Heart, title: t('membershipPage', 'benefit4Title') as string, desc: t('membershipPage', 'benefit4Desc') as string },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.inquiryType) {
      toast({ title: t('getInvolvedPage', 'toastSelectType') as string, variant: 'destructive' });
      return;
    }
    toast({
      title: t('getInvolvedPage', 'toastSuccess') as string,
      description: t('getInvolvedPage', 'toastSuccessDesc') as string,
    });
    setFormData({ name: '', email: '', company: '', inquiryType: '', message: '' });
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif-display font-bold mb-4">
            {t('getInvolvedPage', 'title') as string}
          </h1>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6" />
          <p className="text-lg opacity-90">
            {t('getInvolvedPage', 'subtitle') as string}
          </p>
        </div>
      </section>

      {/* Three Section Cards */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 items-start">

            {/* Membership */}
            <ScrollReveal>
              <Card className="border-secondary/20 hover:border-secondary/50 transition-colors">
                <CardHeader className="text-center pb-4">
                  <Users className="h-12 w-12 text-secondary mx-auto mb-3" />
                  <CardTitle className="font-serif-display text-2xl text-primary">
                    {t('getInvolvedPage', 'membershipTitle') as string}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-center text-sm">
                    {t('getInvolvedPage', 'membershipSubtitle') as string}
                  </p>
                  <div className="space-y-3 mt-2">
                    {membershipBenefits.map((b) => (
                      <div key={b.title} className="flex gap-3 items-start">
                        <b.icon className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium text-sm text-primary">{b.title}</p>
                          <p className="text-xs text-muted-foreground">{b.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-secondary/20 text-center">
                    <span className="inline-block bg-secondary/10 text-secondary font-semibold px-5 py-2 rounded-full text-sm tracking-wide">
                      {t('getInvolvedPage', 'comingSoon') as string}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Volunteer */}
            <ScrollReveal delay={100}>
              <Card className="border-secondary/20 hover:border-secondary/50 transition-colors overflow-hidden">
                <div>
                  <img
                    src="/images/volunteer.jpeg"
                    alt="Volunteers at the Pupusa Fundraiser"
                    className="w-full h-52 object-cover"
                  />
                  <p className="text-center text-xs text-muted-foreground italic py-2 bg-muted/40 border-b border-secondary/10">
                    {t('getInvolvedPage', 'volunteerCaption') as string}
                  </p>
                </div>
                <CardHeader className="text-center pb-4 pt-5">
                  <Heart className="h-12 w-12 text-secondary mx-auto mb-3" />
                  <CardTitle className="font-serif-display text-2xl text-primary">
                    {t('getInvolvedPage', 'volunteerTitle') as string}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    {t('getInvolvedPage', 'volunteerP1') as string}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {t('getInvolvedPage', 'volunteerP2') as string}
                  </p>
                  <a
                    href="https://forms.gle/6DjcBBMKZhFe9EVb6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block pt-2"
                  >
                    <Button className="w-full" size="lg">
                      <Heart className="mr-2 h-5 w-5" />
                      {t('getInvolvedPage', 'volunteerBtn') as string}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Sponsorship & Partnerships */}
            <ScrollReveal delay={200}>
              <Card className="border-secondary/20 hover:border-secondary/50 transition-colors">
                <CardHeader className="text-center pb-4">
                  <Handshake className="h-12 w-12 text-secondary mx-auto mb-3" />
                  <CardTitle className="font-serif-display text-2xl text-primary">
                    {t('getInvolvedPage', 'sponsorshipTitle') as string}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <p className="text-muted-foreground text-center text-sm">
                    {t('getInvolvedPage', 'sponsorshipSubtitle') as string}
                  </p>
                  <div>
                    <p className="font-semibold text-sm text-primary mb-2">
                      {t('getInvolvedPage', 'sponsorshipLabel') as string}
                    </p>
                    <div className="space-y-3">
                      <div className="flex gap-3 items-start">
                        <Megaphone className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium text-sm text-primary">
                            {t('getInvolvedPage', 'brandVisibilityTitle') as string}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {t('getInvolvedPage', 'brandVisibilityDesc') as string}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3 items-start">
                        <Award className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium text-sm text-primary">
                            {t('getInvolvedPage', 'communityRecognitionTitle') as string}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {t('getInvolvedPage', 'communityRecognitionDesc') as string}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-primary mb-2">
                      {t('getInvolvedPage', 'partnershipsLabel') as string}
                    </p>
                    <div className="space-y-3">
                      <div className="flex gap-3 items-start">
                        <Building2 className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium text-sm text-primary">
                            {t('getInvolvedPage', 'orgBusinessesTitle') as string}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {t('getInvolvedPage', 'orgBusinessesDesc') as string}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3 items-start">
                        <PersonStanding className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium text-sm text-primary">
                            {t('getInvolvedPage', 'individualsTitle') as string}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {t('getInvolvedPage', 'individualsDesc') as string}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-muted/30">
        <div className="max-w-2xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-serif-display font-bold text-primary text-center mb-4">
              {t('getInvolvedPage', 'formTitle') as string}
            </h2>
            <p className="text-muted-foreground text-center mb-10">
              {t('getInvolvedPage', 'formSubtitle') as string}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="gi-name">{t('getInvolvedPage', 'labelName') as string}</Label>
                      <Input
                        id="gi-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData(d => ({ ...d, name: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gi-email">{t('getInvolvedPage', 'labelEmail') as string}</Label>
                      <Input
                        id="gi-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(d => ({ ...d, email: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gi-company">{t('getInvolvedPage', 'labelCompany') as string}</Label>
                    <Input
                      id="gi-company"
                      value={formData.company}
                      onChange={(e) => setFormData(d => ({ ...d, company: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gi-inquiry">{t('getInvolvedPage', 'labelInquiry') as string}</Label>
                    <Select
                      value={formData.inquiryType}
                      onValueChange={(val) => setFormData(d => ({ ...d, inquiryType: val }))}
                    >
                      <SelectTrigger id="gi-inquiry">
                        <SelectValue placeholder={t('getInvolvedPage', 'inquiryPlaceholder') as string} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sponsorship">{t('getInvolvedPage', 'inquirySponsorship') as string}</SelectItem>
                        <SelectItem value="partnership">{t('getInvolvedPage', 'inquiryPartnership') as string}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gi-message">{t('getInvolvedPage', 'labelMessage') as string}</Label>
                    <Textarea
                      id="gi-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData(d => ({ ...d, message: e.target.value }))}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Send className="mr-2 h-5 w-5" />
                    {t('getInvolvedPage', 'submitBtn') as string}
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

export default GetInvolved;
