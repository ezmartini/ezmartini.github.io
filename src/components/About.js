import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { cardClasses } from "./util";
import PhotoGrid from "./PhotoGrid";
import hand from "../jpgs/hand.png";

export default function About() {
  const [isNavigating, setIsNavigating] = useState(false);
  const nav = useNavigate();

  return (
    <>
      {isNavigating && nav("/about")}
      <Card
        className={
          cardClasses.large + cardClasses.right + " px-0 + py-0 aboutCard"
        }
        onClick={(e) => setIsNavigating(true)}
      >
        <Card.Header className="p-0  border-bottom-0 p-3 custom-header">
          {" "}
          <Card.Title>
            <img height="25px" src={hand} />
            <h4 style={{ display: "inline" }}> About </h4>
          </Card.Title>
          <p className="small text-muted mb-0 mt-0">
            {" "}
            A short introduction to me and my interests.{" "}
          </p>
        </Card.Header>
        <Card.Body className="p-0">
          <PhotoGrid />
        </Card.Body>
      </Card>
    </>
  );
}
