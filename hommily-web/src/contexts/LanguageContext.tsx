'use client';

import React, { createContext, useContext } from 'react';

interface LanguageContextType {
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations;

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}

const translations = {
  nav: {
    home: '首页',
    products: '产品',
    brand: 'Hommily',
    about: '关于我们',
  },
  home: {
    hero: {
      title: '用心设计 守护日常',
      subtitle: '加湿器 · 晴雨伞 · 品质生活好物',
      cta: '探索产品',
    },
    about: {
      title: '关于 Hommily',
      desc1: 'Hommily 源自 "Home" 和 "Family" 的结合，寓意温馨家庭。我们专注于为日常生活提供高品质的实用好物。',
      desc2: '从静音便携的加湿器，到UV遮断100%的晴雨伞，每一件产品都经过精心打磨，只为给您带来更舒适的生活体验。',
    },
    values: {
      mission: '加湿器系列',
      missionDesc: '超声波静音技术，大容量持久滋润',
      vision: '晴雨伞系列',
      visionDesc: 'UPF50+ 防晒，轻量耐用，晴雨兼用',
      value: '品质承诺',
      valueDesc: '日本注册商标，品质值得信赖',
    },
    cta: {
      title: '发现更多好物',
      subtitle: '让生活更加便捷舒适',
      button: '查看全部产品',
    },
  },
  products: {
    title: '产品系列',
    subtitle: '品质生活好物',
    category: {
      humidifier: '加湿器',
      umbrella: '雨伞',
    },
    items: {
      humidifier1: {
        name: '桌面型加湿器',
        desc: '小型Type C充电式，大容量300ml超声波型，支持次氯酸水，静音便携',
      },
      humidifier2: {
        name: '大容量加湿器 3L',
        desc: '负离子双重消毒，25W节能，360°出雾口，无级雾量调节，23dB静音',
      },
      manualUmbrella1: {
        name: '超轻折叠伞 179g',
        desc: 'UV遮断100% UPF50+，航空铝合金防锈，遮热防中暑，6本骨架55cm，晴雨兼用',
      },
      manualUmbrella2: {
        name: '自动开合折叠伞 320g',
        desc: 'UV遮断100% UPF50+，一键自动开关，8本骨直径96cm，超防水防风，晴雨兼用',
      },
      autoUmbrella1: {
        name: '逆折式自动伞 10骨',
        desc: 'UPF50+完全遮光，强化骨架防台风，反射条设计，10本骨防暴雨，晴雨兼用',
      },
      autoUmbrella2: {
        name: '超轻自动伞 310T',
        desc: '2025新款310T高密度，UV遮断100% UPF50+，强化防风，凉感遮热，晴雨兼用',
      },
    },
    learnMore: '了解更多',
    customTitle: '用心设计，守护日常',
    customDesc: '每一件产品都经过精心打磨，只为给您带来更舒适的生活体验',
    contact: '联系我们',
  },
  brand: {
    title: '品牌理念',
    subtitle: '传递温暖，创造美好生活体验',
    story: {
      title: '品牌故事',
      desc1: 'Hommily 源自 "Home" 和 "Family" 的结合，寓意"温馨家庭"。我们专注于为日常生活提供高品质的实用好物，从加湿器到晴雨伞，每一件产品都承载着对品质生活的追求。',
      desc2: 'Hommily 始终坚持品质至上。我们的加湿器系列采用超声波技术，静音便携；晴雨伞系列主打UV遮断100%、UPF50+防护，轻量耐用，晴雨兼用。',
      desc3: '每一件 Hommily 产品都经过精心设计与严格品控，致力于为您的日常生活带来更多便利与舒适。用心设计，守护日常。',
    },
    values: {
      title: '核心价值',
      quality: '品质保证',
      qualityDesc: '严选优质材料，每一件产品都经过严格品质检测，确保安全可靠、经久耐用。',
      design: '用心设计',
      designDesc: '关注每一个使用细节，将实用功能与美学设计完美结合，提升日常生活品质。',
      practical: '实用至上',
      practicalDesc: '以用户需求为导向，打造真正解决生活痛点的产品，让生活更加便捷舒适。',
      trust: '值得信赖',
      trustDesc: '完善的售后服务，让您购买无忧。',
    },
    promise: {
      title: '品牌承诺',
      desc: 'Hommily 承诺为每一位用户提供高品质的生活用品和贴心的服务。我们用心打造每一件产品，只为让您的日常生活更加美好。',
    },
  },
  about: {
    title: '关于我们',
    subtitle: '深圳市易加云科技有限公司',
    intro: {
      title: '公司简介',
      desc1: '深圳市易加云科技有限公司成立于2019年，是一家专注于智能家居及生活用品研发、设计与销售的创新型科技企业。公司总部位于深圳市龙岗区，拥有专业的产品研发团队和完善的供应链体系，旗下运营 Hommily 品牌，致力于为全球消费者提供高品质的生活好物。',
      desc2: '公司秉承"用心设计，守护日常"的品牌理念，主营产品包括超声波静音加湿器系列、UV遮断100%防晒晴雨伞系列等。我们坚持以用户需求为导向，将先进技术与人性化设计相结合，每一件产品都经过严格的品质检测和反复的用户体验优化，只为给您带来更舒适、更便捷的生活体验。',
      desc3: 'Hommily 品牌已成功注册日本商标，产品通过多项国际品质认证，远销日本、东南亚及欧美等海外市场，深受消费者信赖与喜爱。未来，易加云科技将继续深耕品质生活领域，不断推出更多创新产品，成为您值得信赖的品质生活伙伴。',
    },
    contact: {
      title: '联系我们',
      address: '公司地址',
      addressValue: '深圳市龙岗区坂田街道象角塘社区雪岗南路146号云汇中心二期C栋C225',
      person: '联系人',
      personValue: '徐志斌',
      email: '电子邮箱',
      emailValue: '18375860652@163.com',
    },
  },
};
