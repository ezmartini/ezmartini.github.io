import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import { cardClasses } from "./util";
import { BsPaperclip } from "react-icons/bs";
import resumePDF from "../EduardaMartini_Resume.pdf";

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
            Download my resumé, or view other related professional and academic
            experiences and projects.{" "}
          </p>
        </Card.Header>
        <Card.Body>
          <div className="bg-light rounded border p-2 download">
            <a href={resumePDF} download="EduardaMartini_Resume.pdf">
              {" "}
              Download Resumé PDF{" "}
            </a>
          </div>

          <p className="small text-muted mt-3 mb-0">
            {" "}
            Clicking "Download" will save a copy of EduardaMartini_Resume.pdf
            onto your machine.{" "}
          </p>
        </Card.Body>
      </Card>
    </>
  );
}
