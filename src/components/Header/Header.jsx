import { useContext } from "react";
import {
  Navbar,
  Nav,
  Container,
  Button,
} from "react-bootstrap";

import {
  NavLink,
  useLocation,
} from "react-router-dom";

import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const Header = ({ openCart }) => {
  const navigate = useNavigate();
  const { cartItems } =
    useContext(CartContext);

  const {
    isLoggedIn,
    logout,
  } = useContext(AuthContext);

  const location =
    useLocation();

  const totalCount =
    cartItems.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );
    const logoutHandler = () => {
  logout();

  navigate("/login");
};

  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
      >
        <Container>
          <Nav className="mx-auto">

            <Nav.Link
              as={NavLink}
              to="/"
            >
              HOME
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/store"
            >
              STORE
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/about"
            >
              ABOUT
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/contact"
            >
              CONTACT
            </Nav.Link>

            {!isLoggedIn && (
              <Nav.Link
                as={NavLink}
                to="/login"
              >
                LOGIN
              </Nav.Link>
            )}

            {isLoggedIn && (
              <>
                <Nav.Link
                  as={NavLink}
                  to="/profile"
                >
                  PROFILE
                </Nav.Link>

<Nav.Link onClick={logoutHandler}>
  LOGOUT
</Nav.Link>
                  
              </>
            )}

          </Nav>

          <Button
            variant="outline-info"
            onClick={openCart}
          >
            Cart ({totalCount})
          </Button>
        </Container>
      </Navbar>

      {location.pathname !== "/" && (
        <div className="bg-secondary text-center text-white py-5">
          <h1 className="display-1 fw-bold">
            The Generics
          </h1>
        </div>
      )}
    </>
  );
};

export default Header;