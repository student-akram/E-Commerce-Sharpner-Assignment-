import { Container, Row, Col } from "react-bootstrap";

import ProductCard from "../components/ProductCard/ProductCard";
import { productsArr } from "../data/products";

const Store = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-5 fw-bold">
  MUSIC
</h1>

      <Row>
        {productsArr.map((product, index) => (
          <Col
            md={6}
            lg={6}
            className="mb-4"
            key={index}
          >
            <ProductCard
              product={product}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Store;