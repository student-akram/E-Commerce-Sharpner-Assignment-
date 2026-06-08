import { useEffect, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        "https://swapi.info/api/films"
      );

      const data = await response.json();

      setMovies(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">
        Movies List
      </h2>

      <Row>
        {movies.map((movie) => (
          <Col
            md={4}
            className="mb-4"
            key={movie.episode_id}
          >
            <Card>
              <Card.Body>
                <Card.Title>
                  {movie.title}
                </Card.Title>

                <Card.Text>
                  Episode:
                  {movie.episode_id}
                </Card.Text>

                <Card.Text>
                  Director:
                  {movie.director}
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