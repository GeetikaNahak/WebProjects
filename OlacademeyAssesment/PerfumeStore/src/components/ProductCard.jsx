export function ProductCard({ product }) {
    return (
      <div className="overflow-hidden shadow-lg border rounded-lg transition-transform transform hover:scale-105">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold">{product.name}</h3>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-lg font-bold mt-2">${product.price}</p>
          <a href={`/product/${product.id}`} className="block mt-2 bg-blue-500 hover:bg-blue-600 text-white text-center py-2 rounded">View Details</a>
        </div>
      </div>
    );
  }