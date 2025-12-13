'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function BrandPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Header */}
      <div className="py-24 px-6 text-center border-b border-gray-100">
        <h1 className="text-5xl font-semibold tracking-tight text-black mb-4">
          {t('brand.title')}
        </h1>
        <p className="text-xl text-gray-600">
          {t('brand.subtitle')}
        </p>
      </div>

      {/* Brand Story */}
      <section className="py-32 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-semibold tracking-tight text-black mb-12 text-center">
          {t('brand.story.title')}
        </h2>
        <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
          <p className="text-center">
            {t('brand.story.desc1')}
          </p>
          <p className="text-center">
            {t('brand.story.desc2')}
          </p>
          <p className="text-center">
            {t('brand.story.desc3')}
          </p>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-32 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-16 text-center">
            {t('brand.values.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="border-t border-gray-800 pt-8">
              <h3 className="text-2xl font-semibold mb-4">{t('brand.values.quality')}</h3>
              <p className="text-gray-400">
                {t('brand.values.qualityDesc')}
              </p>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <h3 className="text-2xl font-semibold mb-4">{t('brand.values.design')}</h3>
              <p className="text-gray-400">
                {t('brand.values.designDesc')}
              </p>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <h3 className="text-2xl font-semibold mb-4">{t('brand.values.sustainability')}</h3>
              <p className="text-gray-400">
                {t('brand.values.sustainabilityDesc')}
              </p>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <h3 className="text-2xl font-semibold mb-4">{t('brand.values.people')}</h3>
              <p className="text-gray-400">
                {t('brand.values.peopleDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16 text-center">
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-5xl font-semibold text-black mb-4">
                10+
              </h3>
              <p className="text-gray-600 tracking-wide">
                {t('brand.stats.awards')}
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-5xl font-semibold text-black mb-4">
                50+
              </h3>
              <p className="text-gray-600 tracking-wide">
                {t('brand.stats.countries')}
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-5xl font-semibold text-black mb-4">
                100万+
              </h3>
              <p className="text-gray-600 tracking-wide">
                {t('brand.stats.customers')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-32 px-6 text-center bg-gray-50">
        <h2 className="text-4xl font-semibold tracking-tight text-black mb-6">
          {t('brand.promise.title')}
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {t('brand.promise.desc')}
        </p>
      </section>
    </div>
  );
}
