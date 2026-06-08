import { useState, useContext } from "react";
import {
  Container,
  Card,
  Form,
  Button,
} from "react-bootstrap";
import { AuthContext } from "../components/context/AuthContext";

const Login = () => {
  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [isLoading, setIsLoading] =
    useState(false);

  const { login } =
    useContext(AuthContext);

  const loginHandler = async (
    event
  ) => {
    event.preventDefault();

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

      // Store token in Context
      login(data.idToken);

      console.log(
        "TOKEN:",
        data.idToken
      );

      alert(
        "Login Successful"
      );

    } catch (error) {
      alert(error.message);
    }

    setIsLoading(false);
  };

  return (
    <Container className="mt-5">
      <Card
        className="p-4 mx-auto"
        style={{
          maxWidth: "450px",
        }}
      >
        <h2 className="text-center">
          Login
        </h2>

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