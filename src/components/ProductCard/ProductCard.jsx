import { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <Card className="product-card shadow-sm">
      <Card.Img
        variant="top"
        src={product.imageUrl}
        className="product-image"
      />

      <Card.Body>
        <Card.Title>
          {product.title}
        </Card.Title>

        <div className="price">
          ₹ {product.price}
        </div>

        <Button
          variant="info"
          onClick={() => addToCart(product)}
        >
          Add To Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;