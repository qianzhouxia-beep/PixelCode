import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import zh from './locales/zh';
import en from './locales/en';

type Language = 'zh' | 'en';
type Translations = typeof zh;

const translations: Record<Language, Translations> = { zh, en };

interface I18nContextType {
  t: (key: keyof Translations, params?: Record<string, string | number>) => string;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const I18nContext = createContext<I18nContextType | null>(null);

const STORAGE_KEY = 'pixelcode-lang';

function I18nProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    return (saved === 'en' ? 'en' : 'zh') as Language;
  });

  const setLanguage = useCallback((newLang: Language) => {
    setLanguageState(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, newLang);
    }
  }, []);

  const t = useCallback((key: keyof Translations, params?: Record<string, string | number>) => {
    let str = translations[language][key] || key;
    if (params) {
      Object.entries(params).forEach(([k, v]) => {
        str = str.replace(`{${k}}`, String(v));
      });
    }
    return str;
  }, [language]);

  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  }, [language]);

  return React.createElement(
    I18nContext.Provider,
    { value: { t, language, setLanguage } },
    children
  );
}

export { I18nProvider };

export const useTranslation = (): I18nContextType => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useTranslation must be used within I18nProvider');
  return ctx;
};
