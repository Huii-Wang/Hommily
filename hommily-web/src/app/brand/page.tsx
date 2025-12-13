export default function BrandPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Hommily 品牌
          </h1>
          <p className="text-xl text-gray-600">
            传递温暖，创造美好生活体验
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            品牌故事
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Hommily 源自 "Home" 和 "Family" 的结合，意为"家庭之家"。我们相信，家不仅是一个居住的空间，更是承载爱与温暖的地方。
            </p>
            <p>
              创始团队在多年的家居行业经验中发现，许多家庭在追求美观的同时，往往忽略了实用性和舒适度。因此，我们决心打造一个能够平衡美学与功能的家居品牌。
            </p>
            <p>
              从第一件产品开始，Hommily 就秉承着"让每个家庭都能享受高品质生活"的理念，不断创新，追求卓越。
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg p-8 mb-8 text-white">
          <h2 className="text-3xl font-bold mb-6">
            品牌理念
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">品质第一</h3>
              <p className="text-blue-100">
                我们精选全球优质材料，严格把控每一个生产环节，确保产品经久耐用。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">设计创新</h3>
              <p className="text-blue-100">
                融合国际前沿设计理念，结合本土文化特色，创造独具匠心的产品。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">环保可持续</h3>
              <p className="text-blue-100">
                践行绿色环保理念，使用可持续材料，为地球和未来负责。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">以人为本</h3>
              <p className="text-blue-100">
                从用户需求出发，提供贴心服务，让每个家庭都能感受到我们的用心。
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-5xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              10+
            </h3>
            <p className="text-gray-600">
              国际设计大奖
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-5xl mb-4">🌍</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              50+
            </h3>
            <p className="text-gray-600">
              覆盖国家和地区
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-5xl mb-4">❤️</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              100万+
            </h3>
            <p className="text-gray-600">
              满意客户
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            品牌承诺
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            我们承诺为每一位客户提供高品质的产品和服务，让 Hommily 成为您信赖的家居伙伴，陪伴您创造温馨美好的家庭生活。
          </p>
        </div>
      </div>
    </div>
  );
}
