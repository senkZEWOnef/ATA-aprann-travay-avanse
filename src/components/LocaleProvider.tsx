'use client';
import { createContext, useContext } from 'react';
import htMessages from '../messages/ht.json';
import frMessages from '../messages/fr.json';

const messages = { ht: htMessages, fr: frMessages };

const LocaleContext = createContext({
  locale: 'ht' as 'ht' | 'fr',
  t: (key: string) => key,
});

export function LocaleProvider({ 
  children, 
  locale 
}: { 
  children: React.ReactNode; 
  locale: string; 
}) {
  const currentLocale = (locale === 'fr' ? 'fr' : 'ht') as 'ht' | 'fr';
  const currentMessages = messages[currentLocale];

  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = currentMessages;
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LocaleContext.Provider value={{ locale: currentLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useTranslations(namespace?: string) {
  const { t } = useContext(LocaleContext);
  
  return (key: string) => {
    const fullKey = namespace ? `${namespace}.${key}` : key;
    return t(fullKey);
  };
}

export function useLocale() {
  const { locale } = useContext(LocaleContext);
  return locale;
}