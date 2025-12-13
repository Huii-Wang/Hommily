'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ProductsPage() {
  const { t } = useLanguage();

  const products = [
    {
      id: 1,
      key: 'humidifier1',
      category: t('products.category.humidifier'),
      name: t('products.items.humidifier1.name'),
      description: t('products.items.humidifier1.desc'),
      price: '¥ 299',
      image: '/products/1.jpg',
    },
    {
      id: 2,
      key: 'humidifier2',
      category: t('products.category.humidifier'),
      name: t('products.items.humidifier2.name'),
      description: t('products.items.humidifier2.desc'),
      price: '¥ 499',
      image: '/products/2.jpg',
    },
    {
      id: 3,
      key: 'manualUmbrella1',
      category: t('products.category.umbrella'),
      name: t('products.items.manualUmbrella1.name'),
      description: t('products.items.manualUmbrella1.desc'),
      price: '¥ 129',
      image: '/products/3.jpg',
    },
    {
      id: 4,
      key: 'manualUmbrella2',
      category: t('products.category.umbrella'),
      name: t('products.items.manualUmbrella2.name'),
      description: t('products.items.manualUmbrella2.desc'),
      price: '¥ 199',
      image: '/products/4.jpg',
    },
    {
      id: 5,
      key: 'autoUmbrella1',
      category: t('products.category.umbrella'),
      name: t('products.items.autoUmbrella1.name'),
      description: t('products.items.autoUmbrella1.desc'),
      price: '¥ 249',
      image: '/products/5.jpg',
    },
    {
      id: 6,
      key: 'autoUmbrella2',
      category: t('products.category.umbrella'),
      name: t('products.items.autoUmbrella2.name'),
      description: t('products.items.autoUmbrella2.desc'),
      price: '¥ 229',
      image: '/products/6.jpg',
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Header */}
      <div className="py-24 px-6 text-center border-b border-gray-100">
        <h1 className="text-5xl font-semibold tracking-tight text-black mb-4">
          {t('products.title')}
        </h1>
        <p className="text-xl text-gray-600">
          {t('products.subtitle')}
        </p>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1 bg-gray-100">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-8 hover:bg-gray-50 transition-colors cursor-pointer group"
            >
              <div className="mb-6">
                <div className="relative w-full aspect-square bg-gray-100 mb-6 overflow-hidden group-hover:bg-gray-200 transition-colors">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="text-xs text-gray-500 tracking-widest uppercase mb-3">
                  {product.category}
                </div>
                <h3 className="text-2xl font-semibold text-black mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-600">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-32 px-6 text-center bg-black text-white">
        <h2 className="text-4xl font-semibold mb-6">
          {t('products.customTitle')}
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          {t('products.customDesc')}
        </p>
      </div>
    </div>
  );
}