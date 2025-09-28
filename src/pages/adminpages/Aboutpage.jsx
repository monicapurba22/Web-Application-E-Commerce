import { useEffect, useState } from "react";

export default function AdminAbout() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">About Admin Page</h1>

      <div className="bg-white p-6 rounded shadow space-y-4">
        <p>
          <strong>My Admin App</strong> — v1.0.0.  
          Aplikasi ini digunakan untuk memantau transaksi pelanggan dan pengelolaan toko online.
        </p>

        <p>
          <strong>Admin:</strong> Monica Agustriani Purba <br />
          <strong>Email:</strong> monica@student.undiksha.ac.id
        </p>

        <div>
          <h2 className="font-semibold">Statistik Singkat:</h2>
          <ul className="list-disc list-inside">
            <li>Total transaksi: {orders.length}</li>
            <li>Total pendapatan: {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
              minimumFractionDigits: 0
            }).format(totalRevenue)}</li>
          </ul>
        </div>

        <p>
          Halaman ini hanya dapat diakses oleh admin untuk memonitor data toko dan transaksi pelanggan.
        </p>
      </div>
    </div>
  );
}
