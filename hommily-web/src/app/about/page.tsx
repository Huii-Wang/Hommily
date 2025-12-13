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

      {/* Company Info */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold tracking-tight text-black mb-16 text-center">
            {t('about.companyInfo.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-sm text-gray-500 tracking-widest uppercase mb-2">{t('about.companyInfo.name')}</h3>
              <p className="text-lg text-black">{t('about.companyInfo.nameValue')}</p>
            </div>
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-sm text-gray-500 tracking-widest uppercase mb-2">{t('about.companyInfo.founded')}</h3>
              <p className="text-lg text-black">{t('about.companyInfo.foundedValue')}</p>
            </div>
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-sm text-gray-500 tracking-widest uppercase mb-2">{t('about.companyInfo.location')}</h3>
              <p className="text-lg text-black">{t('about.companyInfo.locationValue')}</p>
            </div>
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-sm text-gray-500 tracking-widest uppercase mb-2">{t('about.companyInfo.employees')}</h3>
              <p className="text-lg text-black">{t('about.companyInfo.employeesValue')}</p>
            </div>
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-sm text-gray-500 tracking-widest uppercase mb-2">{t('about.companyInfo.phone')}</h3>
              <p className="text-lg text-black">{t('about.companyInfo.phoneValue')}</p>
            </div>
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-sm text-gray-500 tracking-widest uppercase mb-2">{t('about.companyInfo.email')}</h3>
              <p className="text-lg text-black">{t('about.companyInfo.emailValue')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-32 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-semibold mb-16 text-center">
            {t('about.team.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-16">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-800 mx-auto mb-6"></div>
              <h3 className="text-2xl font-semibold mb-2">
                {t('about.team.member1.name')}
              </h3>
              <p className="text-gray-400 mb-4">
                {t('about.team.member1.position')}
              </p>
              <p className="text-gray-500 text-sm">
                {t('about.team.member1.desc')}
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-800 mx-auto mb-6"></div>
              <h3 className="text-2xl font-semibold mb-2">
                {t('about.team.member2.name')}
              </h3>
              <p className="text-gray-400 mb-4">
                {t('about.team.member2.position')}
              </p>
              <p className="text-gray-500 text-sm">
                {t('about.team.member2.desc')}
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-800 mx-auto mb-6"></div>
              <h3 className="text-2xl font-semibold mb-2">
                {t('about.team.member3.name')}
              </h3>
              <p className="text-gray-400 mb-4">
                {t('about.team.member3.position')}
              </p>
              <p className="text-gray-500 text-sm">
                {t('about.team.member3.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold tracking-tight text-black mb-16 text-center">
            {t('about.culture.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-2xl font-semibold text-black mb-4">
                {t('about.culture.innovation')}
              </h3>
              <p className="text-gray-600">
                {t('about.culture.innovationDesc')}
              </p>
            </div>
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-2xl font-semibold text-black mb-4">
                {t('about.culture.teamwork')}
              </h3>
              <p className="text-gray-600">
                {t('about.culture.teamworkDesc')}
              </p>
            </div>
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-2xl font-semibold text-black mb-4">
                {t('about.culture.customer')}
              </h3>
              <p className="text-gray-600">
                {t('about.culture.customerDesc')}
              </p>
            </div>
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-2xl font-semibold text-black mb-4">
                {t('about.culture.responsibility')}
              </h3>
              <p className="text-gray-600">
                {t('about.culture.responsibilityDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold tracking-tight text-black mb-16 text-center">
            {t('about.timeline.title')}
          </h2>
          <div className="space-y-12">
            <div className="flex gap-8 border-l-2 border-gray-300 pl-8">
              <div className="flex-shrink-0 w-20 font-semibold text-black text-xl">
                2015
              </div>
              <div className="text-gray-600">
                {t('about.timeline.2015')}
              </div>
            </div>
            <div className="flex gap-8 border-l-2 border-gray-300 pl-8">
              <div className="flex-shrink-0 w-20 font-semibold text-black text-xl">
                2017
              </div>
              <div className="text-gray-600">
                {t('about.timeline.2017')}
              </div>
            </div>
            <div className="flex gap-8 border-l-2 border-gray-300 pl-8">
              <div className="flex-shrink-0 w-20 font-semibold text-black text-xl">
                2019
              </div>
              <div className="text-gray-600">
                {t('about.timeline.2019')}
              </div>
            </div>
            <div className="flex gap-8 border-l-2 border-gray-300 pl-8">
              <div className="flex-shrink-0 w-20 font-semibold text-black text-xl">
                2021
              </div>
              <div className="text-gray-600">
                {t('about.timeline.2021')}
              </div>
            </div>
            <div className="flex gap-8 border-l-2 border-gray-300 pl-8">
              <div className="flex-shrink-0 w-20 font-semibold text-black text-xl">
                2023
              </div>
              <div className="text-gray-600">
                {t('about.timeline.2023')}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
