'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Header */}
      <div className="py-24 px-6 text-center border-b border-gray-100">
        <h1 className="text-5xl font-semibold tracking-tight text-black mb-4">
          {t('about.title')}
        </h1>
        <p className="text-xl text-gray-600">
          {t('about.subtitle')}
        </p>
      </div>

      {/* Company Introduction */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold tracking-tight text-black mb-12 text-center">
            {t('about.intro.title')}
          </h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>{t('about.intro.desc1')}</p>
            <p>{t('about.intro.desc2')}</p>
            <p>{t('about.intro.desc3')}</p>
          </div>
        </div>
      </section>

      {/* Brand Highlights */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-4xl font-semibold mb-2">Hommily</div>
              <p className="text-gray-400">日本注册商标品牌</p>
            </div>
            <div>
              <div className="text-4xl font-semibold mb-2">品质</div>
              <p className="text-gray-400">严选优质材料</p>
            </div>
            <div>
              <div className="text-4xl font-semibold mb-2">用心</div>
              <p className="text-gray-400">精心设计每一件产品</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold tracking-tight text-black mb-12 text-center">
            {t('about.contact.title')}
          </h2>
          <div className="bg-white p-8 md:p-12 border border-gray-200">
            <div className="space-y-8">
              <div>
                <h3 className="text-sm text-gray-500 tracking-widest uppercase mb-2">
                  {t('about.contact.address')}
                </h3>
                <p className="text-lg text-black">
                  {t('about.contact.addressValue')}
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm text-gray-500 tracking-widest uppercase mb-2">
                    {t('about.contact.person')}
                  </h3>
                  <p className="text-lg text-black">
                    {t('about.contact.personValue')}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500 tracking-widest uppercase mb-2">
                    {t('about.contact.email')}
                  </h3>
                  <p className="text-lg text-black">
                    {t('about.contact.emailValue')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
