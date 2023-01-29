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

        <section className="col-9 p-4">
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
          </section>

          <section id="experience" className="p-1">
            <h2 className="third-header mt-4"> Experience </h2>
          </section>

          <section id="skills" className="p-1">
            <h2 className="fourth-header mt-4"> Skills </h2>
          </section>

          <section id="projects" className="p-1">
            <h2 className="fifth-header mt-4"> Projects </h2>
          </section>
        </section>
      </Container>
    </>
  );
}
