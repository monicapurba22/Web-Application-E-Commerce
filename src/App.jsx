import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/adminpages/AdminDashboard";
import AdminLayout from "./layouts/AdminLayout";
import AboutPage from "./pages/adminpages/Aboutpage";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/frontpages/Dashboard";
import ProductDetail from "./pages/frontpages/ProductDetail";
import Cart from "./pages/frontpages/Cart";
import Checkout from "./pages/frontpages/Checkout";
import { useState } from "react";

export default function App() {
  const [cart, setCart] = useState([]);

  // ✅ fungsi tambah ke keranjang
  const addToCart = (product, quantity = 1) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  // ✅ fungsi hapus
  const removeFromCart = (index) => {
    const updated = [...cart];
    updated.splice(index, 1);
    setCart(updated);
  };

  return (
    <Routes>
      {/* Frontend Layout */}
      <Route path="/" element={<MainLayout cart={cart} />}>
        <Route index element={<Dashboard addToCart={addToCart} />} />
        <Route
          path="product/:id"
          element={<ProductDetail addToCart={addToCart} />}
        />
        <Route
          path="cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
              removeFromCart={removeFromCart}
            />
          }
        />
        {/* ✅ Checkout sekarang dapat juga setCart */}
        <Route path="checkout" element={<Checkout cart={cart} setCart={setCart} />} />
      </Route>

      {/* Admin Layout */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}
