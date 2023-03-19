import React from "react";
import { Card } from "react-bootstrap";
import { cardClasses } from "./util";
import emoji from "../jpgs/woman-technologist-light-skin-tone_1f469-1f3fb-200d-1f4bb.png";

export default function Contact() {
  return (
    <Card
      className={cardClasses.small + " contactCard"}
      onClick={(e) => console.log(e)}
    >
      <Card.Body>
        <Card.Title>
          {" "}
          <img src={emoji} height="50px" />
          <h2 className="mt-1"> Eduarda Martini </h2>{" "}
        </Card.Title>
        <Card.Text className="small"> eduardazmartini@gmail.com </Card.Text>
        <Card.Text className="small mb-0">
          {" "}
          Bachelor of Arts in Computer Science{" "}
        </Card.Text>
        <Card.Text className="small ">
          {" "}
          New York University, Class of 2023{" "}
        </Card.Text>
        <Card.Text className="small fw-bold"> New York, NY </Card.Text>
      </Card.Body>
    </Card>
  );
}
