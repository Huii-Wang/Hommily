'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navbar() {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.products'), path: '/products' },
    { name: t('nav.brand'), path: '/brand' },
    { name: t('nav.about'), path: '/about' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-center gap-16">
          <Link href="/" className="absolute left-6 text-xl font-semibold tracking-tight text-black hover:text-gray-600 transition-colors">
            HOMMILY
          </Link>

          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium tracking-wide transition-all duration-200 ${
                  pathname === item.path
                    ? 'text-black'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="absolute right-6 flex items-center gap-2">
            <button
              onClick={() => setLanguage('zh')}
              className={`text-sm font-medium transition-colors ${
                language === 'zh' ? 'text-black' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              中文
            </button>
            <span className="text-gray-300">|</span>
            <button
              onClick={() => setLanguage('ja')}
              className={`text-sm font-medium transition-colors ${
                language === 'ja' ? 'text-black' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              日本語
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
