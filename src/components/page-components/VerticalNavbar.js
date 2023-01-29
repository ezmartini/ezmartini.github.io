import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export default function VerticalNavbar(props) {
  const colors = ["#41AFDC", "#FF3126", "#1EC337", "#5452CC", "#FF9500"];
  function generateNavLinks() {
    const links = props.sections.map((sec, idx) => {
      return (
        <>
          <Link
            className="text-black text-decoration-none vert-nav-link"
            to={`#${sec.toLowerCase()}`}
            key={idx}
          >
            <BsFillArrowRightCircleFill
              style={{ color: colors[idx], fontSize: "20px" }}
              className="mb-1"
            />{" "}
            {sec}
          </Link>
        </>
      );
    });

    return links;
  }
  return (
    <Navbar
      className={
        "col-lg-2 p-4 align-items-start border-end sticky-top vertical-navigation mt-4"
      }
      style={{
        height: "100vh",
        position: "fixed",
        top: "0px",
        zIndex: "2",
      }}
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav">List</Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="flex-column  border rounded vertical-nav mt-2">
          {generateNavLinks()}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
