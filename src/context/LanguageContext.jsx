import React, { createContext, useContext, useState, useEffect } from 'react';
import tr from '../data/locales/tr.json';
import en from '../data/locales/en.json';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(localStorage.getItem('language') || 'tr');
  const [translations, setTranslations] = useState(lang === 'tr' ? tr : en);

  useEffect(() => {
    localStorage.setItem('language', lang);
    setTranslations(lang === 'tr' ? tr : en);
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'tr' ? 'en' : 'tr'));
  };

  return (
    <LanguageContext.Provider value={{ lang, translations, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);