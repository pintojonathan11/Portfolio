import React from "react";
import "./Projects.css";
import { Container, Row, Col, Modal, Dropdown } from "react-bootstrap";

function ProjectModal(props) {
  const title = props.title;
  const description = props.description;
  const techUsed = props.techUsed;
  const github = props.github;
  const link = props.link;

  const listDescriptionItems = description.map(str => (
    <ul>
      {" "}
      <li className="li">{str}</li>{" "}
    </ul>
  ));

  const listTechItems = techUsed.map(str => (
    <ul>
      {" "}
      <li className="li">{str}</li>{" "}
    </ul>
  ));

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <div className="title card-text-title">{title}</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 className="mb-3 card-text-description-title">Description</h4>
          <div>{listDescriptionItems}</div>
        </Modal.Body>
        {techUsed != null && (
          <div>
            <Dropdown.Divider />
            <Modal.Body>
              <h4 className="mb-3 card-text-description-title">
                Technologies Used
              </h4>
              <div>{listTechItems}</div>
            </Modal.Body>
          </div>
        )}
        {github != null && (
          <div>
            <Dropdown.Divider />
            <Modal.Body>
              <h4 className="mb-3 card-text-description-title">Github Link</h4>
              <div>{github}</div>
            </Modal.Body>
          </div>
        )}
        {link != null && (
          <div>
            <Dropdown.Divider />
            <Modal.Body>
              <h4 className="mb-3 card-text-description-title">Try it out</h4>
              <div>{link}</div>
            </Modal.Body>
          </div>
        )}
        <Modal.Footer>
          <MDBBtn color="mdb-color" onClick={props.onHide}>
            Close
          </MDBBtn>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ProjectModal;
