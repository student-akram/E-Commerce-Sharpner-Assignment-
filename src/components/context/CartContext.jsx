import { createContext, useState } from "react";

export const CartContext =
  createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] =
    useState([]);

  const addToCart = (product) => {
    const existingItem =
      cartItems.find(
        (item) =>
          item.title === product.title
      );

    if (existingItem) {
      const updatedCart =
        cartItems.map((item) =>
          item.title === product.title
            ? {
                ...item,
                quantity:
                  item.quantity + 1,
              }
            : item
        );

      setCartItems(updatedCart);
    } else {
      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  const removeItem = (title) => {
    const updatedItems =
      cartItems.filter(
        (item) =>
          item.title !== title
      );

    setCartItems(updatedItems);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;