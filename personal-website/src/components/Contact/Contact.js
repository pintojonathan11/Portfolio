import React from "react";
import "./Contact.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

export default function Contact() {
  return (
    <Container fluid className="contact-logos-row">
      <Row xs={2} md={4} lg={6} className="d-flex justify-content-center">
        <Col lg="auto" md="auto" xs="auto">
          <a href="https://www.linkedin.com/in/jonathan-pinto/" target="_blank">
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
  );
}
