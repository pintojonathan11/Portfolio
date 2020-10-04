import React from "react";
import "./component.css";
import { Container, Row, Col } from "react-bootstrap";
import CobwebAnimation from "./CobwebAnimation";
import Image from "react-bootstrap/Image";
import { Link } from "react-scroll";

function Header() {
  return (
    <div id="main">
      <div>
        <div id="large-header" className="large-header">
          <CobwebAnimation numberOfParticles="100"></CobwebAnimation>
          <Container fluid className="contact-logos-row">
            <Row>
              <Col>
                <div className="main-title ">Jonathan Pinto</div>
              </Col>
            </Row>
            <Row xs={2} md={4} lg={6} className="d-flex justify-content-center">
              <Col lg="auto" md="auto" xs="auto">
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
              <Col lg="auto" md="auto" xs="auto">
                <a href="https://github.com/pintojonathan11" target="_blank">
                  <Image
                    src="github_logo.png"
                    className="contact-logos"
                    roundedCircle
                  ></Image>
                </a>
              </Col>
              <Col lg="auto" md="auto" xs="auto">
                <a
                  href="https://drive.google.com/file/d/1P_GmATcNrFmHbOODNZr7UobfXId-9PXN/view?usp=sharing"
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
    </div>
  );
}

export default Header;
