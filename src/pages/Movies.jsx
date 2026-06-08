import { useState } from "react";
import {
  Container,
  Form,
  Button,
  Card,
  Row,
  Col,
} from "react-bootstrap";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const [title, setTitle] = useState("");
  const [openingText, setOpeningText] =
    useState("");
  const [releaseDate, setReleaseDate] =
    useState("");

  const addMovieHandler = async (e) => {
    e.preventDefault();

    const newMovieObj = {
      title,
      openingText,
      releaseDate,
    };

    try {
      const response = await fetch(
        "https://movies-app-b026c-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json",
        {
          method: "POST",
          body: JSON.stringify(
            newMovieObj
          ),
          headers: {
            "Content-Type":
              "application/json",
          },
        }
      );

      const data =
        await response.json();

      console.log(data);

      setTitle("");
      setOpeningText("");
      setReleaseDate("");

    } catch (error) {
      console.log(error);
    }
  };

  const fetchMoviesHandler =
    async () => {
      try {
        const response =
          await fetch(
            "https://movies-app-b026c-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json"
          );

        const data =
          await response.json();

        const loadedMovies =
          [];

        for (const key in data) {
          loadedMovies.push({
            id: key,
            title:
              data[key].title,
            openingText:
              data[key]
                .openingText,
            releaseDate:
              data[key]
                .releaseDate,
          });
        }

        setMovies(
          loadedMovies
        );

      } catch (error) {
        console.log(error);
      }
    };

  const deleteMovieHandler =
    async (id) => {
      try {
        await fetch(
          `https://movies-app-b026c-default-rtdb.asia-southeast1.firebasedatabase.app/movies/${id}.json`,
          {
            method:
              "DELETE",
          }
        );

        setMovies(
          (prevMovies) =>
            prevMovies.filter(
              (movie) =>
                movie.id !== id
            )
        );

      } catch (error) {
        console.log(error);
      }
    };

  return (
    <Container className="my-5">

      <Card className="p-4 mb-5">
        <h2 className="mb-4">
          Add Movie
        </h2>

        <Form
          onSubmit={
            addMovieHandler
          }
        >
          <Form.Group className="mb-3">
            <Form.Label>
              Title
            </Form.Label>

            <Form.Control
              type="text"
              value={title}
              onChange={(e) =>
                setTitle(
                  e.target.value
                )
              }
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              Opening Text
            </Form.Label>

            <Form.Control
              as="textarea"
              rows={3}
              value={
                openingText
              }
              onChange={(e) =>
                setOpeningText(
                  e.target.value
                )
              }
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              Release Date
            </Form.Label>

            <Form.Control
              type="date"
              value={
                releaseDate
              }
              onChange={(e) =>
                setReleaseDate(
                  e.target.value
                )
              }
              required
            />
          </Form.Group>

          <Button
            type="submit"
          >
            Add Movie
          </Button>
        </Form>
      </Card>

      <div className="text-center mb-4">
        <Button
          variant="success"
          onClick={
            fetchMoviesHandler
          }
        >
          Fetch Movies
        </Button>
      </div>

      <Row>
        {movies.map((movie) => (
          <Col
            md={6}
            lg={4}
            className="mb-4"
            key={movie.id}
          >
            <Card>
              <Card.Body>
                <Card.Title>
                  {
                    movie.title
                  }
                </Card.Title>

                <Card.Text>
                  {
                    movie.openingText
                  }
                </Card.Text>

                <Card.Text>
                  {
                    movie.releaseDate
                  }
                </Card.Text>

                <Button
                  variant="danger"
                  onClick={() =>
                    deleteMovieHandler(
                      movie.id
                    )
                  }
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

    </Container>
  );
};

export default Movies;