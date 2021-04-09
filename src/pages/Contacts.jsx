import React from "react";
import { Card } from "react-bootstrap";
import Picture from "../pictures/lenient 5.jpg";
import Picture2 from "../pictures/lenient6.jpg";
import Picture3 from "../pictures/lenient8.jpg";

export default function Conatcts() {
  return (
    <div className="card-holder">
      <a
        href="https://www.facebook.com/LenientPhotography"
        target="_blank"
        style={{ textDecoration: "none", color: "black" }}
      >
        <Card style={{ width: "18rem", height: "25rem" }}>
          <Card.Img variant="top" src={Picture} />
          <Card.Body>
            <Card.Title>Facebook Page</Card.Title>
            <Card.Text>
              Connect through facebook page to hire photographer
            </Card.Text>
          </Card.Body>
        </Card>
      </a>
      <a
        href="https://www.instagram.com/lenient.photography/"
        target="_blank"
        style={{ textDecoration: "none", color: "black" }}
      >
        <Card style={{ width: "18rem", height: "25rem" }}>
          <Card.Img variant="top" src={Picture2} />
          <Card.Body>
            <Card.Title>Instagram</Card.Title>
            <Card.Text>Check out their instagram page</Card.Text>
          </Card.Body>
        </Card>
      </a>
      <Card style={{ width: "18rem", height: "25rem" }}>
        <Card.Img variant="top" src={Picture3} />
        <Card.Body>
          <Card.Title>Contact Information</Card.Title>
          <Card.Text>
            Labiba Ferdous : 01716516488 Email Address :
            leninent.photos@gmail.com
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
