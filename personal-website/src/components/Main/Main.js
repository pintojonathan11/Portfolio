import React from "react";
import "./Main.css";
import { Container, Row, Col } from "react-bootstrap";
import ParticleAnimation from "./ParticleAnimation";
import Image from "react-bootstrap/Image";
import { Link } from "react-scroll";

function Main() {
  return (
    <div id="main">
      <div id="large-header" className="large-header">
        <ParticleAnimation numberOfParticles="200"></ParticleAnimation>
        <Container fluid className="contact-logos-row">
          <Row>
            <Col className="ml-1 mr-1">
              <div className="main-title ">Jonathan Pinto</div>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col lg="auto" md="auto" xs="10" className="mt-3">
              <a
                href="https://www.linkedin.com/in/jonathan-pinto/"
                target="_blank"
              >
                <Image
                  src="linkedin_logo.png"
                  className="contact-logos"
                  roundedCircle
                ></Image>
              </a>
            </Col>
            <Col lg="auto" md="auto" xs="10" className="mt-3">
              <a href="https://github.com/pintojonathan11" target="_blank">
                <Image
                  src="github_logo.png"
                  className="contact-logos"
                  roundedCircle
                ></Image>
              </a>
            </Col>
            <Col lg="auto" md="auto" xs="10" className="mt-3">
              <a
                href="https://drive.google.com/file/d/1KLV01bfky6-MC2Nx6GtZfNKigkGGCz3m/view?usp=sharing"
                target="_blank"
              >
                <Image
                  src="resume_logo.png"
                  className="contact-logos"
                  roundedCircle
                ></Image>
              </a>
            </Col>
          </Row>
        </Container>
        <div className="d-flex align-items-end justify-content-center">
          <div className="arrow-loc">
            <div lg="auto" md="auto" xs="auto">
              <div className="arrow">
                <Link
                  // activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={500}
                >
                  <div className="t"></div>
                  <div className="t"></div>
                  <div className="t"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
