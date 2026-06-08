import { useState, useContext } from "react";
import {
  Container,
  Card,
  Form,
  Button,
} from "react-bootstrap";
import { AuthContext } from "../components/context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [isLoading, setIsLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const { login } =
    useContext(AuthContext);

  const navigate =
    useNavigate();

  const loginHandler = async (
    event
  ) => {
    event.preventDefault();

    setError("");
    setIsLoading(true);

    try {
      const response =
        await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBwZfd5tc5HS1LtC9_J9Mb62JyRtxEOpXA",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              email,
              password,
              returnSecureToken: true,
            }),
          }
        );

      const data =
        await response.json();

      if (!response.ok) {
        throw new Error(
          "Authentication Failed"
        );
      }

      // Save token in Context + LocalStorage
      login(data.idToken);

      console.log(
        "TOKEN:",
        data.idToken
      );

      // Redirect to Store Page
      navigate("/store");

    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  };

  return (
    <Container className="mt-5">
      <Card
        className="p-4 mx-auto shadow"
        style={{
          maxWidth: "450px",
        }}
      >
        <h2 className="text-center mb-4">
          Login
        </h2>

        {error && (
          <p className="text-danger text-center">
            {error}
          </p>
        )}

        <Form
          onSubmit={
            loginHandler
          }
        >
          <Form.Group className="mb-3">
            <Form.Label>
              Email
            </Form.Label>

            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              Password
            </Form.Label>

            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
              required
            />
          </Form.Group>

          {!isLoading && (
            <Button
              type="submit"
              className="w-100"
            >
              Login
            </Button>
          )}

          {isLoading && (
            <p className="text-center">
              Sending request...
            </p>
          )}
        </Form>
      </Card>
    </Container>
  );
};

export default Login;