import { useContext } from "react";
import { Button, Table } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

const Cart = ({ showCart, closeCart }) => {
  const { cartItems, removeItem } =
    useContext(CartContext);

  if (!showCart) return null;

  return (
    <div
      style={{
        position: "fixed",
        right: 0,
        top: 0,
        width: "400px",
        height: "100vh",
        backgroundColor: "white",
        padding: "20px",
        overflowY: "auto",
        borderLeft: "1px solid gray",
        zIndex: 999,
      }}
    >
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Cart</h2>

        <Button
          variant="danger"
          onClick={closeCart}
        >
          X
        </Button>
      </div>

      <Table bordered hover>
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
            <tr key={item._id}>
              <td>{item.title}</td>

              <td>₹{item.price}</td>

              <td>{item.quantity}</td>

              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() =>
                    removeItem(item._id)
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