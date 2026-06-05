import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, TranslationType } from "./translations";

export type Language = "en" | "es" | "pt";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: TranslationType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const getCookieLang = (): Language | null => {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(/(?:^|; )alma_lang=([^;]*)/);
  if (match) {
    const val = match[1];
    if (val === "en" || val === "es" || val === "pt") {
      return val as Language;
    }
  }
  return null;
};

const setCookieLang = (lang: Language): void => {
  if (typeof document === "undefined") return;
  document.cookie = `alma_lang=${lang};path=/;max-age=${365 * 24 * 60 * 60};SameSite=Lax`;
};

const getInitialLanguage = (): Language => {
  const cookieLang = getCookieLang();
  if (cookieLang) return cookieLang;

  if (typeof navigator !== "undefined") {
    const browserLang = navigator.language.split("-")[0];
    if (browserLang === "es" || browserLang === "pt") {
      return browserLang as Language;
    }
  }

  return "en";
};

interface LanguageProviderProps {
  children: ReactNode;
}

const HTML_LANG: Record<Language, string> = {
  en: "en-GB",
  es: "es-ES",
  pt: "pt-PT"
};

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [lang, setLangState] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[lang];
  }, [lang]);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    setCookieLang(newLang);
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
