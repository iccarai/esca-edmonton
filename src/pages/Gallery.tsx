import { useLanguage } from '@/i18n/LanguageContext';
import { ScrollReveal } from '@/components/ScrollReveal';
import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Images } from 'lucide-react';

const imageModules = import.meta.glob('/src/assets/gallery/*', {
  eager: true,
  query: '?url',
  import: 'default',
});
const images = Object.values(imageModules) as string[];

const Gallery = () => {
  const { t } = useLanguage();
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
          <div className="w-24 h-1 bg-secondary mx-auto" />
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
            <div className="columns-2 md:columns-3 lg:columns-4 gap-3 [column-fill:_balance]">
              {images.map((src, i) => (
                <ScrollReveal key={src}>
                  <button
                    onClick={() => setSelected(i)}
                    className="block w-full mb-3 overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                  >
                    <img
                      src={src}
                      alt={`ESCA gallery photo ${i + 1}`}
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
            src={images[selected]}
            alt={`ESCA gallery photo ${selected + 1}`}
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
