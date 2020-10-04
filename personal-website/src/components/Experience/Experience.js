import React from "react";
import "./Experience.css";
import { Container, Row, Col } from "react-bootstrap";
import SpecificExperience from "./SpecificExperience";

function Experience() {
  var amazonLanguagesUsed = [
    [
      "AWS Services",
      "Lambda",
      "DynamoDB",
      "Batch",
      "CloudWatch",
      "S3",
      "IAM",
      "EMR"
    ],
    ["Programming Languages", "Java", "Python"]
  ];
  var morganLanguagesUsed = [
    ["Frontend", "Angular8", "Bootstrap4"],
    ["Backend", "Spring", "Apache CXF", "Java"]
  ];
  var arestyLanguagesUsed = [
    ["Languages and Tools", "Unity", "C#", "KADAPT package"]
  ];

  var amazonExtraInfo = [
    "Contributed to a large defect detection codebase by building a batch pipeline for implementing a scalable aggregation feature which was programmed mostly in Java.",
    "Expedited the process of surfacing, tracking, and solving defects by weeks.",
    "Participated in daily standups and weekly sprints.",
    "Generated multiple code reviews and wikis.",
    "Developed an additional side project using the Alexa Skills SDK for Python.",
    "Presented two design reviews for the team."
  ];
  var morganExtraInfo = [
    "Built a machine learning-as-a-service platform that allows users to train algorithms, build models, and test prebuilt and saved models.",
    "Saved internal teams weeks of unnecessary communication among different teams at different levels.",
    "Used by Developer, Business, QA, and Operation teams",
    "Presented my project three times to managing directors."
  ];
  var arestyExtraInfo = [
    "Developed problem-solving skills in the research environment and learned to communicate research to diverse audiences.",
    "Develop programs in Unity to simulate crowds (e.g., virtual characters) in the virtual environments.",
    "Explored different evaluation measures that evaluate the proclivity of virtual environments for occupants to maintain a safe distance in relation to the overall occupancy rate.",
    "Worked towards the development of a framework (in Unity) consisting of multiple levels controlling behavioral policies of virtual crowds.",
    "Evaluated the measures on the designed framework for different virtual environments as case studies."
  ];

  var odasisExtraInfo = [
    "Made lesson plan and taught weekly sessions for Calculus I",
    "Administered quizzes and aided students in exam-taking skills.",
    "Provided resources and other pertinent information to first-year students that enabled them to excel in Calculus and at Rutgers University."
  ];

  var jeiExtraInfo = [
    "Taught different math subjects that range from adding to calculus II"
  ];

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
              languagesUsed={amazonLanguagesUsed}
              extraInfo={amazonExtraInfo}
            ></SpecificExperience>
          </Col>
          <Col lg="4" md="8" xs="15" className="mt-5 mr-sm-5 ml-sm-5">
            <SpecificExperience
              image="morgan_stanley_logo.png"
              company="Morgan Stanley"
              position="Technology Summer Analyst Intern"
              date="(June 2019 - August 2019)"
              description="Full-Stack Project: Built a machine learning-as-a-service webapp that allowed internal teams to efficiently create ML models by providing the appropriate data"
              languagesUsed={morganLanguagesUsed}
              extraInfo={morganExtraInfo}
            ></SpecificExperience>
          </Col>
          <Col lg="4" md="8" xs="15" className="mt-5 mr-sm-5 ml-sm-5">
            <SpecificExperience
              image="aresty_logo.png"
              company="Aresty Research Program"
              position="Research Assistant"
              date="(Septembeer 2020 - May 2021)"
              description="Explored different evaluation measures that evaluate social distancing and developed a framework in Unity"
              languagesUsed={arestyLanguagesUsed}
              extraInfo={arestyExtraInfo}
            ></SpecificExperience>
          </Col>
          <Col lg="4" md="8" xs="15" className="mt-5 mr-sm-5 ml-sm-5">
            <SpecificExperience
              image="rutgers_logo.png"
              company="ODASIS"
              position="Supplemental Instructor for Calculus I"
              date="(September 2017 - May 2019)"
              description="Taught a Calculus I course for students who come from a low socio-economic background"
              extraInfo={odasisExtraInfo}
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
              extraInfo={jeiExtraInfo}
            ></SpecificExperience>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Experience;
