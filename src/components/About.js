import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { BsChatQuote } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { cardClasses } from "./util";

export default function About() {
  const [isNavigating, setIsNavigating] = useState(false);
  const nav = useNavigate();

  return (
    <>
      {isNavigating && nav("/about")}
      <Card
        className={cardClasses.large + cardClasses.right + " px-0 + py-0"}
        onClick={(e) => setIsNavigating(true)}
      >
        <Card.Header className="p-0  border-bottom-0 p-3 custom-header">
          {" "}
          <Card.Title>
            {" "}
            <h4>
              {" "}
              <BsChatQuote /> About{" "}
            </h4>
          </Card.Title>
          <p className="small text-muted mb-0 mt-0">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </Card.Header>
        <Card.Body> </Card.Body>
      </Card>
    </>
  );
}
