export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: '现代沙发系列',
      category: '客厅家具',
      description: '简约现代设计，舒适耐用，多种颜色可选',
      price: '¥ 5,999',
    },
    {
      id: 2,
      name: '实木餐桌',
      category: '餐厅家具',
      description: '精选优质实木，手工打磨，自然环保',
      price: '¥ 3,999',
    },
    {
      id: 3,
      name: '智能床垫',
      category: '卧室家具',
      description: '记忆棉材质，智能温控，助您安心入睡',
      price: '¥ 8,999',
    },
    {
      id: 4,
      name: '书架组合',
      category: '书房家具',
      description: '模块化设计，自由组合，满足不同空间需求',
      price: '¥ 2,499',
    },
    {
      id: 5,
      name: '儿童学习桌',
      category: '儿童家具',
      description: '可调节高度，符合人体工学，陪伴孩子成长',
      price: '¥ 1,999',
    },
    {
      id: 6,
      name: '户外休闲椅',
      category: '户外家具',
      description: '防水防晒，耐用美观，享受户外时光',
      price: '¥ 1,299',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            我们的产品
          </h1>
          <p className="text-xl text-gray-600">
            精选优质家居产品，为您打造理想家园
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <span className="text-6xl">🛋️</span>
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">
                  {product.category}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">
                    {product.price}
                  </span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                    了解更多
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            需要定制产品？
          </h2>
          <p className="text-gray-600 mb-6">
            我们提供专业的定制服务，满足您的个性化需求
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            联系我们
          </button>
        </div>
      </div>
    </div>
  );
}
