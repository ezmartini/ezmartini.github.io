import React from "react";
import { Card } from "react-bootstrap";
import { cardClasses } from "./util";

export default function Contact() {
  return (
    <Card className={cardClasses.small + " contactCard"}>
      <Card.Body>
        <Card.Text>[image here]</Card.Text>
        <Card.Title>
          {" "}
          <h3> Eduarda Martini </h3>{" "}
        </Card.Title>
        <Card.Text className="small text-muted">
          {" "}
          eduardazmartini@gmail.com{" "}
        </Card.Text>
        <Card.Text className="small text-muted mb-0">
          {" "}
          Bachelor of Arts in Computer Science{" "}
        </Card.Text>
        <Card.Text className="small text-muted">
          {" "}
          New York University, Class of 2023{" "}
        </Card.Text>
        <Card.Text className="small fw-bold"> New York, NY </Card.Text>
      </Card.Body>
    </Card>
  );
}
