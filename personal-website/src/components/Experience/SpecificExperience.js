import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCollapse,
  MDBCol,
  MDBRow,
  MDBIcon
} from "mdbreact";

import Divider from "@material-ui/core/Divider";
import { Modal, Button, Dropdown, ListGroup, Collapse } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  var company = props.company;
  var position = props.position;
  var languagesUsed = props.languagesUsed;
  var extraInfo = props.extraInfo;

  const [open0, setOpen0] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);

  const techGroup0Header =
    languagesUsed != null ? (
      <ListGroup.Item
        className="card-text-title card-text-description-title"
        onClick={() => setOpen0(!open0)}
      >
        <MDBRow>
          <MDBCol>{languagesUsed[0][0]}</MDBCol>
          <div className="d-flex justify-content-end mr-3">
            <MDBIcon
              className={open0 ? "rotate" : "rotate-back"}
              icon="arrow-down"
            />
          </div>
        </MDBRow>
      </ListGroup.Item>
    ) : null;

  const techGroup1Header =
    languagesUsed != null && languagesUsed.length >= 2 ? (
      <ListGroup.Item
        className="card-text-title card-text-description-title"
        onClick={() => setOpen1(!open1)}
      >
        <MDBRow>
          <MDBCol>{languagesUsed[1][0]}</MDBCol>
          <div className="d-flex justify-content-end mr-3">
            <MDBIcon
              className={open1 ? "rotate" : "rotate-back"}
              icon="arrow-down"
            />
          </div>
        </MDBRow>
      </ListGroup.Item>
    ) : null;

  const techGroup0 =
    languagesUsed != null
      ? languagesUsed[0]
          .slice(1)
          .map(str => <ListGroup.Item>{str}</ListGroup.Item>)
      : null;

  const techGroup1 =
    languagesUsed != null && languagesUsed.length >= 2
      ? languagesUsed[1]
          .slice(1)
          .map(str => <ListGroup.Item>{str}</ListGroup.Item>)
      : null;

  const listDescriptionItems = extraInfo.map(str => (
    <ul>
      {" "}
      <li className="li">{str}</li>{" "}
    </ul>
  ));

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div className="title card-text-title">
            {position} at {company}
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className="mb-3 card-text-description-title">Description</h4>
        <div>{listDescriptionItems}</div>
      </Modal.Body>
      {languagesUsed != null && (
        <div>
          <Dropdown.Divider />
          <Modal.Body>
            <h4 className="mb-3 card-text-description-title">
              Technologies Used
            </h4>
            <div>
              <ListGroup>
                <div className="mb-3">
                  {techGroup0Header != null && techGroup0Header}
                  {techGroup0 != null && (
                    <MDBCollapse id="basicCollapse" isOpen={open0}>
                      {techGroup0}
                    </MDBCollapse>
                  )}
                </div>
                <div className="mb-3">
                  {techGroup1Header != null && techGroup1Header}
                  {techGroup1 != null && (
                    <MDBCollapse id="basicCollapse" isOpen={open1}>
                      {techGroup1}
                    </MDBCollapse>
                  )}
                </div>
              </ListGroup>
            </div>
          </Modal.Body>
        </div>
      )}
      <Modal.Footer>
        <MDBBtn color="mdb-color" onClick={props.onHide}>
          Close
        </MDBBtn>
      </Modal.Footer>
    </Modal>
  );
}

function SpecificExperience(props) {
  var image = props.image;
  var company = props.company;
  var position = props.position;
  var date = props.date;
  var description = props.description;
  var languagesUsed = props.languagesUsed;
  var extraInfo = props.extraInfo;

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="">
      <MDBCard className="hoverable">
        <div className="mt-3 mb-2">
          <img className="card-image" src={image} waves />
        </div>
        <Divider variant="middle" />
        <MDBCardBody>
          <MDBCardTitle className="company">{company}</MDBCardTitle>

          <MDBCardTitle className="position">{position}</MDBCardTitle>
          <MDBCardTitle className="date">{date}</MDBCardTitle>
          <MDBCardTitle className="description ml-3 mr-3 mb-3">
            {description}
          </MDBCardTitle>
          {extraInfo != null && (
            <MDBBtn
              className="mb-3"
              color="mdb-color"
              onClick={() => setModalShow(true)}
            >
              Learn More
            </MDBBtn>
          )}
        </MDBCardBody>
      </MDBCard>
      {extraInfo != null && (
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          company={company}
          position={position}
          languagesUsed={languagesUsed}
          extraInfo={extraInfo}
        />
      )}
    </div>
  );
}

export default SpecificExperience;
