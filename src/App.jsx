import { useState } from "react";

import Header from "./components/Header/Header";
import Store from "./pages/Store";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";

function App() {
  const [showCart, setShowCart] =
    useState(false);

  const openCart = () => {
    setShowCart(true);
  };

  const closeCart = () => {
    setShowCart(false);
  };

  return (
    <>
      <Header openCart={openCart} />

      <Store />

      <Cart
        showCart={showCart}
        closeCart={closeCart}
      />

      <Footer />
    </>
  );
}

export default App;