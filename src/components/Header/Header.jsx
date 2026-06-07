import { useContext } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

const Header = ({ openCart }) => {
  const { cartItems } = useContext(CartContext);

  const totalCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Nav className="mx-auto">
            <Nav.Link href="#">HOME</Nav.Link>
            <Nav.Link href="#">STORE</Nav.Link>
            <Nav.Link href="#">ABOUT</Nav.Link>
          </Nav>

          <Button variant="outline-info" onClick={openCart}>
            Cart ({totalCount})
          </Button>
        </Container>
      </Navbar>

      <div className="bg-secondary text-center text-white py-5">
        <h1 className="display-1 fw-bold">
          The Generics
        </h1>
      </div>
    </>
  );
};

export default Header;