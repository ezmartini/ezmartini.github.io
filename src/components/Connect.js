import React from "react";
import { Card, Row, Container } from "react-bootstrap";
import { cardClasses } from "./util";
import Icon from "../icons/Icon";
import { BsColumns } from "react-icons/bs";

// change this name
export default function Connect() {
  return (
    <>
      <Card className={cardClasses.small + " px-0 + py-0" + " connectCard"}>
        <Card.Body>
          <Container>
            <Row>
              <Icon name="github" />
              <Icon name="linkedin" />
              <Icon name="email" />
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
}
