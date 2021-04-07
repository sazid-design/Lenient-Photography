import React from "react";
import "../styles.css";
import { Carousel, Button } from "react-bootstrap";
import Mass from "../pictures/lenient3.jpg";
import Effect from "../pictures/lenient1.jpg";
import photo3 from "../pictures/lenient4.jpg";
import ContactUs from "../components/Contactus";
import { Link } from "react-router-dom";
import Gallery from "../components/Gallery";
import Portfolio from "../components/Portfolio";

export default function Homepage() {
  return (
    <div className="carousel-container">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Mass}
            alt="First slide"
            style={{ height: "30rem", opacity: "0.8" }}
          />
          <Carousel.Caption>
            <h3 className="header-text">Make your wedding a memorable one</h3>
            <Link to="/email">
              <Button variant="primary">Make Appointment online</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Effect}
            alt="Second slide"
            style={{ height: "30rem", opacity: "0.8" }}
          />

          <Carousel.Caption>
            <h3 className="header-text">Make your wedding an exciting one</h3>
            <Button variant="primary">Make Appointment online</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={photo3}
            alt="Second slide"
            style={{ height: "30rem", opacity: "0.8" }}
          />

          <Carousel.Caption>
            <h3 className="header-text">
              Relieve Every Moment With Lenient Photography
            </h3>
            <Button variant="primary">Make Appointment online</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div>
        <Portfolio />
      </div>
    </div>
  );
}
