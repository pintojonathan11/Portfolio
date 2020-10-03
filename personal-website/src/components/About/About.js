import React from "react";
import "./component.css";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <div>
      {/* <Parallax y={[0, 20]} > */}
      <div id="about" className="about-screen">
        <Container fluid className="mt-5">
          <Row className="d-flex justify-content-center">
            <Col lg="auto" md="auto" xs="auto" className="ml-lg-5">
              <Row className="d-flex justify-content-center">
                <div
                  className="about-me-heading d-flex justify-content-center align-self-center"
                  alt="thumbnail"
                >
                  About Me
                </div>
              </Row>

              <Row>
                <img
                  className="mt-3 zoom rounded img-fluid img-thumbnail hoverable"
                  alt="100x100"
                  src="profile.jpeg"
                />
              </Row>
            </Col>
            <Col
              lg="6"
              md="auto"
              xs="auto"
              className="pb-lg-5 ml-lg-5 mb-5 mr-lg-5"
            >
              <Container className="align-self-center">
                <Row
                  lg="6"
                  md="8"
                  xs="auto"
                  className="d-flex justify-content-center"
                >
                  <Col lg="6" md="7" xs="6" className="mt-3 mb-3">
                    <img
                      className="zoom rounded-circle img-fluid img-thumbnail hoverable"
                      alt="100x100"
                      src="Education_Image.png"
                    />
                  </Col>
                  <Col lg="6" md="7" xs="6" className="mt-3 mb-3">
                    <img
                      className="zoom rounded-circle img-fluid img-thumbnail hoverable"
                      alt="100x100"
                      src="Ambition_Image.png"
                    />
                  </Col>
                </Row>
                <Row
                  lg="6"
                  md="auto"
                  xs="auto"
                  className="d-flex justify-content-center"
                >
                  <Col lg="6" md="7" xs="6" className="mt-3 mb-3">
                    <img
                      className="zoom rounded-circle img-fluid img-thumbnail hoverable"
                      alt="100x100"
                      src="Activities_Image.png"
                    />
                  </Col>
                  <Col lg="6" md="7" xs="6" className="mt-3 mb-3">
                    <img
                      className="zoom rounded-circle img-fluid img-thumbnail hoverable"
                      alt="100x100"
                      src="Experiences_Image.png"
                    />
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
      {/* </Parallax> */}
    </div>
  );
}

export default About;
