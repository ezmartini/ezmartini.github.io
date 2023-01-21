import React from "react";
import { Card, Row, Container } from "react-bootstrap";
import { cardClasses } from "./util";
import { BsBroadcast } from "react-icons/bs";
import Icon from "../icons/Icon";

// change this name
export default function Connect() {
  return (
    <>
      <Card className={cardClasses.small + " px-0 + py-0" + " connectCard"}>
        <Card.Body>
          <Container className="justify-content-center">
            <Row>
              <Icon name="github" />
              <Icon name="linkedin" />
              <Icon name="email" />
              <Icon name="spotify" />
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
}
