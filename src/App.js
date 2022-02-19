import React, { useState, useEffect } from "react";
import "./App.scss";
import Tours from "./Tours";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function App() {
  const [show, setShow] = useState(true);
  //  const [tours, setTours] = useState([]);

  useEffect(() => {});

  if (show === true) {
    return (
      <Container fluid="md">
        <main>
          <Alert variant="success">
            <Alert.Heading>Hey, nice to see you</Alert.Heading>
            <p>Please click for Home Page</p>
            <hr />
            <p className="mb-0">
              <Button variant="success" onClick={() => setShow(false)}>
                Home Page
              </Button>
            </p>
          </Alert>
        </main>
      </Container>
    );
  } else {
    return (
      <Container fluid="md">
        <main>
          <Tours />
        </main>
      </Container>
    );
  }
}
/*
  const removeTour = (id) => {
    {
      const newTours = tour.filter((tour) => tour.id !== id);
      setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);

    try {
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (tours.lenght === 0) {
    return (
      <main>
        <div className="title">
          <h2> No Tours Left </h2>
          <button className="primary" onClick={fetchTours}>
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </main>
  ); 
*/

export default App;
