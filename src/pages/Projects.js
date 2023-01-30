import React from "react";
import { Container } from "react-bootstrap";
import SiteNavbar from "../components/SiteNavbar";
import VerticalNavbar from "../components/page-components/VerticalNavbar";

export default function Projects() {
  return (
    <>
      <SiteNavbar name="Projects" />
      <Container className="p-0 row" fluid>
        <VerticalNavbar
          sections={[
            "invvey",
            "Talkman",
            "NYU Photobooth",
            "Other",
            "Creative",
          ]}
        />

        <section className="col-9 p-4 offset-2 mt-5">
          <h1> Projects </h1>

          <section id="invvey" className="p-1">
            <h2 className="first-header mt-4"> Invvey (WIP) </h2>
          </section>

          <section id="talkman" className="p-1">
            <h2 className="second-header mt-4"> Talkman </h2>
          </section>

          <section id="nyu%20photobooth" className="p-1">
            <h2 className="third-header mt-4"> NYU Photobooth </h2>
          </section>

          <section id="other" className="p-1">
            <h2 className="fourth-header mt-4"> Other projects </h2>
          </section>

          <section id="creative" className="p-1">
            <h2 className="fifth-header mt-4"> Creative </h2>
          </section>
        </section>
      </Container>
    </>
  );
}
