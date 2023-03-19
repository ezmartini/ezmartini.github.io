import React, { useState } from "react";
import { cardClasses } from "./util";
import { Card, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import scissors from "../jpgs/scissors.png";

export default function Projects() {
  const [isNavigating, setIsNavigating] = useState(false);
  const nav = useNavigate();
  return (
    <>
      {isNavigating && nav("/projects")}
      <Card
        className={cardClasses.small + " px-0 + py-0"}
        onClick={(e) => setIsNavigating(true)}
      >
        <Card.Header className="p-0 border-bottom-0 p-3 custom-header">
          {" "}
          <Card.Title>
            <img height="25px" src={scissors} />
            <h4 style={{ display: "inline" }}> Projects </h4>
          </Card.Title>
          <p className="small text-muted mb-0 mt-0">
            {" "}
            Links and descriptions of coding and creative projects.{" "}
          </p>
        </Card.Header>
        <Card.Body>
          <Container>
            <Row className="justify-content-center">
              <a
                className="col-sm-12 col-md-6 me-md-3 text-center text-decoration-none p-2 rounded border mb-2"
                style={{ backgroundColor: "#41AFDC10" }}
                href="/projects#high%20vintage"
              >
                {" "}
                High Vintage{" "}
              </a>
              <a
                className="col-sm-12 col-md-5 text-center text-decoration-none p-2 rounded border mb-2"
                style={{ backgroundColor: "#FF312610" }}
                href="/projects#invvey"
              >
                {" "}
                Invvey{" "}
              </a>
              <a
                className="col-sm-12 col-md-10 text-center text-decoration-none p-2 rounded border"
                style={{ backgroundColor: "#5452CC10" }}
                href="/projects#kaytraa-cards"
              >
                {" "}
                KAYTRAA-CARDS{" "}
              </a>{" "}
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
}
