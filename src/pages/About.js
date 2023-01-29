import React from "react";
import { Navbar, Nav, Container, Col } from "react-bootstrap";
import VerticalNavbar from "../components/page-components/VerticalNavbar.js";
import SiteNavbar from "../components/SiteNavbar.js";

export default function About(props) {
  return (
    <>
      <SiteNavbar name="About" />
      <Container className="p-0 row" fluid>
        <VerticalNavbar sections={["Biography", "Interests"]} />

        <section className="col-4 p-4">
          <h1> About </h1>
        </section>
      </Container>
    </>
  );
}
