export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            欢迎来到 Hommily
          </h1>
          <p className="text-xl text-gray-600">
            打造温馨家居，创造美好生活
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            公司简介
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Hommily 致力于为全球家庭提供高品质的家居产品和解决方案。我们相信，每个家庭都值得拥有温馨、舒适的生活空间。
            </p>
            <p>
              自成立以来，我们始终坚持以客户需求为导向，不断创新和完善产品线，为客户提供从设计到实施的一站式家居服务。
            </p>
            <p>
              我们的团队由经验丰富的设计师和工程师组成，他们将现代美学与实用功能完美结合，为每一位客户打造独特的家居环境。
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl text-blue-600 mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              我们的使命
            </h3>
            <p className="text-gray-600">
              为每个家庭创造温馨舒适的生活空间
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl text-blue-600 mb-4">👁️</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              我们的愿景
            </h3>
            <p className="text-gray-600">
              成为全球领先的家居品牌
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl text-blue-600 mb-4">💡</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              核心价值
            </h3>
            <p className="text-gray-600">
              品质、创新、服务至上
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
