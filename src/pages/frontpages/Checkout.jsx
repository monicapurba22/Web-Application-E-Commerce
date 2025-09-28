import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout({ cart = [], setCart }) {
  const navigate = useNavigate();

  // fungsi format harga Rupiah
  const formatRupiah = (value) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);

  // total keseluruhan
  const total =
    cart && cart.length > 0
      ? cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
      : 0;

  // state untuk form
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    payment: "Transfer Bank",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Buat object order baru
    const newOrder = {
      id: Date.now(), // ID unik
      name: formData.name,
      address: formData.address,
      payment: formData.payment,
      total: total,
      date: new Date().toISOString().split("T")[0], // format yyyy-mm-dd
    };

    // Ambil orders dari localStorage
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    existingOrders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(existingOrders));

    alert(
      `Terima kasih, ${formData.name}!\nPesananmu sebesar ${formatRupiah(
        total
      )} akan dikirim ke alamat:\n${formData.address}\nMetode pembayaran: ${formData.payment}`
    );

    // Kosongkan keranjang setelah checkout
    setCart([]);

    // Redirect ke homepage / dashboard
    navigate("/");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      {cart.length === 0 ? (
        <p>Keranjang masih kosong. Silakan kembali ke dashboard untuk belanja.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ringkasan Belanja */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Ringkasan Belanja</h2>
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between border-b py-2 text-gray-700"
              >
                <div>
                  <span className="font-semibold">{item.name}</span>{" "}
                  <span className="text-gray-500">(x{item.quantity})</span>
                  <div className="text-sm">
                    Harga: {formatRupiah(item.price)} | Subtotal:{" "}
                    <span className="text-green-600 font-semibold">
                      {formatRupiah(item.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            <p className="mt-4 text-xl font-bold">
              Total: {formatRupiah(total)}
            </p>
          </div>

          {/* Form checkout */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-xl font-semibold mb-3">Data Pembeli</h2>

            <div>
              <label className="block mb-1 font-medium">Nama Lengkap</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border rounded p-2"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Alamat</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full border rounded p-2"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                Metode Pembayaran
              </label>
              <select
                name="payment"
                value={formData.payment}
                onChange={handleChange}
                className="w-full border rounded p-2"
              >
                <option>Transfer Bank</option>
                <option>COD (Bayar di Tempat)</option>
                <option>OVO / Dana / Gopay</option>
              </select>
            </div>

            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Konfirmasi Pembelian
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
