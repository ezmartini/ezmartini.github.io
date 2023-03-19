import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export default function VerticalNavbar(props) {
  const [active, setActive] = useState("");
  const [hover, setHover] = useState("");

  const colors = ["#41AFDC", "#FF3126", "#1EC337", "#5452CC", "#FF9500"];

  function generateNavLinks() {
    const links = props.sections.map((sec, idx) => {
      const isActive = active === sec;
      const isHover = hover === sec;

      return (
        <>
          <Link
            className={"text-black text-decoration-none "}
            style={{
              backgroundColor: isActive
                ? colors[idx] + "3a"
                : isHover
                ? colors[idx] + "10"
                : " white",
              transition: "0.2s",
            }}
            onMouseOver={(e) => setHover(e.target.id)}
            onMouseLeave={(e) => setHover("none")}
            id={sec}
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
      className={"col-lg-2 p-4 pb-2 align-items-start vertical-navigation mt-4"}
      style={{
        position: "fixed",
        top: "0px",
        zIndex: "2",
      }}
      collapseOnSelect
      expand="lg"
      variant="light"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="bg-light">
        {" "}
        Contents{" "}
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav
          onClick={(e) => setActive(e.target.id)}
          style={{ overflow: "hidden" }}
          className="flex-column border rounded vertical-nav mt-2"
        >
          {generateNavLinks()}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
