import {
  createContext,
  useState,
  useEffect,
  useContext,
} from "react";

import {
  AuthContext,
} from "./AuthContext";

export const CartContext =
  createContext();

const CRUD_URL =
  "https://crudcrud.com/api/ee963c061e1643799e3745a5113f3218";

const CartProvider = ({
  children,
}) => {

  const {
    email,
  } = useContext(
    AuthContext
  );

  const [cartItems, setCartItems] =
    useState([]);

  const userEmail =
    email
      ? email
          .replace("@", "")
          .replace(/\./g, "")
      : "";

  useEffect(() => {

    const fetchCart =
      async () => {

        if (!userEmail)
          return;

        try {

          const response =
            await fetch(
              `${CRUD_URL}/cart${userEmail}`
            );

          const data =
            await response.json();

          setCartItems(data);

        } catch (error) {

          console.log(
            error
          );
        }
      };

    fetchCart();

  }, [userEmail]);

  const addToCart =
    async (product) => {

      try {

        const response =
          await fetch(
            `${CRUD_URL}/cart${userEmail}`,
            {
              method:
                "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({
                ...product,
                quantity: 1,
              }),
            }
          );

        const savedProduct =
          await response.json();

        setCartItems(
          (prevItems) => [
            ...prevItems,
            savedProduct,
          ]
        );

      } catch (error) {

        console.log(
          error
        );
      }
    };

  const removeItem =
    async (id) => {

      try {

        await fetch(
          `${CRUD_URL}/cart${userEmail}/${id}`,
          {
            method:
              "DELETE",
          }
        );

        setCartItems(
          (prevItems) =>
            prevItems.filter(
              (item) =>
                item._id !== id
            )
        );

      } catch (error) {

        console.log(
          error
        );
      }
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