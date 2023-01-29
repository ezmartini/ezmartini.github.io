import React from "react";
import { Container } from "react-bootstrap";
import SiteNavbar from "../components/SiteNavbar";
import VerticalNavbar from "../components/page-components/VerticalNavbar";
import resumePDF from "../EduardaMartini_Resume.pdf";
import { BsDownload, BsEye } from "react-icons/bs";

export default function Resume() {
  return (
    <>
      <SiteNavbar name="Resumé" />

      <Container className="p-0 row" fluid>
        <VerticalNavbar
          sections={["PDF", "Education", "Experience", "Skills", "Projects"]}
        />

        <section className="col-9 p-4 offset-2 mt-5">
          <h1> Resumé </h1>

          <section id="pdf" className="p-1">
            <h2 className="first-header mt-4"> PDF </h2>
            <p className="muted text-small"> View or download resumé. </p>{" "}
            <div className="download-page rounded p-3 ">
              <a href={resumePDF} download="EduardaMartini_Resume.pdf">
                {" "}
                <BsDownload className="me-3" />
                Download Resumé PDF{" "}
              </a>
            </div>
            <div className="download-page-other rounded p-3 mt-2">
              <a rel="noreferrer" href={resumePDF} target="_blank">
                <BsEye className="me-3" />
                View Resumé PDF in New Tab
              </a>
            </div>
          </section>

          <section id="education" className="p-1">
            <h2 className="second-header mt-4"> Education </h2>
            <p className="mb-0">
              {" "}
              <b> New York University, College of Arts and Sciences, </b> New
              York, NY (current){" "}
            </p>
            <p className="mb-0"> Bachelor of Arts, Computer Science </p>
            <p> Senior, Graduating May 2023 </p>
            <p className="mb-0">
              <i> Relevant Coursework: </i>
            </p>

            <ul class="list-group">
              <li class="list-group-item"> Data Structures & Alogrithms </li>
              <li class="list-group-item"> Data Science </li>
              <li class="list-group-item"> Object Oriented Programming </li>
              <li class="list-group-item"> Applied Internet Technology </li>
              <li class="list-group-item"> Software Engineering </li>
              <li class="list-group-item">
                Collaborating Remotely: Build Software from Anywhere{" "}
              </li>
            </ul>
          </section>

          <section id="experience" className="p-1">
            <h2 className="third-header mt-4"> Experience </h2>
          </section>

          <section id="skills" className="p-1">
            <h2 className="fourth-header mt-4"> Skills </h2>

            <div className="container row mx-auto  border rounded p-2 ">
              <div className="col-lg-4 col-12 p-2 ">
                {" "}
                <h4> Programming Languages </h4>{" "}
                <ul class="list-group list-unstyled">
                  <li> JavaScript (ES6) </li>
                  <li> Java </li>
                  <li> C </li>
                  <li> C++ </li>
                  <li> Python </li>
                </ul>
              </div>
              <div className="col-lg-4 col-12 p-2">
                {" "}
                <h4>Web Development </h4>{" "}
                <ul class="list-group list-unstyled">
                  <li> Node.js </li>
                  <li> MongoDB </li>
                  <li> Express.js </li>
                  <li> React </li>
                  <li> Backend Web Development </li>
                  <li> Frontend Web Development </li>
                  <li> Agile Development </li>
                  <li> AJAX </li>
                  <li> Rest APIs </li>
                </ul>
              </div>

              <div className="col-lg-4 col-12 p-2">
                {" "}
                <h4> Tools & Technologies </h4>{" "}
                <ul class="list-group list-unstyled">
                  <li> Version Control (Git & GitHub) </li>
                  <li> Continuous Integration (CI) </li>
                  <li> Continuous Deployment (CD) </li>
                  <li> Jira </li>
                  <li> Slack </li>
                  <li> Confluence</li>
                  <li> Adobe Photoshop </li>
                  <li> Adobe Illustrator </li>
                  <li> Adobe InDesign </li>
                  <li> Mocha </li>
                  <li> ESLint </li>
                  <li> Web Hosting </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="projects" className="p-1">
            <h2 className="fifth-header mt-4"> Projects </h2>
          </section>
        </section>
      </Container>
    </>
  );
}
