import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";

import Store from "./pages/Store";
import About from "./pages/About";

function App() {
  const [showCart, setShowCart] = useState(false);

  const openCart = () => {
    setShowCart(true);
  };

  const closeCart = () => {
    setShowCart(false);
  };

  return (
    <>
      <Header openCart={openCart} />

      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Cart
        showCart={showCart}
        closeCart={closeCart}
      />

      <Footer />
    </>
  );
}

export default App;