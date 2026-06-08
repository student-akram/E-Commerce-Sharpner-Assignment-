import { useParams } from "react-router-dom";

import {
  Container,
  Row,
  Col,
  Card,
} from "react-bootstrap";

import productArr from "../data/Products";

const ProductDetails = () => {

  const { productId } =
    useParams();

  const product =
    productArr.find(
      (item) =>
        item.id === productId
    );

  if (!product) {
    return (
      <h2>
        Product Not Found
      </h2>
    );
  }

  return (
    <Container className="my-5">

      <h1 className="text-center mb-5">
        {product.title}
      </h1>

      <Row>

        <Col md={6}>
          <h3>
            Product Images
          </h3>

          {product.images.map(
            (img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                className="img-fluid mb-3"
              />
            )
          )}
        </Col>

        <Col md={6}>
          <h3>
            Reviews
          </h3>

          {product.reviews.map(
            (
              review,
              index
            ) => (
              <Card
                key={index}
                className="mb-3"
              >
                <Card.Body>
                  {review}
                </Card.Body>
              </Card>
            )
          )}
        </Col>

      </Row>

    </Container>
  );
};

export default ProductDetails;