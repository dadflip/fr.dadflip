import React, { createContext, useContext, useEffect, useState } from 'react';
import translations from '@/../public/locales/translations.json';
import { LanguageTranslations } from '@/types/types';
import { SupportedLanguages } from '@/types/types';


interface LanguageContextType {
    language: SupportedLanguages;
    changeLanguage: (lang: SupportedLanguages) => void;
    translate: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<SupportedLanguages>('en');
  const langTranslations = translations as LanguageTranslations;

  
  useEffect(() => {
    const storedLang = localStorage.getItem('language') as SupportedLanguages | null;
    if (storedLang) {
      setLanguage(storedLang);
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const changeLanguage = (lang: SupportedLanguages) => {
    setLanguage(lang);
  };

  const translate = (key: string) => langTranslations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
