import {
  Navbar,
  Nav,
  Container,
  Button,
} from "react-bootstrap";

const Header = ({ openCart }) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            My Store
          </Navbar.Brand>

          <Nav className="mx-auto">
            <Nav.Link>HOME</Nav.Link>

            <Nav.Link>STORE</Nav.Link>

            <Nav.Link>ABOUT</Nav.Link>
          </Nav>

          <Button
            variant="outline-info"
            onClick={openCart}
          >
            Cart
          </Button>
        </Container>
      </Navbar>

      <div className="bg-secondary text-center text-white py-5">
        <h1>The Generics</h1>
      </div>
    </>
  );
};

export default Header;