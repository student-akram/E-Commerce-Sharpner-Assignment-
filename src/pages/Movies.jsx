import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
} from "react-bootstrap";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const [title, setTitle] = useState("");
  const [openingText, setOpeningText] =
    useState("");
  const [releaseDate, setReleaseDate] =
    useState("");

  // TASK 9
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        "https://swapi.info/api/films"
      );

      const data =
        await response.json();

      setMovies(data);
    } catch (error) {
      console.log(error);
    }
  };

  // TASK 10
  const addMovieHandler = (e) => {
    e.preventDefault();

    const newMovieObj = {
      title,
      openingText,
      releaseDate,
    };

    console.log(newMovieObj);

    setTitle("");
    setOpeningText("");
    setReleaseDate("");
  };

  return (
    <Container className="my-5">

      {/* ADD MOVIE FORM */}

      <Card className="p-4 mb-5 shadow">
        <h2 className="text-center mb-4">
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
            variant="primary"
            type="submit"
          >
            Add Movie
          </Button>
        </Form>
      </Card>

      {/* MOVIES LIST */}

      <h2 className="text-center mb-4">
        Movies List
      </h2>

      <Row>
        {movies.map((movie) => (
          <Col
            lg={4}
            md={6}
            sm={12}
            key={
              movie.episode_id
            }
            className="mb-4"
          >
            <Card className="h-100 shadow">
              <Card.Body>
                <Card.Title>
                  {movie.title}
                </Card.Title>

                <Card.Text>
                  <strong>
                    Episode:
                  </strong>{" "}
                  {
                    movie.episode_id
                  }
                </Card.Text>

                <Card.Text>
                  <strong>
                    Director:
                  </strong>{" "}
                  {movie.director}
                </Card.Text>

                <Card.Text>
                  <strong>
                    Release:
                  </strong>{" "}
                  {
                    movie.release_date
                  }
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

    </Container>
  );
};

export default Movies;