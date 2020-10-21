import React from "react";
import "./Contact.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

export default function Contact() {
  return (
    <div className="contact-screen">
      <Container fluid className="final-contact-logos-row">
        <Row className="d-flex justify-content-center">
          <Col lg="auto" md="auto" xs="auto" className="mt-5 mb-4">
            <a
              href="https://www.linkedin.com/in/jonathan-pinto/"
              target="_blank"
            >
              <Image
                src="linkedin_logo.png"
                className="final-contact-logos"
                roundedCircle
              ></Image>
            </a>
          </Col>
          <Col lg="auto" md="auto" xs="auto" className="mt-5 mb-4">
            <a href="https://github.com/pintojonathan11" target="_blank">
              <Image
                src="github_logo.png"
                className="final-contact-logos"
                roundedCircle
              ></Image>
            </a>
          </Col>
          <Col lg="auto" md="auto" xs="auto" className="mt-5 mb-4">
            <a
              href="https://drive.google.com/file/d/1KLV01bfky6-MC2Nx6GtZfNKigkGGCz3m/view?usp=sharing"
              target="_blank"
            >
              <Image
                src="resume_logo.png"
                className="final-contact-logos"
                roundedCircle
              ></Image>
            </a>
          </Col>
        </Row>
        <div className="pb-5 small-name">Jonathan Pinto </div>
      </Container>
    </div>
  );
}
