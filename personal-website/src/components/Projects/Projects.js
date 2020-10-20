import React from "react";
import "./Projects.css";
import { Container, Row, Col, Table } from "react-bootstrap";
import {
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardGroup,
  MDBBtn,
  MDBMask,
  MDBView,
  MDBListGroup,
  MDBListGroupItem
} from "mdbreact";
import SpecificProject from "./SpecificProject";

function Projects() {
  const carbon = {
    title: "My Carbon Footprint",
    date: "(October 2020 - November 2020)",
    description:
      "View your carbon footprint through charts and graphs by recording your carbon lifestyle",
    extraInfo: [
      "Mobile application that allows users to log in the amount of carbon they have saved",
      "Provides data in the form of graphs and charts to users",
      "Designed to encourage users to reduce their personal carbon emission"
    ],
    techUsed: [["Frontend", "Flutter", "Dart"]],
    github: "https://github.com/pintojonathan11/MyCarbonFootprint"
  };

  const mood = {
    title: "Mood Music",
    date: "(Hack RU Fall 2018)",
    description:
      "Play a song based on the weather of your location using OpenWeather API and Soundcloud API",
    extraInfo: [
      "Android application that provides a song based on the weather of your location",
      "Uses OpenWeather API to obtain the weather of your location",
      "Uses Soundcloud API to play a song"
    ],
    techUsed: [["Frontend", "Android", "Java"]],
    github: "https://github.com/advil64/MoodMusic"
  };

  const morse = {
    title: "Morse My Code",
    date: "(Summer 2018)",
    description:
      "Translate Morse Code to Text and Text to Morse Code featuring voice recognition",
    extraInfo: [
      "Android application that can convert morse code to text and vice versa",
      "Users can use the voice recognition feature to quickly figure out the morse cose translation",
      "Features an interactive chart that plays the sound of the morse code translation"
    ],
    techUsed: [["Frontend", "Android", "Java"]],
    github: "https://github.com/pintojonathan11/Morse-My-Code",
    link:
      "https://play.google.com/store/apps/details?id=com.morsemycode.jonathan.morsecodetranslator"
  };

  const chess = {
    title: "Customizable Chess",
    date: "(September 2020 - December 2020)",
    description:
      "Sign up and play a customizable version of chess with friends online",
    extraInfo: [
      "React web-app that allows users to play chess online on customized boards",
      "Users can customize their chess board and submit their board for review",
      "Users login, sign up with email, or sign up with google",
      "Some users are assigned admin roles, which allow them to view all users, delete users, or give admin privilleges to another user. Admins can also approve user submitted boards",
      "Users can host private or public chess games which can be joined by anyone online. The host gets to choose numerous options for the chess game, including the board type",
      "Made for a Software Engineering class with a team of 4 people"
    ],
    techUsed: [
      ["Frontend", "React", "CSS", "HTML", "Bootstrap", "Material"],
      ["Backend", "Firebase", "Express", "Socket.js"]
    ],
    github: "In Development: Github repo will soon be public",
    link: "https://customizablechess.web.app/"
  };

  const where = {
    title: "Where RU",
    date: "(February 2020 - Present)",
    description:
      "Optimizes Rutgers commute throughout campus using the Google Maps API and a real-time bus API.",
    extraInfo: [
      "Mobile application that gives users the fastest commute path to travel within Rutgers New Brunswick",
      "Uses Google Maps API to find walking path from one bus stop to another",
      "Uses the TransLoc real-time bus API to find all Rutgers bus schedules, paths, and bus stops",
      "Will integrate Image Recognition to read student course schedule to optimize commute timings",
      "This project was initiated at Fall 2019 HackRU with a team of 4 people, but was continued afterwards"
    ],
    techUsed: [
      ["Frontend", "Flutter", "Dart"],
      ["Backend", "Python", "Express"]
    ],
    github: "In Development: Github repo will soon be public"
  };

  const home = {
    title: "RU Home",
    date: "(Hack NJIT Fall 2019 Winner)",
    description:
      "A smart doorbell that alerts the homeowner via a text message of who is at the front door.",
    extraInfo: [
      "Mobile application that allows users to upload their images to Firebase, which will then be used to train an Azure Facial Recognition application",
      "We also have a button in front of a camera. When the button is clicked, it takes a pictures of the person in front of the camera and checks if the facial recognition app recognizes the face",
      "If the application recognizes the face, Twilio then sends the owner of the home alerting them that someone they know is at their front door with a picture of their face",
      "If the application does not recognize the person, Twilio sends an intruder alert message with a picture of their face",
      "We successfully built this application during a 24 NJIT Hackathon and won the Best Use of Twilio Award"
    ],
    techUsed: [
      ["Frontend", "Flutter", "Dart"],
      ["Backend", "Firebase", "Twilio"],
      ["AI", "Python", "Azure"]
    ],
    github: "https://github.com/pintojonathan11/RU-Home"
  };

  const handwriting = {
    title: "Handwriting Recognition",
    date: "(February 2020 - May 2020)",
    description:
      "Classifies handwritten digits and letters trained from the EMNIST ByClass dataset using TensorFlow.",
    extraInfo: [
      "Tkinter application that allows users to write on a blank canvas and will then return the predicted letter or number",
      "Trained on the EMNIST ByClass dataset",
      "Trained using TensorFlow's Neural Network libraries"
    ],
    techUsed: [
      ["AI", "Python", "TensorFlow", "NumPy", "Matplotlib"],
      ["Frontend", "Tkinter"]
    ],
    github: "https://github.com/pintojonathan11/Handwriting-Recognition"
  };

  const grey = {
    title: "Greyscale to Color",
    date: "(April 2020 - May 2020)",
    description:
      "Converts a greyscale image to a colored image using self-made k-means, KNN, and neural network algorithms",
    extraInfo: [
      "Convert greyscale images to colored images",
      "Using k-means to find most common colors in an image",
      "Using 2 methods to convert to colored images: KNN algorithm and neural networks",
      "All algorithms were made manually using Python and NumPy",
      "Made for a Artificial Intelligence class with a team of 3 people"
    ],
    techUsed: [["AI", "Python", "NumPy", "Matplotlib"]]
  };

  const minesweeper = {
    title: "Automatic Minesweeper",
    date: "(February 2020 - April 2020)",
    description:
      "A Minesweeper AI that has a high chance of winning any Minesweeper game",
    extraInfo: [
      "Creates a Minesweeper games for a user and allows the user to find the optimal move",
      "Optimal move is calculated through numerous evaluation metrics by minimizing risk and cost",
      "Made for a Artificial Intelligence class with a team of 3 people"
    ],
    techUsed: [["AI", "Python", "NumPy", "Matplotlib"]]
  };

  const [carbonShow, setCarbonShow] = React.useState(false);
  const [moodShow, setMoodShow] = React.useState(false);
  const [morseShow, setMorseShow] = React.useState(false);
  const [chessShow, setChessShow] = React.useState(false);
  const [whereRUShow, setWhereRUShow] = React.useState(false);
  const [homeShow, setHomeShow] = React.useState(false);
  const [handwritingShow, setHandwritingShow] = React.useState(false);
  const [greyShow, setGreyShow] = React.useState(false);
  const [minesweeperShow, setMinesweeperShow] = React.useState(false);

  return (
    <div id="projects">
      <div className="projects-head-title mt-5 mb-5">Projects</div>
      <Container fluid className="mb-5">
        <Row className="mt-3 d-flex justify-content-center">
          <Col
            lg="3"
            md="8"
            xs="10"
            className="mt-3 ml-1 mr-1 d-flex align-items-stretch"
          >
            <MDBCard>
              <MDBView hover>
                <MDBCardImage
                  src="app_dev_banner.png"
                  alt="MDBCard image cap"
                  top
                />
                <MDBMask className="flex-center" overlay="blue-strong">
                  <p className="white-text project-hover-title">
                    App <br />
                    Development
                  </p>
                </MDBMask>
              </MDBView>

              <MDBCardBody>
                <MDBCardTitle tag="h5">App Development Projects</MDBCardTitle>
                <hr />
                <MDBListGroup>
                  <SpecificProject
                    title={carbon.title}
                    date={carbon.date}
                    description={carbon.description}
                    extraInfo={carbon.extraInfo}
                    techUsed={carbon.techUsed}
                    github={carbon.github}
                  />
                  <SpecificProject
                    title={mood.title}
                    date={mood.date}
                    description={mood.description}
                    extraInfo={mood.extraInfo}
                    techUsed={mood.techUsed}
                    github={mood.github}
                  />
                  <SpecificProject
                    title={morse.title}
                    date={morse.date}
                    description={morse.description}
                    extraInfo={morse.extraInfo}
                    techUsed={morse.techUsed}
                    github={morse.github}
                    link={morse.link}
                  />
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </Col>
          <Col
            lg="3"
            md="8"
            xs="10"
            className="mt-3 ml-1 mr-1 d-flex align-items-stretch"
          >
            <MDBCard>
              <MDBView hover>
                <MDBCardImage
                  src="fullstack_banner.jpg"
                  alt="MDBCard image cap"
                  top
                />
                <MDBMask className="flex-center" overlay="indigo-strong">
                  <p className="white-text project-hover-title">
                    Full-Stack <br />
                    Development
                  </p>
                </MDBMask>
              </MDBView>
              <MDBCardBody>
                <MDBCardTitle tag="h5">
                  Full-Stack Development Projects
                </MDBCardTitle>
                <hr />
                <MDBListGroup>
                  <SpecificProject
                    title={chess.title}
                    date={chess.date}
                    description={chess.description}
                    extraInfo={chess.extraInfo}
                    techUsed={chess.techUsed}
                    // github={chess.github}
                    link={chess.link}
                  />
                  <SpecificProject
                    title={where.title}
                    date={where.date}
                    description={where.description}
                    extraInfo={where.extraInfo}
                    techUsed={where.techUsed}
                    // github={where.github}
                  />
                  <SpecificProject
                    title={home.title}
                    date={home.date}
                    description={home.description}
                    extraInfo={home.extraInfo}
                    techUsed={home.techUsed}
                    github={home.github}
                  />
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </Col>
          <Col
            lg="3"
            md="8"
            xs="10"
            className="mt-3 ml-1 mr-1 d-flex align-items-stretch"
          >
            <MDBCard>
              <MDBView hover>
                <MDBCardImage src="ai_banner.jpg" alt="MDBCard image cap" top />
                <MDBMask className="flex-center" overlay="cyan-strong">
                  <p className="white-text project-hover-title">
                    Artificial <br />
                    Intelligence
                  </p>
                </MDBMask>
              </MDBView>
              <MDBCardBody>
                <MDBCardTitle tag="h5">
                  Artificial Intelligence Projects
                </MDBCardTitle>
                <hr />
                <MDBListGroup>
                  <SpecificProject
                    title={handwriting.title}
                    date={handwriting.date}
                    description={handwriting.description}
                    extraInfo={handwriting.extraInfo}
                    techUsed={handwriting.techUsed}
                    github={handwriting.github}
                  />
                  <SpecificProject
                    title={grey.title}
                    date={grey.date}
                    description={grey.description}
                    extraInfo={grey.extraInfo}
                    techUsed={grey.techUsed}
                    github={grey.github}
                  />
                  <SpecificProject
                    title={minesweeper.title}
                    date={minesweeper.date}
                    description={minesweeper.description}
                    extraInfo={minesweeper.extraInfo}
                    techUsed={minesweeper.techUsed}
                    github={minesweeper.github}
                  />
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
