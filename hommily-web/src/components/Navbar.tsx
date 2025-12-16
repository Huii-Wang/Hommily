'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navbar() {
  const pathname = usePathname();
  const { t, language, setLanguage } = useLanguage();

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.products'), path: '/products' },
    { name: t('nav.brand'), path: '/brand' },
    { name: t('nav.about'), path: '/about' },
  ];

  const languages = [
    { code: 'en' as const, label: 'EN' },
    { code: 'ja' as const, label: '日本語' },
    { code: 'zh' as const, label: '中文' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-xl font-semibold tracking-tight text-black hover:text-black/60 transition-colors"
          >
            Hommily
          </Link>

          <div className="flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium tracking-wide transition-all duration-200 relative ${
                  pathname === item.path
                    ? 'text-black'
                    : 'text-black/60 hover:text-black'
                }`}
              >
                {item.name}
                {pathname === item.path && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black"></span>
                )}
              </Link>
            ))}
            
            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-black/10">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`text-xs font-medium px-2 py-1 rounded transition-all duration-200 ${
                    language === lang.code
                      ? 'text-black bg-black/5'
                      : 'text-black/40 hover:text-black/60'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
