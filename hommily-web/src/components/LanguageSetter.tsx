'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageSetter() {
  const { language } = useLanguage();

  useEffect(() => {
    const langMap: Record<string, string> = {
      en: 'en',
      zh: 'zh-CN',
      ja: 'ja',
    };
    
    if (typeof document !== 'undefined') {
      document.documentElement.lang = langMap[language] || 'en';
    }
  }, [language]);

  return null;
}
