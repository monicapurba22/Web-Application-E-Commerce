import { Link } from "react-router-dom";

export default function Cart({ cart, setCart }) {
  const formatRupiah = (value) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);

  // fungsi hapus produk
  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  // fungsi tambah jumlah
  const increaseQty = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
  };

  // fungsi kurang jumlah
  const decreaseQty = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCart(updatedCart);
    } else {
      // kalau quantity = 1 dan dikurangi → otomatis hapus
      removeFromCart(index);
    }
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Keranjang Belanja</h2>
      {cart.length === 0 ? (
        <p>Keranjang masih kosong.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b py-2"
            >
              <div>
                <span className="font-semibold">{item.name}</span>
                <div className="text-sm text-gray-600">
                  Harga: {formatRupiah(item.price)} | Subtotal:{" "}
                  <span className="text-green-600 font-semibold">
                    {formatRupiah(item.price * item.quantity)}
                  </span>
                </div>
              </div>

              {/* kontrol jumlah */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => decreaseQty(index)}
                  className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => increaseQty(index)}
                  className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                >
                  +
                </button>

                {/* hapus produk */}
                <button
                  onClick={() => removeFromCart(index)}
                  className="ml-4 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Hapus
                </button>
              </div>
            </div>
          ))}
          <p className="mt-4 font-bold text-xl">
            Total: {formatRupiah(total)}
          </p>
          <Link
            to="/checkout"
            className="bg-blue-500 text-white px-4 py-2 mt-4 inline-block rounded hover:bg-blue-600"
          >
            Proceed to Checkout
          </Link>
        </>
      )}
    </div>
  );
}
