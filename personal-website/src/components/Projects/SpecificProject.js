import React from "react";
import {
  MDBBtn,
  MDBView,
  MDBListGroupItem,
  MDBMask,
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
import { Modal, Button, Dropdown, ListGroup, Collapse } from "react-bootstrap";

function ProjectModal(props) {
  console.log(props);
  const title = props.title;
  const extraInfo = props.extraInfo;
  const techUsed = props.techUsed;
  const github = props.github;
  const link = props.link;

  const [open0, setOpen0] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const listDescriptionItems = extraInfo.map(str => (
    <ul>
      {" "}
      <li className="li">{str}</li>{" "}
    </ul>
  ));

  const techGroup0Header =
    techUsed != null ? (
      <ListGroup.Item
        className="card-text-title card-text-description-title"
        onClick={() => setOpen0(!open0)}
      >
        <MDBRow>
          <MDBCol>{techUsed[0][0]}</MDBCol>
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
    techUsed != null && techUsed.length >= 2 ? (
      <ListGroup.Item
        className="card-text-title card-text-description-title"
        onClick={() => setOpen1(!open1)}
      >
        <MDBRow>
          <MDBCol>{techUsed[1][0]}</MDBCol>
          <div className="d-flex justify-content-end mr-3">
            <MDBIcon
              className={open1 ? "rotate" : "rotate-back"}
              icon="arrow-down"
            />
          </div>
        </MDBRow>
      </ListGroup.Item>
    ) : null;

  const techGroup2Header =
    techUsed != null && techUsed.length >= 3 ? (
      <ListGroup.Item
        className="card-text-title card-text-description-title"
        onClick={() => setOpen2(!open2)}
      >
        <MDBRow>
          <MDBCol>{techUsed[2][0]}</MDBCol>
          <div className="d-flex justify-content-end mr-3">
            <MDBIcon
              className={open2 ? "rotate" : "rotate-back"}
              icon="arrow-down"
            />
          </div>
        </MDBRow>
      </ListGroup.Item>
    ) : null;

  const techGroup0 =
    techUsed != null
      ? techUsed[0].slice(1).map(str => <ListGroup.Item>{str}</ListGroup.Item>)
      : null;

  const techGroup1 =
    techUsed != null && techUsed.length >= 2
      ? techUsed[1].slice(1).map(str => <ListGroup.Item>{str}</ListGroup.Item>)
      : null;

  const techGroup2 =
    techUsed != null && techUsed.length >= 3
      ? techUsed[2].slice(1).map(str => <ListGroup.Item>{str}</ListGroup.Item>)
      : null;

  return (
    <div>
      <Modal
        {...props}
        size="md"
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
                  <div className="mb-1">
                    {techGroup2Header != null && techGroup2Header}
                    {techGroup2 != null && (
                      <MDBCollapse id="basicCollapse" isOpen={open2}>
                        {techGroup2}
                      </MDBCollapse>
                    )}
                  </div>
                </ListGroup>
              </div>
            </Modal.Body>
          </div>
        )}
        {github != null && (
          <div>
            <Dropdown.Divider />
            <Modal.Body>
              <h4 className="mb-3 card-text-description-title">Github Link</h4>
              <a href={github} target="_blank">
                {github}
              </a>
            </Modal.Body>
          </div>
        )}
        {link != null && (
          <div>
            <Dropdown.Divider />
            <Modal.Body>
              <h4 className="mb-3 card-text-description-title">Try it out</h4>
              <a href={link} target="_blank">
                {link}
              </a>
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

function SpecificProject(props) {
  console.log(props);
  var title = props.title;
  var date = props.date;
  var description = props.description;

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <MDBView
        hover
        onClick={() => {
          setModalShow(true);
        }}
      >
        <MDBListGroupItem hover>
          <div className="d-flex justify-content-center">
            <h5 className="mb-1 mt-1">{title}</h5>
          </div>
          <small className="project-description">{date}</small>
          <p className="mb-1 mt-2 project-description">{description}</p>
        </MDBListGroupItem>
        <MDBMask className="flex-center" overlay="blue-slight"></MDBMask>
      </MDBView>

      <ProjectModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        {...props}
      />
    </div>
  );
}

export default SpecificProject;
