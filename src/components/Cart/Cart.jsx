import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { cartElements } from "../../data/CartData";

const Cart = ({ showCart, closeCart }) => {
  const [cartItems, setCartItems] =
    useState(cartElements);

  const removeItem = (title) => {
    const updatedItems = cartItems.filter(
      (item) => item.title !== title
    );

    setCartItems(updatedItems);
  };

  if (!showCart) return null;

  return (
    <div
      style={{
        position: "fixed",
        right: 0,
        top: 0,
        width: "500px",
        height: "100vh",
        backgroundColor: "white",
        padding: "20px",
        overflowY: "auto",
        borderLeft: "1px solid gray",
        zIndex: 999,
      }}
    >
      <div className="d-flex justify-content-between">
        <h2>Cart</h2>

        <Button
          variant="danger"
          onClick={closeCart}
        >
          X
        </Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {cartItems.map((item) => (
            <tr key={item.title}>
              <td>{item.title}</td>

              <td>₹{item.price}</td>

              <td>{item.quantity}</td>

              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() =>
                    removeItem(item.title)
                  }
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Button variant="info">
        Purchase
      </Button>
    </div>
  );
};

export default Cart;