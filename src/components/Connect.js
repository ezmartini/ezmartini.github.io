import React from "react";
import { Card } from "react-bootstrap";
import { cardClasses } from "./util";

export default function Connect() {
  return (
    <Card className={cardClasses.small}>
      <Card.Header className="p-0 bg-white border-bottom-0 p-2 custom-header">
        {" "}
        <Card.Title> Connect </Card.Title>
      </Card.Header>
      <Card.Body></Card.Body>
    </Card>
  );
}
