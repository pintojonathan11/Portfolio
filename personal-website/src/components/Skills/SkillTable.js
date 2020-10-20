import React, { Component } from "react";
import "./Skills.css";
import SkillInfo from "./SkillInfo";
import { Table, ProgressBar, Button, Col, Row } from "react-bootstrap";
import { MDBIcon, MDBBtn } from "mdbreact";

class SkillTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedBySkillAsc: false,
      sortedByTypeAsc: false,
      sortedByYrsOfExpAsc: false,
      sortedByProfAsc: false,
      listOfSkills: [
        new SkillInfo(
          "skills_logo/java_logo.png",
          "Java",
          "Backend",
          "3 Years",
          "80"
        ),
        new SkillInfo(
          "skills_logo/python_logo.png",
          "Python",
          "Backend",
          "1 Year",
          "45"
        ),
        new SkillInfo(
          "skills_logo/html_logo.png",
          "HTML",
          "Frontend",
          "2 Years",
          "40"
        ),
        new SkillInfo(
          "skills_logo/css_logo.svg",
          "CSS",
          "Frontend",
          "2 Years",
          "40"
        ),
        new SkillInfo(
          "skills_logo/js_logo.png",
          "Javascript",
          "Frontend",
          "2 Years",
          "45"
        ),
        new SkillInfo(
          "skills_logo/react_logo.png",
          "React",
          "Frontend",
          "1 Year",
          "40"
        ),
        new SkillInfo(
          "skills_logo/angular_logo.png",
          "Angular",
          "Frontend",
          "1 Year",
          "25"
        ),
        new SkillInfo(
          "skills_logo/node_logo.png",
          "Node/Express",
          "Backend",
          "1 Year",
          "45"
        ),
        new SkillInfo(
          "skills_logo/git_logo.png",
          "Git",
          "Tool",
          "4 Years",
          "50"
        ),
        new SkillInfo(
          "skills_logo/linux_logo.png",
          "Unix/Linux",
          "Tool",
          "3 Years",
          "65"
        ),
        new SkillInfo(
          "skills_logo/sql_logo.svg",
          "SQL",
          "Backend",
          "1 Year",
          "40"
        ),
        new SkillInfo("skills_logo/c_logo.png", "C", "Backend", "1 Year", "40"),
        new SkillInfo(
          "skills_logo/android_logo.png",
          "Android App Development",
          "Frontend",
          "2 Years",
          "50"
        ),
        new SkillInfo(
          "skills_logo/flutter_logo.png",
          "Flutter",
          "Frontend",
          "1 Year",
          "35"
        ),
        // new SkillInfo(
        //   "skills_logo/octave_logo.png",
        //   "Octave",
        //   "Machine Learning",
        //   "1 Year",
        //   "20"
        // ),
        new SkillInfo(
          "skills_logo/tensorflow_logo.png",
          "TensorFlow",
          "Machine Learning",
          "1 Year",
          "30"
        ),
        new SkillInfo(
          "skills_logo/aws_logo.svg",
          "AWS",
          "Cloud",
          "1 Year",
          "40"
        ),
        new SkillInfo(
          "skills_logo/firebase_logo.png",
          "Firebase",
          "Cloud",
          "1 Year",
          "35"
        ),
        new SkillInfo(
          "skills_logo/csharp_logo.png",
          "C#",
          "Backend",
          "1 year",
          "40"
        ),
        new SkillInfo(
          "skills_logo/unity_logo.png",
          "Unity",
          "Game Development",
          "1 Year",
          "40"
        )
      ]
    };
    this.sortListBySkill = this.sortListBySkill.bind(this);
    this.sortListBySkillHelper = this.sortListBySkillHelper.bind(this);

    this.sortListByType = this.sortListByType.bind(this);
    this.sortListByTypeHelper = this.sortListByTypeHelper.bind(this);

    this.sortListByYrs = this.sortListByYrs.bind(this);
    this.sortListByYrsHelper = this.sortListByYrsHelper.bind(this);

    this.sortListByProf = this.sortListByProf.bind(this);
    this.sortListByProfHelper = this.sortListByProfHelper.bind(this);

    this.resetSortedBools = this.resetSortedBools.bind(this);

    this.sortListByProfHelper();
  }

  resetSortedBools() {
    this.sortedBySkillAsc = false;
    this.sortedByTypeAsc = false;
    this.sortedByYrsOfExpAsc = false;
    this.sortedByProfAsc = false;
  }

  sortListBySkillHelper() {
    if (this.state.sortedBySkillAsc) {
      this.state.sortedBySkillAsc = false;
    } else {
      this.state.sortedBySkillAsc = true;
    }
    this.sortedByTypeAsc = false;
    this.sortedByYrsOfExpAsc = false;
    this.sortedByProfAsc = false;
    this.sortListBySkill(this.state.sortedBySkillAsc);
    this.forceUpdate();
  }

  sortListBySkill(isAsc) {
    return this.state.listOfSkills.sort(function(a, b) {
      if (!isAsc) {
        return a.skill.toUpperCase() > b.skill.toUpperCase() ? -1 : 1;
      } else {
        return a.skill.toUpperCase() < b.skill.toUpperCase() ? -1 : 1;
      }
    });
  }

  sortListByTypeHelper() {
    if (this.state.sortedByTypeAsc) {
      this.state.sortedByTypeAsc = false;
    } else {
      this.state.sortedByTypeAsc = true;
    }
    this.sortedBySkillAsc = false;
    this.sortedByYrsOfExpAsc = false;
    this.sortedByProfAsc = false;
    this.sortListByType(this.state.sortedByTypeAsc);
    this.forceUpdate();
  }

  sortListByType(isAsc) {
    return this.state.listOfSkills.sort(function(a, b) {
      if (!isAsc) {
        if (a.type.toUpperCase() > b.type.toUpperCase()) {
          return -1;
        } else if (a.type.toUpperCase() < b.type.toUpperCase()) {
          return 1;
        } else {
          return a.proficiency > b.proficiency ? -1 : 1;
        }
      } else {
        if (a.type.toUpperCase() < b.type.toUpperCase()) {
          return -1;
        } else if (a.type.toUpperCase() > b.type.toUpperCase()) {
          return 1;
        } else {
          return a.proficiency > b.proficiency ? -1 : 1;
        }
      }
    });
  }

  sortListByYrsHelper() {
    if (this.state.sortedByYrsOfExpAsc) {
      this.state.sortedByYrsOfExpAsc = false;
    } else {
      this.state.sortedByYrsOfExpAsc = true;
    }
    this.sortedBySkillAsc = false;
    this.sortedByTypeAsc = false;
    this.sortedByProfAsc = false;
    this.sortListByYrs(this.state.sortedByYrsOfExpAsc);
    this.forceUpdate();
  }

  sortListByYrs(isAsc) {
    return this.state.listOfSkills.sort(function(a, b) {
      if (isAsc) {
        if (a.yrsOfExp === "Half A Year") {
          return 1;
        } else if (b.yrsOfExp === "Half A Year") {
          return -1;
        }
        if (a.yrsOfExp.toUpperCase() > b.yrsOfExp.toUpperCase()) {
          return -1;
        } else if (a.yrsOfExp.toUpperCase() < b.yrsOfExp.toUpperCase()) {
          return 1;
        } else {
          return a.proficiency > b.proficiency ? -1 : 1;
        }
      } else {
        if (a.yrsOfExp === "Half A Year") {
          return -1;
        } else if (b.yrsOfExp === "Half A Year") {
          return 1;
        }
        if (a.yrsOfExp.toUpperCase() < b.yrsOfExp.toUpperCase()) {
          return -1;
        } else if (a.yrsOfExp.toUpperCase() > b.yrsOfExp.toUpperCase()) {
          return 1;
        } else {
          return a.proficiency < b.proficiency ? -1 : 1;
        }
      }
    });
  }

  sortListByProfHelper() {
    if (this.state.sortedByProfAsc) {
      this.state.sortedByProfAsc = false;
    } else {
      this.state.sortedByProfAsc = true;
    }
    this.sortedBySkillAsc = false;
    this.sortedByTypeAsc = false;
    this.sortedByYrsOfExpAsc = false;
    this.sortListByProf(this.state.sortedByProfAsc);
    this.forceUpdate();
  }

  sortListByProf(isAsc) {
    return this.state.listOfSkills.sort(function(a, b) {
      if (isAsc) {
        if (a.proficiency.toUpperCase() > b.proficiency.toUpperCase()) {
          return -1;
        } else if (a.proficiency.toUpperCase() < b.proficiency.toUpperCase()) {
          return 1;
        } else {
          return a.skill < b.skill ? -1 : 1;
        }
      } else {
        if (a.proficiency.toUpperCase() < b.proficiency.toUpperCase()) {
          return -1;
        } else if (a.proficiency.toUpperCase() > b.proficiency.toUpperCase()) {
          return 1;
        } else {
          return a.skill < b.skill ? -1 : 1;
        }
      }
    });
  }

  render() {
    return (
      <div className="frame table-body ml-1 mr-1 mb-5">
        {/* <MDBDataTable striped small data={listOfSkills} /> */}
        <Table responsive hover>
          <thead>
            <tr>
              <th className="img-col align-middle"></th>
              <th className="align-middle">
                <div
                  onClick={this.sortListBySkillHelper}
                  className="table-header"
                >
                  Skill
                  <MDBIcon className="ml-1" icon="sort" />
                </div>
              </th>
              <th className="align-middle">
                <div
                  onClick={this.sortListByTypeHelper}
                  className="table-header"
                >
                  Type
                  <MDBIcon className="ml-1" icon="sort" />
                </div>
              </th>
              <th onClick={this.sortListByYrsHelper} className="align-middle">
                <div className="table-header">
                  <Col>
                    <div>
                      Years of Experience
                      <MDBIcon className="ml-1" icon="sort" />
                    </div>
                  </Col>
                </div>
              </th>
              <th onClick={this.sortListByProfHelper} className="align-middle">
                <div className="table-header">
                  Proficiency
                  <MDBIcon className="ml-1" icon="sort" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.listOfSkills.map((_, index) => (
              <tr className="">
                <td className="img-col align-middle">
                  <img
                    className="img-style"
                    src={this.state.listOfSkills[index].imgUrl}
                  />
                </td>
                <td className="align-middle table-item" key={index}>
                  {this.state.listOfSkills[index].skill}
                </td>
                <td className="table-item" key={index}>
                  {this.state.listOfSkills[index].type}
                </td>
                <td className="table-item" key={index}>
                  {this.state.listOfSkills[index].yrsOfExp}
                </td>
                <td key={index}>
                  <ProgressBar
                    variant="dark"
                    now={this.state.listOfSkills[index].proficiency}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
export default SkillTable;
