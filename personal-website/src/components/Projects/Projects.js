import React from "react";
import "./Projects.css";
import { Container, Row, Col, Table } from "react-bootstrap";

function Projects() {
  return (
    <div id="projects">
      <div>
        3 Long Columns, one for app development, one for full-stack, one for
        AI/ML
      </div>
      <div>For app: Morse my code, My Carbon Footprint, Mood Music</div>
      <div>For fullstack: Where RU, Customizable Chess, RU Home</div>
      <div>
        For AI/ML: Handwriting recog, Grayscale to Color image, Automated
        Minesweeper
      </div>
    </div>
  );
}

export default Projects;
