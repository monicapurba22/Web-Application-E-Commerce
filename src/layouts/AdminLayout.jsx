import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation(); // ambil path sekarang

  const isRootAdmin = location.pathname === "/admin"; // cek kalau di /admin

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <div className="bg-white shadow p-4 flex justify-between items-center md:justify-end">
          {/* Tampilkan menu button hanya di mobile */}
          <button
            className="md:hidden p-2 border rounded"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ≡
          </button>
        </div>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {isRootAdmin ? (
            <div className="flex items-center justify-center h-full">
              <h1 className="text-3xl font-bold text-gray-700">
                Selamat datang, Admin!
              </h1>
            </div>
          ) : (
            <Outlet />
          )}
        </main>

        {/* Footer */}
        <footer className="bg-white border-t p-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} My Admin App — v1.0.0
        </footer>
      </div>
    </div>
  );
}
