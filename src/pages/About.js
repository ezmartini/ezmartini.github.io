import React from "react";
import { Navbar, Nav, Container, Col } from "react-bootstrap";
import VerticalNavbar from "../components/page-components/VerticalNavbar.js";
import SiteNavbar from "../components/SiteNavbar.js";

export default function About(props) {
  return (
    <>
      <SiteNavbar name="About" />
      <Container className="p-0 row" fluid>
        <VerticalNavbar sections={["Introduction", "Interests"]} />

        <section className="col-9 p-4 offset-lg-2 offset-1 mt-5">
          <h1 className="mt-3"> About </h1>

          <section id="introduction" className="p-1">
            <h2 className="first-header mt-4"> Introduction </h2>
            <p>
              {" "}
              I'm a Computer Science undergraduate at NYU from Cape Cod,
              Massachusetts, currently in my senior year of receiving a Bachelor
              of Arts in Computer Science. I enjoy both the technical, creative,
              and problem-solving aspects of both front and back-end Web
              Development projects- from the conception of an idea, to its
              implementation. When not by my computer, I'm typically reading up
              on some current high-profile cases, eating Brazilian food in
              Astoria, or having fun doing interior design on The Sims.{" "}
            </p>{" "}
          </section>

          <section id="interests" className="p-1">
            <h2 className="second-header mt-3"> Interests </h2>
            <ul className="list-group">
              <li className="list-group-item">
                {" "}
                Web Development & Web Design{" "}
              </li>
              <li className="list-group-item"> Psychology </li>
              <li className="list-group-item"> Interior design </li>
              <li className="list-group-item"> Entrepreneurship </li>
              <li className="list-group-item"> Digital Art</li>
              <li className="list-group-item"> Creative Writing </li>
            </ul>
          </section>
        </section>
      </Container>
    </>
  );
}
