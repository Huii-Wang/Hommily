'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center px-6">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-black mb-6">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
            {t('home.hero.subtitle')}
          </p>
          <Link
            href="/products"
            className="inline-block px-12 py-3 text-sm font-medium tracking-wide text-white rounded-sm shadow-lg hover:shadow-xl bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 bg-[length:200%_100%] animate-gradient-x"
          >
            {t('home.hero.cta')}
          </Link>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-semibold tracking-tight text-black mb-12 text-center">
          {t('home.about.title')}
        </h2>
        <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
          <p className="text-center">
            {t('home.about.desc1')}
          </p>
          <p className="text-center">
            {t('home.about.desc2')}
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">
                {t('home.values.mission')}
              </h3>
              <p className="text-gray-400">
                {t('home.values.missionDesc')}
              </p>
            </div>

            <div className="text-center border-l border-r border-gray-800">
              <h3 className="text-2xl font-semibold mb-4">
                {t('home.values.vision')}
              </h3>
              <p className="text-gray-400">
                {t('home.values.visionDesc')}
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">
                {t('home.values.value')}
              </h3>
              <p className="text-gray-400">
                {t('home.values.valueDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-black mb-6">
          {t('home.cta.title')}
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          {t('home.cta.subtitle')}
        </p>
        <Link href="/products" className="inline-block bg-black text-white px-12 py-3 text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors">
          {t('home.cta.button')}
        </Link>
      </section>
    </div>
  );
}
