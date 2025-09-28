// src/pages/adminpages/AdminDashboard.jsx
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ambil data orders dari localStorage
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
    setLoading(false);
  }, []);

  const formatRupiah = (value) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard Admin</h1>

      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Data Penjualan</h2>

        {loading ? (
          <p>Loading data...</p>
        ) : orders.length === 0 ? (
          <p>Belum ada transaksi.</p>
        ) : (
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2 text-left">#</th>
                <th className="border border-gray-300 p-2 text-left">Nama</th>
                <th className="border border-gray-300 p-2 text-left">Alamat</th>
                <th className="border border-gray-300 p-2 text-left">Pembayaran</th>
                <th className="border border-gray-300 p-2 text-right">Total</th>
                <th className="border border-gray-300 p-2 text-center">Tanggal</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-2">{index + 1}</td>
                  <td className="border border-gray-300 p-2">{order.name}</td>
                  <td className="border border-gray-300 p-2">{order.address}</td>
                  <td className="border border-gray-300 p-2">{order.payment}</td>
                  <td className="border border-gray-300 p-2 text-right">
                    {formatRupiah(order.total)}
                  </td>
                  <td className="border border-gray-300 p-2 text-center">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
