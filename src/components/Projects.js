import React, { useState } from "react";
import { cardClasses } from "./util";
import { Card } from "react-bootstrap";
import { BsCodeSlash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

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
            <h4>
              {" "}
              <BsCodeSlash /> Projects{" "}
            </h4>
          </Card.Title>
          <p className="small text-muted mb-0 mt-0">
            {" "}
            Links and descriptions of deployed and non-deployed projects.{" "}
          </p>
        </Card.Header>
        <Card.Body></Card.Body>
      </Card>
    </>
  );
}
