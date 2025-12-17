'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'zh' | 'ja';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // 从localStorage读取保存的语言设置
    const savedLanguage = localStorage.getItem('hommily-language') as Language;
    if (savedLanguage && ['en', 'zh', 'ja'].includes(savedLanguage)) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('hommily-language', lang);
  };

  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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

const translations: Record<Language, any> = {
  en: {
    nav: {
      home: 'Home',
      products: 'Products',
      brand: 'Hommily',
      about: 'About Us',
    },
    home: {
      hero: {
        title: 'Thoughtful Design, Daily Protection',
        subtitle: 'Humidifiers · Umbrellas · Quality Lifestyle Products',
        cta: 'Explore Products',
      },
      about: {
        title: 'About Hommily',
        desc1: 'Hommily comes from the combination of "Home" and "Family", symbolizing a warm family. We focus on providing high-quality practical products for daily life.',
        desc2: 'From quiet portable humidifiers to 100% UV-blocking umbrellas, every product is carefully crafted to bring you a more comfortable living experience.',
      },
      values: {
        mission: 'Humidifier Series',
        missionDesc: 'Ultrasonic quiet technology, large capacity for lasting moisture',
        vision: 'Umbrella Series',
        visionDesc: 'UPF50+ sun protection, lightweight and durable, all-weather use',
        value: 'Quality Promise',
        valueDesc: 'Japanese registered trademark, trusted quality',
      },
      cta: {
        title: 'Discover More Products',
        subtitle: 'Make life more convenient and comfortable',
        button: 'View All Products',
      },
    },
    products: {
      title: 'Product Series',
      subtitle: 'Quality Lifestyle Products',
      category: {
        humidifier: 'Humidifier',
        umbrella: 'Umbrella',
      },
      items: {
        humidifier1: {
          name: 'Desktop Humidifier',
          desc: 'Compact Type-C rechargeable, 300ml large capacity ultrasonic type, supports hypochlorous acid water, quiet and portable',
        },
        humidifier2: {
          name: 'Large Capacity Humidifier 3L',
          desc: 'Negative ion dual disinfection, 25W energy saving, 360° mist outlet, stepless mist volume adjustment, 23dB quiet',
        },
        manualUmbrella1: {
          name: 'Ultra-Light Folding Umbrella 179g',
          desc: '100% UV blocking UPF50+, aviation aluminum alloy anti-rust, heat protection, 6-rib 55cm, all-weather use',
        },
        manualUmbrella2: {
          name: 'Auto Open/Close Folding Umbrella 320g',
          desc: '100% UV blocking UPF50+, one-button auto switch, 8-rib 96cm diameter, super waterproof and windproof, all-weather use',
        },
        autoUmbrella1: {
          name: 'Reverse Folding Auto Umbrella 10-Rib',
          desc: 'UPF50+ complete shading, reinforced frame for typhoon resistance, reflective strip design, 10-rib for heavy rain, all-weather use',
        },
        autoUmbrella2: {
          name: 'Ultra-Light Auto Umbrella 310T',
          desc: '2025 new 310T high density, 100% UV blocking UPF50+, reinforced windproof, cool heat protection, all-weather use',
        },
      },
      learnMore: 'Learn More',
      customTitle: 'Thoughtful Design, Daily Protection',
      customDesc: 'Every product is carefully crafted to bring you a more comfortable living experience',
      contact: 'Contact Us',
    },
    brand: {
      title: 'Brand Philosophy',
      subtitle: 'Spreading Warmth, Creating Beautiful Life Experiences',
      story: {
        title: 'Brand Story',
        desc1: 'Hommily comes from the combination of "Home" and "Family", symbolizing a "warm family". We focus on providing high-quality practical products for daily life, from humidifiers to umbrellas, each product carries the pursuit of quality living.',
        desc2: 'Hommily always adheres to quality first. Our humidifier series uses ultrasonic technology, quiet and portable; our umbrella series features 100% UV blocking, UPF50+ protection, lightweight and durable, all-weather use.',
        desc3: 'Every Hommily product is carefully designed and strictly quality-controlled, committed to bringing more convenience and comfort to your daily life. Thoughtful design, daily protection.',
      },
      values: {
        title: 'Core Values',
        quality: 'Quality Assurance',
        qualityDesc: 'Carefully selected quality materials, every product undergoes strict quality testing to ensure safety, reliability and durability.',
        design: 'Thoughtful Design',
        designDesc: 'Focus on every detail of use, perfectly combining practical functions with aesthetic design to enhance daily life quality.',
        practical: 'Practical First',
        practicalDesc: 'User-oriented, creating products that truly solve life problems, making life more convenient and comfortable.',
        trust: 'Trustworthy',
        trustDesc: 'Perfect after-sales service, worry-free purchase.',
      },
      promise: {
        title: 'Brand Promise',
        desc: 'Hommily promises to provide every user with high-quality lifestyle products and thoughtful service. We carefully create every product, just to make your daily life more beautiful.',
      },
    },
    about: {
      title: 'About Us',
      subtitle: '',
      intro: {
        title: 'About Us',
        desc1: 'Shenzhen Yijiayun Technology Co., Ltd is an innovative technology company focusing on smart home and lifestyle product R&D, design and sales. The company headquarters is located in Longgang District, Shenzhen, with a professional product R&D team and a complete supply chain system. It operates the Hommily brand, committed to providing high-quality lifestyle products for global consumers.',
        desc2: 'The company adheres to the brand philosophy of "Thoughtful Design, Daily Protection". Main products include ultrasonic quiet humidifier series, 100% UV-blocking sun protection umbrella series, etc. We insist on being user-oriented, combining advanced technology with humanized design. Every product undergoes strict quality testing and repeated user experience optimization, just to bring you a more comfortable and convenient living experience.',
        desc3: 'The Hommily brand has successfully registered a Japanese trademark. Products have passed multiple international quality certifications and are exported to overseas markets such as Japan, Southeast Asia, Europe and America, deeply trusted and loved by consumers. In the future, Yijiayun Technology will continue to deepen the quality lifestyle field, continuously launch more innovative products, and become your trusted quality lifestyle partner.',
      },
      contact: {
        title: 'Contact Us',
        address: 'Company Address',
        addressValue: 'Room C225, Building C, Phase 2, Yunhui Center, No. 146 Xuegang South Road, Xiangjiaotang Community, Bantian Street, Longgang District, Shenzhen',
        person: 'Contact Person',
        personValue: 'Xu Zhibin',
        email: 'Email',
        emailValue: 'zhibin.xu@ecloudsz.com',
      },
    },
  },
  zh: {
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
      subtitle: '',
      intro: {
        title: '关于我们',
        desc1: '深圳市易加云科技有限公司是一家专注于智能家居及生活用品研发、设计与销售的创新型科技企业。公司总部位于深圳市龙岗区，拥有专业的产品研发团队和完善的供应链体系，旗下运营 Hommily 品牌，致力于为全球消费者提供高品质的生活好物。',
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
        emailValue: 'zhibin.xu@ecloudsz.com',
      },
    },
  },
  ja: {
    nav: {
      home: 'ホーム',
      products: '製品',
      brand: 'Hommily',
      about: '私たちについて',
    },
    home: {
      hero: {
        title: '心を込めたデザイン、日常を守る',
        subtitle: '加湿器 · 晴雨兼用傘 · 品質の高い生活用品',
        cta: '製品を探索',
      },
      about: {
        title: 'Hommilyについて',
        desc1: 'Hommilyは「Home」と「Family」の組み合わせから生まれ、「温かい家庭」を意味します。私たちは日常生活に高品質な実用的な製品を提供することに専念しています。',
        desc2: '静音でポータブルな加湿器から、UV遮断100%の晴雨兼用傘まで、すべての製品は丁寧に仕上げられ、より快適な生活体験をお届けします。',
      },
      values: {
        mission: '加湿器シリーズ',
        missionDesc: '超音波静音技術、大容量で持続的な潤い',
        vision: '晴雨兼用傘シリーズ',
        visionDesc: 'UPF50+日焼け防止、軽量で耐久性があり、晴雨兼用',
        value: '品質の約束',
        valueDesc: '日本登録商標、信頼できる品質',
      },
      cta: {
        title: 'もっと製品を発見',
        subtitle: '生活をより便利で快適に',
        button: 'すべての製品を見る',
      },
    },
    products: {
      title: '製品シリーズ',
      subtitle: '品質の高い生活用品',
      category: {
        humidifier: '加湿器',
        umbrella: '傘',
      },
      items: {
        humidifier1: {
          name: 'デスクトップ加湿器',
          desc: '小型Type C充電式、大容量300ml超音波型、次亜塩素酸水対応、静音でポータブル',
        },
        humidifier2: {
          name: '大容量加湿器 3L',
          desc: '負イオン二重消毒、25W省エネ、360°ミストアウトレット、無段階ミスト量調節、23dB静音',
        },
        manualUmbrella1: {
          name: '超軽量折りたたみ傘 179g',
          desc: 'UV遮断100% UPF50+、航空アルミニウム合金防錆、遮熱・熱中症防止、6本骨55cm、晴雨兼用',
        },
        manualUmbrella2: {
          name: '自動開閉折りたたみ傘 320g',
          desc: 'UV遮断100% UPF50+、ワンタッチ自動スイッチ、8本骨直径96cm、超防水・防風、晴雨兼用',
        },
        autoUmbrella1: {
          name: '逆折り自動傘 10本骨',
          desc: 'UPF50+完全遮光、強化骨組み台風対策、反射条設計、10本骨豪雨対策、晴雨兼用',
        },
        autoUmbrella2: {
          name: '超軽量自動傘 310T',
          desc: '2025年新作310T高密度、UV遮断100% UPF50+、強化防風、涼感遮熱、晴雨兼用',
        },
      },
      learnMore: 'もっと詳しく',
      customTitle: '心を込めたデザイン、日常を守る',
      customDesc: 'すべての製品は丁寧に仕上げられ、より快適な生活体験をお届けします',
      contact: 'お問い合わせ',
    },
    brand: {
      title: 'ブランド理念',
      subtitle: '温かみを伝え、美しい生活体験を創造',
      story: {
        title: 'ブランドストーリー',
        desc1: 'Hommilyは「Home」と「Family」の組み合わせから生まれ、「温かい家庭」を意味します。私たちは日常生活に高品質な実用的な製品を提供することに専念し、加湿器から晴雨兼用傘まで、すべての製品が品質生活への追求を担っています。',
        desc2: 'Hommilyは常に品質第一を堅持しています。加湿器シリーズは超音波技術を採用し、静音でポータブル。晴雨兼用傘シリーズはUV遮断100%、UPF50+保護を特徴とし、軽量で耐久性があり、晴雨兼用です。',
        desc3: 'すべてのHommily製品は丁寧に設計され、厳格な品質管理を経て、日常生活により多くの便利さと快適さをもたらすことに専念しています。心を込めたデザイン、日常を守る。',
      },
      values: {
        title: 'コアバリュー',
        quality: '品質保証',
        qualityDesc: '厳選された高品質材料、すべての製品は厳格な品質テストを経て、安全性、信頼性、耐久性を確保します。',
        design: '心を込めたデザイン',
        designDesc: '使用のあらゆる細部に注目し、実用的な機能と美的デザインを完璧に組み合わせ、日常生活の品質を向上させます。',
        practical: '実用性第一',
        practicalDesc: 'ユーザー志向で、生活の痛みを真に解決する製品を作り、生活をより便利で快適にします。',
        trust: '信頼できる',
        trustDesc: '完璧なアフターサービス、安心の購入。',
      },
      promise: {
        title: 'ブランドの約束',
        desc: 'Hommilyはすべてのユーザーに高品質な生活用品と心のこもったサービスを提供することを約束します。私たちはすべての製品を丁寧に作り、あなたの日常生活をより美しくします。',
      },
    },
    about: {
      title: '私たちについて',
      subtitle: '',
      intro: {
        title: '私たちについて',
        desc1: '深圳市易加云科技有限公司は、スマートホームおよび生活用品の研究開発、設計、販売に焦点を当てた革新的な技術企業です。本社は深圳市龍崗区にあり、専門的な製品研究開発チームと完全なサプライチェーンシステムを有し、Hommilyブランドを運営し、世界中の消費者に高品質な生活用品を提供することに専念しています。',
        desc2: '会社は「心を込めたデザイン、日常を守る」というブランド理念を堅持し、主な製品には超音波静音加湿器シリーズ、UV遮断100%日焼け防止晴雨兼用傘シリーズなどが含まれます。私たちはユーザー志向を堅持し、先進技術と人間中心のデザインを組み合わせ、すべての製品は厳格な品質テストと繰り返しのユーザー体験最適化を経て、より快適で便利な生活体験をお届けします。',
        desc3: 'Hommilyブランドは日本商標を登録し、製品は複数の国際品質認証を通過し、日本、東南アジア、欧米などの海外市場に輸出され、消費者に深く信頼され愛されています。今後、易加云科技は品質生活分野を継続的に深耕し、より多くの革新的製品を継続的に発売し、信頼できる品質生活パートナーになります。',
      },
      contact: {
        title: 'お問い合わせ',
        address: '会社住所',
        addressValue: '深圳市龍崗区坂田街道象角塘社区雪崗南路146号雲匯中心二期C棟C225',
        person: '連絡先',
        personValue: '徐志斌',
        email: 'メールアドレス',
        emailValue: 'zhibin.xu@ecloudsz.com',
      },
    },
  },
};
