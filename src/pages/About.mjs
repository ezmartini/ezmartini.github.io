import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import VerticalNavbar from "../components/page-components/VerticalNavbar.js";

export default function About(props) {
  return (
    <>
      <Container className="p-0" fluid>
        <VerticalNavbar sections={["Biography", "Interests", "Photos"]} />
      </Container>
    </>
  );
}
