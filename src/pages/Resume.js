import React from "react";
import { Container } from "react-bootstrap";
import SiteNavbar from "../components/SiteNavbar";
import VerticalNavbar from "../components/page-components/VerticalNavbar";

export default function Resume() {
  return (
    <>
      <Container className="p-0" fluid>
        <SiteNavbar name="Resumé" />
        <VerticalNavbar sections={["PDF", "Education", "Skills", "Projects"]} />
      </Container>
    </>
  );
}
