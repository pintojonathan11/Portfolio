import React from "react";
import "./Skills.css";
import SkillTable from "./SkillTable";
import SkillInfo from "./SkillInfo";
import { Container, Row, Col, Table } from "react-bootstrap";
import ParticleAnimation from "../Main/ParticleAnimation";

function Skills() {
  return (
    <div id="skills" className="main">
      <div>
        <div className="animated-background">
          <Container fluid className="transparent-background">
            <Row className="container-background">
              <Col>
                <div className="mb-4 mt-3 skill-head-title">Skills</div>
                <SkillTable></SkillTable>
              </Col>
            </Row>
          </Container>
          <ParticleAnimation
            className=""
            numberOfParticles="100"
          ></ParticleAnimation>
        </div>
      </div>
    </div>
  );
}

export default Skills;
