import React from "react";
import { Card } from "react-bootstrap";
import { cardClasses } from "./util";
import { BsBroadcast } from "react-icons/bs";

export default function Connect() {
  return (
    <Card className={cardClasses.small + " px-0 + py-0" + " connectCard"}>
      <Card.Body></Card.Body>
    </Card>
  );
}
