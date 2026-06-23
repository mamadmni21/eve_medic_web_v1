import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Language, translations, TranslationSet } from "../translations";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationSet;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Attempt localstorage read
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("eve_lang") as Language;
        if (saved && ["en", "ms", "id", "zh"].includes(saved)) {
          return saved;
        }
      } catch (e) {
        console.warn("Storage access denied: localStorage is disabled in this iframe sandbox.", e);
      }
    }
    return "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("eve_lang", lang);
    } catch (e) {
      console.warn("Storage write denied: localStorage is disabled in this iframe sandbox.", e);
    }
  };

  const t = translations[language] || translations["en"];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
