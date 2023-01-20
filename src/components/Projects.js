import React from "react";
import { cardClasses } from "./util";
import { Card } from "react-bootstrap";
import { BsCodeSlash } from "react-icons/bs";

export default function Projects() {
  return (
    <Card className={cardClasses.small + " px-0 + py-0"}>
      <Card.Header className="p-0 border-bottom-0 p-3 custom-header">
        {" "}
        <Card.Title>
          {" "}
          <BsCodeSlash /> Projects{" "}
        </Card.Title>
        <p className="small text-muted mb-0 mt-0">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </p>
      </Card.Header>
      <Card.Body> </Card.Body>
    </Card>
  );
}
