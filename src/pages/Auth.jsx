import { useState } from "react";
import {
    Container,
    Card,
    Form,
    Button,
    Spinner,
    Alert,
} from "react-bootstrap";

const Auth = () => {
    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    const [isLoading, setIsLoading] =
        useState(false);

    const [error, setError] =
        useState("");

    const submitHandler = async (
        e
    ) => {
        e.preventDefault();

        setError("");
        setIsLoading(true);

        try {
            const response =
                await fetch(
                    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBwZfd5tc5HS1LtC9_J9Mb62JyRtxEOpXA",
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
                    data.error.message
                );
            }

            console.log(data);

            alert(
                "Signup Successful"
            );

        } catch (error) {
            setError(error.message);
        }

        setIsLoading(false);
    };

    return (
        <Container className="my-5">

            <Card
                className="p-4 mx-auto"
                style={{
                    maxWidth: "500px",
                }}
            >
                <h2 className="text-center mb-4">
                    Sign Up
                </h2>

                {error && (
                    <Alert variant="danger">
                        {error}
                    </Alert>
                )}

                <Form
                    onSubmit={
                        submitHandler
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
                            Sign Up
                        </Button>
                    )}

                    {isLoading && (
                        <div className="text-center">
                            <Spinner
                                animation="border"
                            />
                        </div>
                    )}
                </Form>

            </Card>

        </Container>
    );
};

export default Auth;