import React, { createContext, useContext, useState, useCallback } from 'react';
import { Language, translations, TranslationKey } from './translations';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (section: keyof TranslationKey, key: string) => string | string[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = useCallback(() => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en');
  }, []);

  const t = useCallback((section: keyof TranslationKey, key: string): any => {
    const sectionData = translations[section] as any;
    if (!sectionData || !sectionData[key]) return key;
    const value = sectionData[key];
    if (typeof value === 'object' && 'en' in value) {
      return value[language];
    }
    // Handle nested objects like pillar1: { title: {en, es}, desc: {en, es} }
    if (typeof value === 'object') {
      const result: any = {};
      for (const k in value) {
        const v = value[k];
        if (typeof v === 'object' && 'en' in v) {
          result[k] = v[language];
        } else {
          result[k] = v;
        }
      }
      return result;
    }
    return key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
