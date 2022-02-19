import React, { useState } from "react";
import "./Tour.scss";
import { tours } from "./sample-tours";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Tour = () => {
  const [readMore, setReadMore] = useState(false);
  /* <Row>
      <article className="single-tour">
        <img src={image} alt={name} />
        <footer>
          <div className="tour-info">
            <h4> {name} </h4>
            <h4 className="tour-price">${price}</h4>
          </div>

          <p>
            {readMore ? info : "${info.substring(0, 200)}..."}
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? "show less" : "read more"}
            </button>
          </p>
          <button className="delete-btn" onClick={() => removeTour(id)}>
            Not Interested
          </button>
        </footer>
      </article>
    </Row>
  */
  // {tourlist.map((tour) => (      ))}

  return (
    <Row>
      <Card>
        {tours.map((tour) => (
          <Col xs lg="3">
            <Card.Body>
              <article className="single-tour">
                <img src={tour.image} alt={tour.name} />
                <footer>
                  <div className="tour-info">
                    <Card.Title> {tour.name} </Card.Title>
                    <h4 className="tour-price">${tour.price}</h4>
                  </div>
                  <p>
                    <Card.Text>
                      <p>{tour.info} </p>
                      <button onClick={() => setReadMore(!readMore)}>
                        {readMore ? "show less" : "read more"}
                      </button>
                    </Card.Text>
                  </p>
                </footer>
              </article>
            </Card.Body>
          </Col>
        ))}
      </Card>
    </Row>
  );
};
/* <button className="delete-btn" onClick={() => removeTour(tour.id)}>Not Interested </button>
 */
export default Tour;
