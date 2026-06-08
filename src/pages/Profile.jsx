import { useState, useContext } from "react";

import {
  Container,
  Card,
  Form,
  Button,
} from "react-bootstrap";

import { AuthContext } from "../components/context/AuthContext";

const Profile = () => {
  const [newPassword, setNewPassword] =
    useState("");

  const { token } =
    useContext(AuthContext);

  const passwordChangeHandler = async (
    event
  ) => {
    event.preventDefault();

    try {
      const response =
        await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:update?key=YOUR_FIREBASE_API_KEY",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              idToken: token,

              password: newPassword,

              returnSecureToken: true,
            }),
          }
        );

      const data =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data.error.message
        );
      }

      alert(
        "Password Updated Successfully"
      );

      setNewPassword("");

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Container className="mt-5">
      <Card
        className="p-4 mx-auto shadow"
        style={{
          maxWidth: "500px",
        }}
      >
        <h2 className="text-center mb-4">
          Change Password
        </h2>

        <Form
          onSubmit={
            passwordChangeHandler
          }
        >
          <Form.Group className="mb-3">
            <Form.Label>
              New Password
            </Form.Label>

            <Form.Control
              type="password"
              placeholder="Enter New Password"
              value={newPassword}
              onChange={(e) =>
                setNewPassword(
                  e.target.value
                )
              }
              required
            />
          </Form.Group>

          <Button
            type="submit"
            variant="primary"
            className="w-100"
          >
            Change Password
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Profile;