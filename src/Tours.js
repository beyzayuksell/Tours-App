import "./Tours.scss";
import Tour from "./Tour";
import Container from "react-bootstrap/Container";

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <Container fluid="md">
        <div>
          <h2 align="center">Our Tours</h2>
        </div>
      </Container>
      <div>
        <Tour />
      </div>
    </section>
  );
};

export default Tours;
/*
 return <Tour key={tour.name} {...tour}></Tour>;
*/
