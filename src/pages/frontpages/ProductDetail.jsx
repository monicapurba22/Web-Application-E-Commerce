import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { products } from "../../data/product"; // pastikan path sesuai

export default function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate(); // untuk redirect ke checkout
  const product = products.find((p) => p.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);

  // fungsi format Rupiah
  const formatRupiah = (value) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);

  // fungsi render bintang rating
  const renderStars = (rating) => {
    return "⭐".repeat(rating) + "☆".repeat(5 - rating);
  };

  if (!product) {
    return <p className="p-6 text-red-600">Produk tidak ditemukan.</p>;
  }

  // Hitung total harga = harga satuan × jumlah
  const totalPrice = product.price * quantity;

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  // Fungsi Beli Sekarang: tambahkan ke keranjang lalu langsung checkout
  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/checkout");
  };

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Gambar produk */}
      <div className="flex justify-center items-center border rounded-lg p-4 bg-white shadow">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="max-h-96 object-contain rounded"
          />
        ) : (
          <div className="h-40 flex items-center justify-center bg-gray-100 text-gray-400 mb-3 w-full">
            No Image
          </div>
        )}
      </div>

      {/* Detail produk */}
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

        {/* ⭐ Rating */}
        <p className="text-yellow-500 text-sm mb-2">
          {renderStars(product.rating)}
        </p>

        <p className="text-gray-600 mb-2">{product.desc}</p>
        <p className="text-sm text-blue-500">{product.category}</p>
        <p className="text-green-600 font-bold text-2xl mt-4">
          {formatRupiah(product.price)}
        </p>

        {/* Input jumlah */}
        <div className="mt-4">
          <label className="block font-medium mb-1">Jumlah:</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="border rounded p-2 w-24"
          />
        </div>

        {/* Total harga */}
        <p className="mt-3 text-lg font-bold">
          Total:{" "}
          <span className="text-green-600">{formatRupiah(totalPrice)}</span>
        </p>

        {/* Tombol aksi */}
        <div className="mt-6 flex gap-4">
          <button
            onClick={handleAddToCart}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Tambah ke Keranjang
          </button>
          <button
            onClick={handleBuyNow}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Beli Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}
