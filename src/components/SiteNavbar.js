import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BsFillEnvelopeFill, BsPersonBoundingBox } from "react-icons/bs";

export default function SiteNavbar(props) {
  return (
    <Navbar
      sticky="top"
      className={!props.name ? "p-0 glossy" : "p-0 bg-light border-bottom"}
      expand="lg"
    >
      <Navbar.Brand
        className={!props.name ? "ms-2 text-white" : "ms-2 text-secondary"}
        href={"/"}
      >
        <BsPersonBoundingBox className="small mb-1" /> <b> Eduarda </b>{" "}
        {!props.name ? "Jr. Web Developer" : props.name}
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
