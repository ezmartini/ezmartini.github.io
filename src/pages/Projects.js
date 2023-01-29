import React from "react";
import { Container } from "react-bootstrap";
import SiteNavbar from "../components/SiteNavbar";
import VerticalNavbar from "../components/page-components/VerticalNavbar";

export default function Projects() {
  return (
    <>
      <Container className="p-0" fluid>
        <SiteNavbar name="Projects" />
        <VerticalNavbar
          sections={["invvey", "Talkman", "NYU Photobooth", "Creative"]}
        />
      </Container>
    </>
  );
}
