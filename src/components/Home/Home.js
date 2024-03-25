import { Container, Row, Col } from "react-bootstrap";

import programmerImage from "../../assets/ProgrammerBig.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import "./Home.css";

function Home() {
  return (
    <>
      <Container
        fluid
        className="home-wrapper h-100 w-100 d-flex flex-column justify-content-center align-items-center"
      >
        <Row className="w-100">
          <Col className="col-sm-12 col-md-6 left-col d-flex flex-column justify-content-center align-items-center text-light">
            <div className="about-wrapper">
              <h1 className="pl-3 header ">
                <span className="name-span">jakub</span>
                <span className="funtion-span">.about()</span>
              </h1>
              <p className="full-name">Jakub Kuśmierczyk</p>
              <p>Frontend Developer</p>
            </div>
          </Col>
          <Col className="img-col col-sm-12 col-md-6 d-flex justify-content-center">
            <img
              className="programmer-image img-fluid"
              src={programmerImage}
              alt="programmer"
            ></img>
          </Col>
        </Row>
      </Container>
      <Container fluid className="introduce-wrapper">
        <h1 text-sm-32>
          jakub.<span className="introduce-span">introduce()</span>
        </h1>
        <Row className="description-container">
          <Col className="col-xl-4 col-lg-6 col-md-6 col-sm-8 description-column">
            <p>
              I am a beginner frontend developer and computer science student
              who is passionate about creating visually appealing and
              user-friendly websites.
            </p>
            <br></br>
            <br></br>
            <p>
              My skills include proficiency in Angular, React, TypeScript, SCSS,
              RxJS, as well as experience with various web development libraries
              and tools
            </p>
            <br></br>
            <br></br>
            <p>
              I am also a member of academic programming club, where I work with
              my teammates on various fascinating projects. Through these
              projects, I have gained experience working in a team environment
              and collaborating with others. In addition, I often participate in
              hackathons{" "}
            </p>
          </Col>
        </Row>
      </Container>
      <div className="socials-wrapper">
        <h1>
          jakub.<span className="introduce-span">find()</span>
        </h1>
        <Col className="col-xl-4 col-lg-6 col-md-6 col-sm-8 introduce-column">
          <p className="text-center">Discover my work and connect with me</p>
        </Col>
        <ul className="socials-list">
          <a href="mailto:jakub.kusmierczyk@op.pl">
            <li className="socials-item">
              <FontAwesomeIcon className="socials-icon" icon={faEnvelope} />
            </li>
          </a>
          <a href="https://github.com/bBravee">
            <li className="socials-item">
              <FontAwesomeIcon className="socials-icon" icon={faGithub} />
            </li>
          </a>
          <a href="https://linkedin.com/in/kuba-kuśmierczyk-454581242">
            <li className="socials-item">
              <FontAwesomeIcon className="socials-icon" icon={faLinkedin} />
            </li>
          </a>
        </ul>
      </div>
    </>
  );
}

export default Home;
