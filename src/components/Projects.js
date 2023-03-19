import React, { useState } from "react";
import { cardClasses } from "./util";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
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
        <Card.Body></Card.Body>
      </Card>
    </>
  );
}
