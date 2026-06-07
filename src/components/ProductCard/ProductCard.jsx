import { Card, Button } from "react-bootstrap";

const ProductCard = ({ product }) => {
  return (
    <Card className="shadow h-150">
      <Card.Img
        variant="top"
        src={product.imageUrl}
        height="200px"
        
      />

      <Card.Body className="text-center">
        <Card.Title>
          {product.title}
        </Card.Title>

        <h5>₹ {product.price}</h5>

        <Button variant="info">
          Add To Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;