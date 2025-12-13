'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'zh' | 'ja';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('zh');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
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

const translations = {
  zh: {
    nav: {
      home: '首页',
      products: '产品',
      brand: '品牌',
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
        desc1: 'Hommily 源自 "Home" 和 "Family" 的结合，意为"家庭之家"。我们相信，家不仅是一个居住的空间，更是承载爱与温暖的地方。',
        desc2: '创始团队在多年的家居行业经验中发现，许多家庭在追求美观的同时，往往忽略了实用性和舒适度。因此，我们决心打造一个能够平衡美学与功能的家居品牌。',
        desc3: '从第一件产品开始，Hommily 就秉承着"让每个家庭都能享受高品质生活"的理念，不断创新，追求卓越。',
      },
      values: {
        title: '核心价值',
        quality: '品质第一',
        qualityDesc: '我们精选全球优质材料，严格把控每一个生产环节，确保产品经久耐用。',
        design: '设计创新',
        designDesc: '融合国际前沿设计理念，结合本土文化特色，创造独具匠心的产品。',
        sustainability: '环保可持续',
        sustainabilityDesc: '践行绿色环保理念，使用可持续材料，为地球和未来负责。',
        people: '以人为本',
        peopleDesc: '从用户需求出发，提供贴心服务，让每个家庭都能感受到我们的用心。',
      },
      stats: {
        awards: '国际设计大奖',
        countries: '覆盖国家和地区',
        customers: '满意客户',
      },
      promise: {
        title: '品牌承诺',
        desc: '我们承诺为每一位客户提供高品质的产品和服务，让 Hommily 成为您信赖的家居伙伴，陪伴您创造温馨美好的家庭生活。',
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
  },
  ja: {
    nav: {
      home: 'ホーム',
      products: '製品',
      brand: 'ブランド',
      about: '会社概要',
    },
    home: {
      hero: {
        title: '温かい家を作る',
        subtitle: '美しい生活を創造する',
        cta: '製品を探す',
      },
      about: {
        title: 'Hommilyについて',
        desc1: 'Hommilyは、世界中の家族に高品質な家具製品とソリューションを提供することに専念しています。すべての家族が温かく快適な生活空間を持つに値すると信じています。',
        desc2: '設立以来、私たちは常にお客様のニーズを第一に、製品ラインを革新し改善し続け、設計から実装まで一貫した家具サービスを提供しています。',
      },
      values: {
        mission: 'ミッション',
        missionDesc: 'すべての家族に温かく快適な生活空間を創造する',
        vision: 'ビジョン',
        visionDesc: '世界をリードする家具ブランドになる',
        value: '価値観',
        valueDesc: '品質、革新、サービス第一',
      },
      cta: {
        title: '家具の旅を始めましょう',
        subtitle: '理想の空間を一緒に作りましょう',
        button: 'お問い合わせ',
      },
    },
    products: {
      title: '製品シリーズ',
      subtitle: '品質生活の必需品',
      category: {
        humidifier: '加湿器',
        umbrella: '傘',
      },
      items: {
        humidifier1: {
          name: '卓上型加湿器',
          desc: '小型Type C充電式、大容量300ml超音波式、次亜塩素酸水対応、静音ポータブル',
        },
        humidifier2: {
          name: '大容量加湿器 3L',
          desc: 'マイナスイオン二重除菌、25W省エネ、360°吹出口、無段階ミスト調整、23dB静音',
        },
        manualUmbrella1: {
          name: '超軽量折りたたみ傘 179g',
          desc: 'UVカット100% UPF50+、航空用アルミ錆びにくい、遮熱熱中症対策、6本骨55cm、晴雨兼用',
        },
        manualUmbrella2: {
          name: '自動開閉折りたたみ傘 320g',
          desc: 'UVカット100% UPF50+、ワンタッチ自動開閉、8本骨直径96cm、超撥水耐風、晴雨兼用',
        },
        autoUmbrella1: {
          name: '逆折り式自動傘 10本骨',
          desc: 'UPF50+完全遮光、強化骨構造台風対応、反射テープ付き、10本骨豪雨対応、晴雨兼用',
        },
        autoUmbrella2: {
          name: '超軽量自動傘 310T',
          desc: '2025新款310T高密度生地、UVカット100% UPF50+、強化耐風骨、涼感遮熱、晴雨兼用',
        },
      },
      learnMore: '詳細を見る',
      customTitle: '心を込めたデザイン、日常を守る',
      customDesc: 'すべての製品を丁寧に磨き上げ、より快適な生活体験をお届けします',
      contact: 'お問い合わせ',
    },
    brand: {
      title: 'ブランド理念',
      subtitle: '日本登録商標、品質生活グッズ',
      story: {
        title: 'ブランドストーリー',
        desc1: 'Hommilyは「Home」と「Family」の組み合わせから生まれ、「温かい家庭」を意味します。生活の細部一つ一つが大切にされるべきだと信じ、オーラルケアから日用品まで、より良い選択肢を提供します。',
        desc2: '日本登録商標ブランドとして、Hommilyは消費者に高品質な生活用品を提供することに専念しています。電動歯ブラシ、舌クリーナーなどのオーラルケア製品、ティッシュホルダー、ティッシュボックスなどのバスルーム収納製品を取り扱っています。',
        desc3: 'Hommilyのすべての製品は、丁寧な設計と厳格な品質管理を経て、お客様の日常生活により多くの便利さと快適さをお届けします。',
      },
      trademark: {
        title: '商標認証',
        name: '商標名',
        regNumber: '登録番号',
        regNumberValue: '第6885170号',
        regDate: '登録日',
        regDateValue: '2025年1月15日',
        type: '商標タイプ',
        typeValue: '標準文字商標',
        class: '商品分類',
        classValue: '第21類',
        validity: '有効期限',
        validityValue: '2035年1月15日まで',
        products: '指定商品',
        productsValue: '衛生用品、ティッシュホルダー、ティッシュボックス、電動歯ブラシ、舌クリーナー及び関連製品',
      },
      categories: {
        title: '製品分野',
        oralCare: 'オーラルケア',
        oralCareDesc: '電動歯ブラシ、舌クリーナーなど口腔ケア製品',
        bathroom: 'バスルーム用品',
        bathroomDesc: 'ティッシュホルダー、ティッシュボックスなど収納製品',
        homeLife: '生活グッズ',
        homeLifeDesc: '加湿器、傘など品質生活用品',
      },
      values: {
        title: 'コアバリュー',
        quality: '品質保証',
        qualityDesc: '厳選された高品質素材を使用し、すべての製品は厳格な品質検査を経て、安全で耐久性のある製品をお届けします。',
        design: '心を込めた設計',
        designDesc: '使用の細部一つ一つにこだわり、実用性とデザイン性を兼ね備え、日常生活の質を向上させます。',
        practical: '実用性重視',
        practicalDesc: 'お客様のニーズに基づき、生活の課題を解決する製品を開発し、より便利で快適な生活を実現します。',
        trust: '信頼のブランド',
        trustDesc: '日本登録商標ブランド、正規販売チャネル、充実したアフターサービスで、安心してお買い求めいただけます。',
      },
      stats: {
        awards: '国際デザイン賞',
        countries: '対象国と地域',
        customers: '満足した顧客',
      },
      promise: {
        title: 'ブランドの約束',
        desc: 'Hommilyはすべてのお客様に高品質な生活用品と心のこもったサービスを提供することをお約束します。一つ一つの製品を丁寧に作り上げ、お客様の日常生活をより豊かにします。',
      },
    },
    about: {
      title: '会社概要',
      subtitle: 'Hommilyのチームと文化を知る',
      companyInfo: {
        title: '会社情報',
        name: '会社名',
        nameValue: 'Hommily家具科技有限公司',
        founded: '設立',
        foundedValue: '2015年',
        location: '本社所在地',
        locationValue: '中国上海市浦東新区',
        employees: '従業員数',
        employeesValue: '500+ 人',
        phone: '電話番号',
        phoneValue: '400-888-8888',
        email: 'メール',
        emailValue: 'contact@hommily.com',
      },
      team: {
        title: 'コアチーム',
        member1: {
          name: '張偉',
          position: '創業者 & CEO',
          desc: '15年の家具業界経験、国際的な家具ブランドの構築に尽力',
        },
        member2: {
          name: '李娜',
          position: 'チーフデザイナー',
          desc: '複数の国際デザイン賞を受賞、モダンミニマリストスタイルが得意',
        },
        member3: {
          name: '王強',
          position: '技術ディレクター',
          desc: '製品研究開発と革新に専念し、スマートホームの発展を推進',
        },
      },
      culture: {
        title: '企業文化',
        innovation: '革新精神',
        innovationDesc: '革新的思考を奨励し、新技術と新方法を試み、伝統的な境界を絶えず突破します。',
        teamwork: 'チームワーク',
        teamworkDesc: 'チームワークを重視し、オープンなコミュニケーションを提唱し、お客様のために価値を創造します。',
        customer: '顧客第一',
        customerDesc: '常にお客様のニーズを第一に、期待を超える製品とサービスを提供します。',
        responsibility: '社会的責任',
        responsibilityDesc: '社会的責任を積極的に担い、環境保護と持続可能な発展に注目し、社会に還元します。',
      },
      timeline: {
        title: '発展の歴史',
        2015: 'Hommily正式設立、家具業界の革新の道を開く',
        2017: '最初のスマートホーム製品ラインを発表、市場で広く認知される',
        2019: '海外市場に事業を拡大、東南アジアに支社を設立',
        2021: '国際デザイン賞を受賞、ブランドの影響力が大幅に向上',
        2023: '累計100万人以上の顧客にサービスを提供し、業界をリードするブランドに',
      },
    },
  },
};
