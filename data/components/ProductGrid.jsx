import products from '../data/products.json'

export default function ProductGrid() {
  return (
    <section className="py-16 bg-[#F5F1EB]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Recommended Hardware for Your Build</h2>
        <p className="text-center text-gray-600 mt-2 mb-8">Ships from EU & US warehouses in 3-7 days • International</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(p => (
            <div key={p.id} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition">
              <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                {p.title_en}
              </div>
              <div className="mt-4">
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">{p.shipping_from.join('/')} STOCK</span>
                <h3 className="font-semibold mt-2">{p.title_en}</h3>
                <p className="text-sm text-gray-500">{p.delivery_days} delivery</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="font-bold">${p.price_usd} / {p.price_eur}€</span>
                  <button className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800">
                    Add to Build
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
