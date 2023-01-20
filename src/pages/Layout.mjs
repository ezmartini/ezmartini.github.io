import React from "react";
import { Container, Row } from "react-bootstrap";
import Contact from "../components/Contact.js";
import Resume from "../components/Resume.js";
import About from "../components/About.js";
import Projects from "../components/Projects.js";
import SiteNavbar from "../components/SiteNavbar.js";

export default function Layout() {
  return (
    <>
      <SiteNavbar />

      <Container className="mt-4">
        <Row className="mb-lg-3">
          <Contact />
          <About />
        </Row>

        <Row className="mb-lg-3">
          <Resume />
          <Projects />
        </Row>

        <Row className="mb-lg-3"></Row>
      </Container>
    </>
  );
}
