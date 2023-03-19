import React from "react";
import { Container, Row } from "react-bootstrap";
import SiteNavbar from "../components/SiteNavbar";
import VerticalNavbar from "../components/page-components/VerticalNavbar";
import birds from "../kaytracards/kaytraa-cards2.jpg";
import bugs from "../kaytracards/kaytraa-cards7.jpg";
import volcano from "../kaytracards/kaytraa-cards10.jpg";
import mountain from "../kaytracards/kaytraa-cards13.jpg";
import invvey from "../jpgs/invvey.png";

export default function Projects() {
  return (
    <>
      <SiteNavbar name="Projects" />
      <Container className="p-0 row" fluid>
        <VerticalNavbar
          sections={["High Vintage", "Invvey", "KAYTRAA-CARDS"]}
        />

        <section className="col-lg-10 col-11 p-4 offset-lg-2 offset-1 mt-5 mt-lg-3">
          <h1 className="mt-4"> Projects </h1>

          <section id="high vintage" className="p-1">
            <h2 className="first-header mt-4"> HighVintage </h2>

            <p className="mb-0">
              {" "}
              <b> HighVintage </b>{" "}
              <i> (MongoDB, Express.js, React, Node.js, Tailwind) </i>
            </p>

            <a href="https://github.com/agiledev-students-spring-2023/final-project-highvintage">
              {" "}
              GitHub Repository{" "}
            </a>

            <p className="mb-0"> February 2022 – Present </p>
            <p className="mt-2 ms-1">
              {" "}
              "HighVintage is a social media web application that aims to
              provide easy access to thrifting-related information by allowing
              users to share outfits and thrift stores and exchange ideas.
              HighVintage users will be able to join a community of like-minded
              second-hand clothing enjoyers, where the experience of thrifting
              is made easier and more fun."{" "}
            </p>

            <ul class="list-group ms-4 mb-4">
              <li>
                {" "}
                Overseeing sprints, standups, and other relevant aspects of
                Scrum as current project Scrum master
              </li>
              <li>
                {" "}
                Using a mobile-first approach to devise wireframes and user
                experience
              </li>

              <li>
                {" "}
                Overseeing and devising unit tests and assisting with
                containerization
              </li>
            </ul>
          </section>

          <section id="invvey" className="p-1">
            <h2 className="second-header mt-4"> Invvey </h2>

            <p className="mb-0">
              {" "}
              <b> Invvey </b>{" "}
              <i> (MongoDB, Express.js, React, Node.js, Bootstrap) </i>
            </p>

            <a href="https://invvey.onrender.com/register"> Deployed Site </a>

            <p className="mb-0"> January 2022 </p>

            <p className="mt-2 ms-1">
              {" "}
              A short project developed for two small businesses that wanted a
              simple, no-fuss web application to view inventory status, add
              inventory items, and create collections in inventory. Used this
              project as an opportunity to get my hands dirty with React, mobile
              first UI design, and Rest API principles.
            </p>

            <img
              alt="a screenshot of invvey's dashboard, showing products and their stocks"
              className="border"
              src={invvey}
              width="100%"
            />

            <ul class="list-group ms-4 mb-4">
              <li>
                {" "}
                Developed a full-stack web app for viewing, adding, and updating
                items in an inventory
              </li>
              <li>
                {" "}
                Worked with two small businesses to identify needs and goals
                that can be accomplished within a short time frame
              </li>

              <li className="ms-2">
                {" "}
                <i> What I would do differently: </i> Better coding practices,
                work with a longer time frame, practice better web
                accessibility, improve lackluster landing/sign in/register pages
              </li>
            </ul>
          </section>

          <section id="kaytraa-cards" className="p-1">
            <h2 className="third-header mt-4"> KAYTRAA-CARDS </h2>

            <p className="mb-0">
              {" "}
              <b> KAYTRAA-CARDS </b>{" "}
              <i> (Adobe Illustrator, Adobe Indesign) </i>
            </p>

            <p> July 2022</p>
            <p>
              {" "}
              A deck of 52 playing cards inspired by Ricardo Cavolo and
              Kaytranada's album 99.9%. Created using Adobe Illustrator and
              Adobe Indesign, printed physical copies. A personal study of
              playing card design.{" "}
            </p>

            <Container className="ms-3">
              <Row>
                <img
                  className="col-lg-3 col-6"
                  src={birds}
                  alt="Playing card with a bird design in the center"
                />
                <img
                  className="col-lg-3 col-6 "
                  src={bugs}
                  alt="Playing card with a ladybug design in the center"
                />
                <img
                  className="col-lg-3 col-6"
                  src={mountain}
                  alt="Playing card with a mountain design in the center"
                />
                <img
                  className="col-lg-3 col-6"
                  src={volcano}
                  alt="Playing card with a volcano design in the center"
                />
              </Row>
            </Container>
          </section>
        </section>
      </Container>
    </>
  );
}
