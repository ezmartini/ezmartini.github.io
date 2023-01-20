import React from "react";
import { Card } from "react-bootstrap";

export default function Contact() {
  return (
    <Card className="col-lg-3 col-md-5 col-sm-7 p-2 ms-lg-auto mx-sm-auto mb-sm-3 mb-lg-0 mb-md-0 custom-card">
      <Card.Body>
        <Card.Text>[image here]</Card.Text>
        <Card.Title> Eduarda Martini </Card.Title>
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