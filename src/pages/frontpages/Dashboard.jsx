import { Link, useOutletContext } from "react-router-dom";
import { products } from "../../data/product";

export default function Dashboard({ addToCart }) {
  const { selectedCategory, searchTerm } = useOutletContext();

  const formatRupiah = (value) =>
    new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(value);

  const filteredProducts = products.filter((p) => {
    const matchCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  // 👉 fungsi render bintang
  const renderStars = (rating) => {
    return "⭐".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard Produk</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow hover:shadow-lg flex flex-col bg-white"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-40 w-full object-contain mb-3 rounded"
              />
              <h2 className="font-semibold text-lg">{product.name}</h2>

              {/* ⭐ Rating */}
              <p className="text-yellow-500 text-sm">{renderStars(product.rating)}</p>

              <p className="text-gray-600 text-sm">{product.desc}</p>
              <p className="text-sm text-blue-500 mt-1">{product.category}</p>
              <p className="text-green-600 font-bold mt-2">
                {formatRupiah(product.price)}
              </p>

              <div className="mt-auto">
                <Link
                  to={`/product/${product.id}`}
                  className="text-blue-600 hover:underline mt-2 block"
                >
                  Lihat Detail
                </Link>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-2 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-full"
                >
                  Tambah ke Keranjang
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Produk tidak ditemukan.</p>
        )}
      </div>
    </div>
  );
}
