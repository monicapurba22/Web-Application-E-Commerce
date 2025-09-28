import { Link, useLocation } from "react-router-dom";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();

  // fungsi buat cek apakah link aktif
  const isActive = (path) =>
    location.pathname === path
      ? "bg-blue-100 text-blue-600 font-semibold"
      : "text-gray-700 hover:bg-gray-100";

  return (
    <div
      className={`${
        sidebarOpen ? "block" : "hidden"
      } md:block w-64 bg-white shadow-md h-full`}
    >
      {/* Header Sidebar */}
      <div className="flex justify-between items-center p-4 bg-blue-600 text-white">
        <span className="font-bold text-lg">My Admin</span>
        {/* tombol close di mobile */}
        <button
          className="md:hidden text-white font-bold"
          onClick={() => setSidebarOpen(false)}
        >
          ×
        </button>
      </div>

      {/* Menu navigasi */}
      <nav className="flex flex-col p-4 space-y-2">
        <Link
          to="/admin/dashboard"
          className={`p-2 rounded ${isActive("/admin/dashboard")}`}
        >
          Dashboard
        </Link>
        <Link
          to="/admin/about"
          className={`p-2 rounded ${isActive("/admin/about")}`}
        >
          About
        </Link>
      </nav>
    </div>
  );
}
