import { Navbar, Nav, Container, Button } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>My Store</Navbar.Brand>

          <Nav className="mx-auto">
            <Nav.Link href="#">HOME</Nav.Link>
            <Nav.Link href="#">STORE</Nav.Link>
            <Nav.Link href="#">ABOUT</Nav.Link>
          </Nav>

          <Button variant="outline-info">
            Cart
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