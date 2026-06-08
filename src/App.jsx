import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";

import Store from "./pages/Store";
import About from "./pages/About";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import ContactUs from "./pages/ContactUs";
import ProductDetails from "./pages/ProductDetails";
import Auth from "./pages/Auth";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

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
<Route
  path="/contact"
  element={<ContactUs />}
/>
<Route
  path="/product/:productId"
  element={
    <ProductDetails />
  }
/>
<Route
  path="/auth"
  element={<Auth />}
/>
<Route
  path="/login"
  element={<Login />}
/>
<Route
  path="/profile"
  element={<Profile />}
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