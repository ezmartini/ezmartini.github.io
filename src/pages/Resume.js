import React from "react";
import { Container } from "react-bootstrap";
import SiteNavbar from "../components/SiteNavbar";
import VerticalNavbar from "../components/page-components/VerticalNavbar";
import resumePDF from "../EduardaMartini_Resume.pdf";
import { BsDownload, BsEye } from "react-icons/bs";

export default function Resume() {
  return (
    <>
      <SiteNavbar name="Resumé" />

      <Container className="p-0 row" fluid>
        <VerticalNavbar
          sections={["PDF", "Education", "Experience", "Skills", "Projects"]}
        />

        <section className="col-lg-10 col-11 p-4 offset-lg-2 offset-1 mt-5 mt-lg-3">
          <h1 className="mt-4"> Resumé </h1>

          <section id="pdf" className="p-1">
            <h2 className="first-header mt-4"> PDF </h2>
            <p className="muted text-small"> View or download resumé. </p>{" "}
            <div className="download-page rounded p-3 ">
              <a href={resumePDF} download="EduardaMartini_Resume.pdf">
                {" "}
                <BsDownload className="me-3" />
                Download Resumé PDF{" "}
              </a>
            </div>
            <div className="download-page-other rounded p-3 mt-2">
              <a rel="noreferrer" href={resumePDF} target="_blank">
                <BsEye className="me-3" />
                View Resumé PDF in New Tab
              </a>
            </div>
          </section>

          <section id="education" className="p-1">
            <h2 className="second-header mt-4"> Education </h2>
            <p className="mb-0">
              {" "}
              <b> New York University, College of Arts and Sciences, </b> New
              York, NY (current){" "}
            </p>
            <p className="mb-0"> Bachelor of Arts, Computer Science </p>
            <p> Senior, Graduating May 2023 </p>
            <p className="mb-0">
              <i> Relevant Coursework: </i>
            </p>

            <ul class="list-group">
              <li class="list-group-item"> Data Structures & Alogrithms </li>
              <li class="list-group-item"> Data Science </li>
              <li class="list-group-item"> Object Oriented Programming </li>
              <li class="list-group-item"> Applied Internet Technology </li>
              <li class="list-group-item"> Software Engineering </li>
              <li class="list-group-item">
                Collaborating Remotely: Build Software from Anywhere{" "}
              </li>
            </ul>
          </section>

          <section id="experience" className="p-1">
            <h2 className="third-header mt-4"> Experience </h2>

            <p className="mb-0">
              {" "}
              <b> Front-End Developer Intern </b> at <i> L'AMARUE </i>
            </p>

            <p className="mb-0"> Remote, May 2022 – September 2022 </p>

            <ul class="list-group ms-4">
              <li>
                {" "}
                Planned and developed different components of the website{" "}
              </li>
              <li>
                {" "}
                Provided direct support to and collaborated with Co-Founder and
                CEO on multiple technical projects{" "}
              </li>
              <li>
                {" "}
                Designed and established user-friendly and informative websites
                aimed at increasing website engagement and enhancing brand
                awareness{" "}
              </li>
            </ul>

            <p className="mb-0 mt-4">
              {" "}
              <b> Social Media Curator and Intern </b> at <i> L'AMARUE </i>
            </p>

            <p className="mb-0">
              {" "}
              New York, NY, November 2019 – February 2022{" "}
            </p>

            <ul class="list-group ms-4">
              <li>
                {" "}
                Created and edited visual content for publication on official
                online media using tools such as Photoshop
              </li>
              <li>
                {" "}
                Provided user experience feedback to CEO for website development
                and customer service; communicated with CEO to determine the
                best course of action and future development
              </li>
            </ul>
          </section>

          <section id="skills" className="p-1">
            <h2 className="fourth-header mt-4"> Skills </h2>

            <div className="container row mx-auto  border rounded p-2 ">
              <div className="col-lg-4 col-12 p-2 ">
                {" "}
                <h4> Programming Languages </h4>{" "}
                <ul class="list-group list-unstyled">
                  <li> JavaScript (ES6) </li>
                  <li> Java </li>
                  <li> C </li>
                  <li> C++ </li>
                  <li> Python </li>
                </ul>
              </div>
              <div className="col-lg-4 col-12 p-2">
                {" "}
                <h4>Web Development </h4>{" "}
                <ul class="list-group list-unstyled">
                  <li> Node.js </li>
                  <li> MongoDB </li>
                  <li> Express.js </li>
                  <li> React </li>
                  <li> Backend Web Development </li>
                  <li> Frontend Web Development </li>
                  <li> Agile Development </li>
                  <li> AJAX </li>
                  <li> Rest APIs </li>
                </ul>
              </div>

              <div className="col-lg-4 col-12 p-2">
                {" "}
                <h4> Tools & Technologies </h4>{" "}
                <ul class="list-group list-unstyled">
                  <li> Version Control (Git & GitHub) </li>
                  <li> Continuous Integration (CI) </li>
                  <li> Continuous Deployment (CD) </li>
                  <li> Jira </li>
                  <li> Slack </li>
                  <li> Confluence</li>
                  <li> Adobe Photoshop </li>
                  <li> Adobe Illustrator </li>
                  <li> Adobe InDesign </li>
                  <li> Mocha </li>
                  <li> ESLint </li>
                  <li> Web Hosting </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="projects" className="p-1">
            <h2 className="fifth-header mt-4"> Projects </h2>

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
            <p className="mb-0">
              {" "}
              <b> Talkman </b>{" "}
              <i>
                {" "}
                (MongoDB, Handlebars.js, Express.js, Spotify API, Passport.js,
                Node.js){" "}
              </i>
            </p>

            <a href="https://talkman-app.herokuapp.com/">
              {" "}
              View deployed site{" "}
            </a>
            <p className="mb-0"> November 2022 – December 2022 </p>
            <ul class="list-group ms-4 mb-4">
              <li>
                {" "}
                Designed and developed a full-stack music diary web application
                using HTML, CSS, and Express.js
              </li>
              <li>
                {" "}
                Incorporated Spotify API to allow users to create entries and
                preview songs from Spotify
              </li>
              <li className="ms-2">
                {" "}
                <i> What I would do differently: </i> Take a mobile first
                approach, use a Front-End framework that allows for more
                stylistic freedom (plain CSS or Tailwind), use React for
                multiple repeating components
              </li>
            </ul>

            <p className="mb-0">
              {" "}
              <b> NYU Photobooth </b>{" "}
              <i> (Flask, Handlebars.js, Bootstrap, MongoDB)</i>
            </p>

            <a href="https://nyu-photobooth.herokuapp.com/">
              {" "}
              View deployed site{" "}
            </a>
            <p className="mb-0"> December 2022 </p>
            <ul class="list-group ms-4">
              <li>
                {" "}
                Created containerized (Docker) full-stack web application for
                NYU students to share experiences unique to on campus life using
                user-generated photos and randomly generated captions
              </li>
              <li>
                {" "}
                Oversaw front-end development and lifecycle development
                including developing wireframes, performing website design,
                delegating user stories, leading daily standups, supervising
                deployment and unit testing
              </li>
              <li className="ms-2">
                {" "}
                <i> What I would do differently: </i> Take a mobile first
                approach (once again!), implement more user sign-in security
              </li>
            </ul>
          </section>
        </section>
      </Container>
    </>
  );
}
