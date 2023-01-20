import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BsFillEnvelopeFill, BsPersonBoundingBox } from "react-icons/bs";

export default function SiteNavbar() {
  return (
    <Navbar sticky="top" className="p-0 glossy" expand="lg">
      <Navbar.Brand className="ms-2 text-white" href="#home">
        <BsPersonBoundingBox className="small" /> Eduarda{" "}
      </Navbar.Brand>

      <Nav className="ms-auto me-2">
        <Nav.Link>
          {" "}
          <BsFillEnvelopeFill className="text-white" />{" "}
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
