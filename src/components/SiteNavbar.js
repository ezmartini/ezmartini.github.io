import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import {
  BsFillEnvelopeFill,
  BsPersonBoundingBox,
  BsLinkedin,
} from "react-icons/bs";

export default function SiteNavbar(props) {
  return (
    <Navbar
      sticky="top"
      className={
        !props.name
          ? "p-0 glossy"
          : "p-0 bg-light border-bottom position-fixed w-100"
      }
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
          <a
            className="text-decoration-none"
            href="mailto: eduardazmartini@gmail.com"
          >
            {" "}
            <BsFillEnvelopeFill
              className={
                !props.name
                  ? "text-white mb-1 me-2"
                  : "text-secondary mb-1 me-2"
              }
            />{" "}
          </a>
          <a className="text-decoration-none" href="linkedin.com/in/eduardazm">
            <BsLinkedin
              className={
                !props.name
                  ? "text-white mb-1 me-2"
                  : "text-secondary mb-1 me-2"
              }
            />{" "}
          </a>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
