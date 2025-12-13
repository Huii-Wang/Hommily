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
    brand: 'HOMMILY',
    about: '关于我们',
  },
  home: {
    hero: {
      title: '打造温馨家居',
      subtitle: '创造美好生活',
      cta: '探索产品',
    },
    about: {
      title: '关于 Hommily',
      desc1: 'Hommily 致力于为全球家庭提供高品质的家居产品和解决方案。我们相信，每个家庭都值得拥有温馨、舒适的生活空间。',
      desc2: '自成立以来，我们始终坚持以客户需求为导向，不断创新和完善产品线，为客户提供从设计到实施的一站式家居服务。',
    },
    values: {
      mission: '使命',
      missionDesc: '为每个家庭创造温馨舒适的生活空间',
      vision: '愿景',
      visionDesc: '成为全球领先的家居品牌',
      value: '价值观',
      valueDesc: '品质、创新、服务至上',
    },
    cta: {
      title: '开始您的家居之旅',
      subtitle: '让我们一起打造您的理想空间',
      button: '联系我们',
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
    subtitle: '了解 Hommily 的团队与文化',
    companyInfo: {
      title: '公司信息',
      name: '公司名称',
      nameValue: 'Hommily 家居科技有限公司',
      founded: '成立时间',
      foundedValue: '2015年',
      location: '总部地址',
      locationValue: '中国上海市浦东新区',
      employees: '员工规模',
      employeesValue: '500+ 人',
      phone: '联系电话',
      phoneValue: '400-888-8888',
      email: '电子邮箱',
      emailValue: 'contact@hommily.com',
    },
    team: {
      title: '核心团队',
      member1: {
        name: '张伟',
        position: '创始人 & CEO',
        desc: '15年家居行业经验，致力于打造国际化家居品牌',
      },
      member2: {
        name: '李娜',
        position: '首席设计师',
        desc: '获得多项国际设计大奖，擅长现代简约风格',
      },
      member3: {
        name: '王强',
        position: '技术总监',
        desc: '专注产品研发与创新，推动智能家居发展',
      },
    },
    culture: {
      title: '企业文化',
      innovation: '创新精神',
      innovationDesc: '鼓励创新思维，勇于尝试新技术和新方法，不断突破传统边界。',
      teamwork: '团队协作',
      teamworkDesc: '重视团队合作，倡导开放沟通，共同为客户创造价值。',
      customer: '客户至上',
      customerDesc: '始终将客户需求放在首位，提供超越期待的产品和服务。',
      responsibility: '社会责任',
      responsibilityDesc: '积极承担社会责任，关注环保和可持续发展，回馈社会。',
    },
    timeline: {
      title: '发展历程',
      2015: 'Hommily 正式成立，开启家居行业创新之路',
      2017: '推出首个智能家居产品线，获得市场广泛认可',
      2019: '业务扩展至海外市场，在东南亚设立分公司',
      2021: '获得国际设计大奖，品牌影响力显著提升',
      2023: '累计服务客户超过100万，成为行业领先品牌',
    },
  },
};
