import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import { cardClasses } from "./util";
import { BsPaperclip } from "react-icons/bs";

export default function Resume() {
  const [isNavigating, setIsNavigating] = useState(false);
  const nav = useNavigate();
  return (
    <>
      {isNavigating && nav("/resume")}
      <Card
        className={cardClasses.large + cardClasses.left + " px-0 + py-0"}
        onClick={(e) => setIsNavigating(true)}
      >
        <Card.Header className="border-bottom-0 p-3 custom-header">
          {" "}
          <Card.Title>
            <h4>
              {" "}
              <BsPaperclip /> Resumé{" "}
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
