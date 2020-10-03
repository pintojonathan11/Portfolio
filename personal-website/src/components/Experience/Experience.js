import React from "react";
import "./component.css";
import { Container, Row, Col } from "react-bootstrap";
import SpecificExperience from "./SpecificExperience";

function Experience() {
  return (
    <div id="experience" className="experience-screen">
      <Container fluid>
        <Row>
          <Col className="d-flex justify-content-center">
            <div className="experience-text mt-5">Experiences</div>
          </Col>
        </Row>
        <Row className="mt-3 d-flex justify-content-center">
          <Col lg="4" md="8" xs="15" className="mt-5 mr-sm-5 ml-sm-5">
            <SpecificExperience
              image="amazon_logo.png"
              company="Amazon"
              position="Software Development Engineer Intern"
              date="(June 2020 - August 2020)"
              description="Backend Project: Built a scalable aggregation feature into a large defect detection codebase using various AWS services and Java"
            ></SpecificExperience>
          </Col>
          <Col lg="4" md="8" xs="15" className="mt-5 mr-sm-5 ml-sm-5">
            <SpecificExperience
              image="morgan_stanley_logo.png"
              company="Morgan Stanley"
              position="Technology Summer Analyst Intern"
              date="(June 2019 - August 2019)"
              description="Full-Stack Project: Built a machine learning-as-a-service webapp that allowed internal teams to efficiently create ML models by providing the appropriate data"
            ></SpecificExperience>
          </Col>
          <Col lg="4" md="8" xs="15" className="mt-5 mr-sm-5 ml-sm-5">
            <SpecificExperience
              image="aresty_logo.png"
              company="Aresty Research Program"
              position="Research Assistant"
              date="(Septembeer 2020 - May 2021)"
              description="Explored different evaluation measures that evaluate social distancing and developed a framework in Unity"
            ></SpecificExperience>
          </Col>
          <Col lg="4" md="8" xs="15" className="mt-5 mr-sm-5 ml-sm-5">
            <SpecificExperience
              image="rutgers_logo.png"
              company="ODASIS"
              position="Supplemental Instructor for Calculus I"
              date="(September 2017 - May 2019)"
              description="Taught a Calculus I course for students who come from a low socio-economic background"
            ></SpecificExperience>
          </Col>
          <Col
            lg="4"
            md="8"
            xs="15"
            className="mt-5 mr-sm-5 ml-sm-5 mb-md-5 mb-5"
          >
            <SpecificExperience
              image="jei_logo.45"
              company="JEI Learning Center"
              position="Math Tutor"
              date="(August 2018 - May 2019)"
              description="Taught Math to children from the ages of 5 to 18"
            ></SpecificExperience>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Experience;
