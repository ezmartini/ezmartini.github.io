import React from "react";
import { Container, Row } from "react-bootstrap";
import Contact from "../components/Contact.js";
import Projects from "../components/Projects.js";
import Resume from "../components/Resume.js";
import SiteNavbar from "../components/SiteNavbar.js";

export default function Layout() {
  return (
    <>
      <SiteNavbar />

      <Container className="mt-4">
        <Row>
          <Contact />
          <Resume />
        </Row>

        <Row>
          <Projects />
        </Row>
      </Container>
    </>
  );
}
