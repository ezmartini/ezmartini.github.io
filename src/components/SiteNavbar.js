import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BsFillEnvelopeFill, BsPersonBoundingBox } from "react-icons/bs";

export default function SiteNavbar() {
  return (
    <Navbar className="p-0" bg="light" expand="lg">
      <Navbar.Brand className="ms-2" href="#home">
        <BsPersonBoundingBox className="small" /> Eduarda{" "}
      </Navbar.Brand>

      <Nav className="ms-auto me-2">
        <Nav.Link>
          {" "}
          <BsFillEnvelopeFill />{" "}
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
