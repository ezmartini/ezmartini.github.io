import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BsFillEnvelopeFill, BsPersonBoundingBox } from "react-icons/bs";

export default function SiteNavbar() {
  return (
    <Navbar sticky="top" className="p-0 glossy" expand="lg">
      <Navbar.Brand className="ms-2 text-white" href="#home">
        <BsPersonBoundingBox className="small mb-1" /> <b> Eduarda </b> Jr. Web
        Developer{" "}
      </Navbar.Brand>

      <Nav className="ms-auto me-2">
        <Nav.Link>
          {" "}
          <BsFillEnvelopeFill className="text-white mb-1" />{" "}
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
