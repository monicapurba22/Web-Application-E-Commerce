import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

export default function MainLayout({ cart }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex flex-col min-h-screen">
      {/* NAVBAR */}
      <header className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow">
        {/* Brand */}
        <h1 className="font-bold text-xl">ShopMonic</h1> 
        {/* 👉 kalau mau ganti brand tinggal ubah teks ini */}

        {/* Menu Navigasi */}
        <nav className="flex gap-6 items-center">
          <Link to="/" className="hover:text-gray-200">
            Dashboard
          </Link>
          <Link to="/cart" className="hover:text-gray-200">
            Keranjang {cart.length > 0 && `(${cart.length})`}
          </Link>
          <Link to="/checkout" className="hover:text-gray-200">
            Checkout
          </Link>
        </nav>
      </header>

      {/* SEARCH & FILTER */}
      <div className="bg-gray-100 py-3 px-6 shadow-sm">
        <div className="flex flex-col md:flex-row gap-3 md:gap-6 items-center justify-between">
          {/* Input Pencarian */}
          <input
            type="text"
            placeholder="Cari produk..."
            className="border rounded px-4 py-2 w-full md:w-2/3"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Dropdown Kategori */}
          <select
            className="border rounded px-4 py-2 w-full md:w-1/3"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">Semua Kategori</option>
            <option value="Elektronik">Elektronik</option>
            <option value="Fashion">Fashion</option>
            <option value="Kecantikan">Kecantikan</option>
          </select>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main className="flex-grow p-6 bg-gray-50">
        <Outlet context={{ selectedCategory, searchTerm }} />
      </main>

      {/* FOOTER */}
      <footer className="bg-blue-600 text-white text-center py-4">
        © {new Date().getFullYear()} ShopMonic. All rights reserved.
      </footer>
    </div>
  );
}
