import { Container, Button, Table } from "react-bootstrap";

const Home = () => {
  const tours = [
    {
      date: "JUL 16",
      city: "DETROIT, MI",
      venue: "DTE ENERGY MUSIC THEATRE",
    },
    {
      date: "JUL 19",
      city: "TORONTO, ON",
      venue: "BUDWEISER STAGE",
    },
    {
      date: "JUL 22",
      city: "BRISTOW, VA",
      venue: "JIGGY LUBE LIVE",
    },
    {
      date: "JUL 29",
      city: "PHOENIX, AZ",
      venue: "AK-CHIN PAVILION",
    },
    {
      date: "AUG 2",
      city: "LAS VEGAS, NV",
      venue: "T-MOBILE ARENA",
    },
    {
      date: "AUG 7",
      city: "CONCORD, CA",
      venue: "CONCORD PAVILION",
    },
  ];

  return (
    <>
      <div
        className="bg-secondary text-center text-white py-5"
        style={{ minHeight: "350px" }}
      >
        <Button
          variant="outline-info"
          size="lg"
        >
          Get our Latest Album
        </Button>

        <div className="mt-4">
          <Button
            variant="outline-info"
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
            }}
          >
            ▶
          </Button>
        </div>
      </div>

      <Container className="my-5">
        <h1 className="text-center mb-5">
          TOURS
        </h1>

        <Table borderless>
          <tbody>
            {tours.map((tour, index) => (
              <tr key={index}>
                <td>
                  <strong>{tour.date}</strong>
                </td>

                <td>{tour.city}</td>

                <td>{tour.venue}</td>

                <td>
                  <Button variant="info">
                    BUY TICKETS
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Home;