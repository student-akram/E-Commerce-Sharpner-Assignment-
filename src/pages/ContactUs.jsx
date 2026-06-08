import { useState } from "react";
import {
  Container,
  Form,
  Button,
  Card,
} from "react-bootstrap";

const ContactUs = () => {
  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const submitHandler =
    async (e) => {
      e.preventDefault();

      const userData = {
        name,
        email,
        phone,
      };

      try {
        const response =
          await fetch(
            "https://movies-app-b026c-default-rtdb.asia-southeast1.firebasedatabase.app/contacts.json",
            {
              method: "POST",

              body: JSON.stringify(
                userData
              ),

              headers: {
                "Content-Type":
                  "application/json",
              },
            }
          );

        if (!response.ok) {
          throw new Error(
            "Failed to submit"
          );
        }

        alert(
          "Contact Details Submitted Successfully!"
        );

        setName("");
        setEmail("");
        setPhone("");

      } catch (error) {
        console.log(error);

        alert(
          "Something went wrong!"
        );
      }
    };

  return (
    <Container className="my-5">
      <Card
        className="p-4 mx-auto"
        style={{
          maxWidth: "600px",
        }}
      >
        <h2 className="text-center mb-4">
          Contact Us
        </h2>

        <Form
          onSubmit={
            submitHandler
          }
        >
          <Form.Group className="mb-3">
            <Form.Label>
              Name
            </Form.Label>

            <Form.Control
              type="text"
              value={name}
              onChange={(e) =>
                setName(
                  e.target.value
                )
              }
              required
            />
          </Form.Group>

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
              Phone Number
            </Form.Label>

            <Form.Control
              type="tel"
              value={phone}
              onChange={(e) =>
                setPhone(
                  e.target.value
                )
              }
              required
            />
          </Form.Group>

          <Button
            type="submit"
            className="w-100"
          >
            Submit
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default ContactUs;