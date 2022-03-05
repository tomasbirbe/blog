import { createContext, useContext, useState } from 'react';

const LangContext = createContext(null);

function LangProvider({ children }) {
  const [lang, setLang] = useState('es');
  const value = { lang, setLang };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

function useLang() {
  const context = useContext(LangContext);

  if (context === undefined) {
    throw new Error('useLang must be used within a LangProvider');
  }

  return context;
}

export { LangProvider, useLang };
