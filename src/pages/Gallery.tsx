import { useLanguage } from '@/i18n/LanguageContext';
import { useSeo } from '@/hooks/useSeo';
import { PAGE_SEO } from '@/lib/seo';
import { ScrollReveal } from '@/components/ScrollReveal';
import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Images } from 'lucide-react';

import type { Language } from '@/i18n/translations';

const imageModules = import.meta.glob('/src/assets/gallery/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

// Alt text and intrinsic size per photo, keyed by file name. A photo added to
// src/assets/gallery without an entry here falls back to a generic alt.
const PHOTO_INFO: Record<string, { w: number; h: number; alt: Record<Language, string> }> = {
  '01-esca-volunteer-preparing-salsa.webp': {
    w: 1200, h: 1600,
    alt: { en: 'ESCA volunteer preparing salsa cups for a community fundraiser in Edmonton', es: 'Voluntario de ESCA preparando salsa para una recaudación comunitaria en Edmonton' },
  },
  '02-esca-volunteers-in-kitchen.webp': {
    w: 1600, h: 1200,
    alt: { en: 'Two ESCA volunteers in Latina shirts making food in a community kitchen', es: 'Dos voluntarias de ESCA con camisetas Latina preparando comida en una cocina comunitaria' },
  },
  '03-esca-volunteers-salvadoran-flags.webp': {
    w: 1600, h: 1200,
    alt: { en: 'Three ESCA volunteers under a string of Salvadoran flags', es: 'Tres voluntarias de ESCA bajo una fila de banderas salvadoreñas' },
  },
  '04-esca-community-members.webp': {
    w: 1200, h: 1600,
    alt: { en: 'Members of the Salvadoran and Latin community at an ESCA gathering in Edmonton', es: 'Miembros de la comunidad salvadoreña y latina en una reunión de ESCA en Edmonton' },
  },
  '05-esca-el-salvador-tent-alberta-avenue.webp': {
    w: 1200, h: 1600,
    alt: { en: 'ESCA volunteers at the El Salvador tent on Alberta Avenue in Edmonton', es: 'Voluntarios de ESCA en la carpa de El Salvador en Alberta Avenue, Edmonton' },
  },
  '06-esca-pupusa-booth-alberta-avenue.webp': {
    w: 1600, h: 1200,
    alt: { en: 'ESCA El Salvador booth serving pupusas on Alberta Avenue in Edmonton', es: 'Puesto de El Salvador de ESCA con pupusas en Alberta Avenue, Edmonton' },
  },
};

const images = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => ({ src, info: PHOTO_INFO[path.split('/').pop() ?? ''] }));

const Gallery = () => {
  const { t, language } = useLanguage();
  const altFor = (i: number) => images[i].info?.alt[language] ?? `ESCA gallery photo ${i + 1}`;
  useSeo(PAGE_SEO.gallery);
  const [selected, setSelected] = useState<number | null>(null);

  const close = useCallback(() => setSelected(null), []);
  const prev = useCallback(() =>
    setSelected(i => i !== null ? (i - 1 + images.length) % images.length : null), []);
  const next = useCallback(() =>
    setSelected(i => i !== null ? (i + 1) % images.length : null), []);

  useEffect(() => {
    if (selected === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selected, close, prev, next]);

  useEffect(() => {
    document.body.style.overflow = selected !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selected]);

  return (
    <div className="pt-20">
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif-display font-bold mb-4">
            {t('gallery', 'title') as string}
          </h1>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6" />
          <p className="text-lg opacity-90">
            {t('gallery', 'subtitle') as string}
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          {images.length === 0 ? (
            <div className="text-center py-20">
              <Images className="h-16 w-16 text-secondary/40 mx-auto mb-6" />
              <h2 className="text-2xl font-serif-display font-bold text-primary">
                {t('gallery', 'comingSoon') as string}
              </h2>
            </div>
          ) : (
            <div className="columns-2 md:columns-3 gap-3 [column-fill:_balance]">
              {images.map(({ src, info }, i) => (
                <ScrollReveal key={src}>
                  <button
                    onClick={() => setSelected(i)}
                    className="block w-full mb-3 overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                  >
                    <img
                      src={src}
                      alt={altFor(i)}
                      width={info?.w}
                      height={info?.h}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </button>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {selected !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Gallery lightbox"
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={close}
        >
          <button
            aria-label="Previous image"
            onClick={e => { e.stopPropagation(); prev(); }}
            className="absolute left-3 md:left-6 text-white/80 hover:text-secondary p-2 transition-colors"
          >
            <ChevronLeft className="h-9 w-9" />
          </button>

          <img
            src={images[selected].src}
            alt={altFor(selected)}
            className="max-h-[88vh] max-w-[88vw] object-contain rounded shadow-2xl"
            onClick={e => e.stopPropagation()}
          />

          <button
            aria-label="Next image"
            onClick={e => { e.stopPropagation(); next(); }}
            className="absolute right-3 md:right-6 text-white/80 hover:text-secondary p-2 transition-colors"
          >
            <ChevronRight className="h-9 w-9" />
          </button>

          <button
            aria-label="Close"
            onClick={close}
            className="absolute top-4 right-4 text-white/80 hover:text-secondary p-2 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          <span className="absolute bottom-4 text-white/50 text-sm select-none">
            {selected + 1} / {images.length}
          </span>
        </div>
      )}
    </div>
  );
};

export default Gallery;
