import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import VerticalNavbar from "../components/page-components/VerticalNavbar.js";
import SiteNavbar from "../components/SiteNavbar.js";

export default function About(props) {
  return (
    <>
      <Container className="p-0" fluid>
        <SiteNavbar name="About" />
        <VerticalNavbar sections={["Biography", "Interests", "Photos"]} />
      </Container>
    </>
  );
}
