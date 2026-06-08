import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";

import Store from "./pages/Store";
import About from "./pages/About";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

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
  <Route
    path="/"
    element={<Home />}
  />

  <Route
    path="/store"
    element={<Store />}
  />

  <Route
    path="/about"
    element={<About />}
  />
  <Route
  path="/movies"
  element={<Movies />}
/>
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