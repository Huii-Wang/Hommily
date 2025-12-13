export default function AboutPage() {
  const teamMembers = [
    {
      name: '张伟',
      position: '创始人 & CEO',
      description: '15年家居行业经验，致力于打造国际化家居品牌',
    },
    {
      name: '李娜',
      position: '首席设计师',
      description: '获得多项国际设计大奖，擅长现代简约风格',
    },
    {
      name: '王强',
      position: '技术总监',
      description: '专注产品研发与创新，推动智能家居发展',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            关于我们
          </h1>
          <p className="text-xl text-gray-600">
            了解 Hommily 的团队与文化
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            公司信息
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">公司名称</h3>
              <p>Hommily 家居科技有限公司</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">成立时间</h3>
              <p>2015年</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">总部地址</h3>
              <p>中国上海市浦东新区</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">员工规模</h3>
              <p>500+ 人</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">联系电话</h3>
              <p>400-888-8888</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">电子邮箱</h3>
              <p>contact@hommily.com</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            核心团队
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">👤</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            企业文化
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                创新精神
              </h3>
              <p className="text-gray-600">
                鼓励创新思维，勇于尝试新技术和新方法，不断突破传统边界。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                团队协作
              </h3>
              <p className="text-gray-600">
                重视团队合作，倡导开放沟通，共同为客户创造价值。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                客户至上
              </h3>
              <p className="text-gray-600">
                始终将客户需求放在首位，提供超越期待的产品和服务。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                社会责任
              </h3>
              <p className="text-gray-600">
                积极承担社会责任，关注环保和可持续发展，回馈社会。
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            发展历程
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 font-bold text-blue-600">
                2015
              </div>
              <div className="text-gray-600">
                Hommily 正式成立，开启家居行业创新之路
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 font-bold text-blue-600">
                2017
              </div>
              <div className="text-gray-600">
                推出首个智能家居产品线，获得市场广泛认可
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 font-bold text-blue-600">
                2019
              </div>
              <div className="text-gray-600">
                业务扩展至海外市场，在东南亚设立分公司
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 font-bold text-blue-600">
                2021
              </div>
              <div className="text-gray-600">
                获得国际设计大奖，品牌影响力显著提升
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 font-bold text-blue-600">
                2023
              </div>
              <div className="text-gray-600">
                累计服务客户超过100万，成为行业领先品牌
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
