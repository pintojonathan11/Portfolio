import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText
} from "mdbreact";

import Divider from "@material-ui/core/Divider";

function SpecificExperience(props) {
  var image = props.image;
  var company = props.company;
  var position = props.position;
  var date = props.date;
  var description = props.description;

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
          <MDBCardTitle className="description ml-3 mr-3">
            {description}
          </MDBCardTitle>
          <MDBBtn color="mdb-color">Learn More</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}

export default SpecificExperience;
