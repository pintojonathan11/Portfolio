import React from "react";
import { Link } from "react-scroll";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

import "./NavigationBar.css";

function NavigationBar() {
  return (
    <div>
      <Router>
        <MDBNavbar
          scrolling
          transparent
          expand="xs"
          fixed="top"
          color="unique-color-dark"
        >
          <MDBNavbarBrand>
            <strong className="white-text">
              <Link
                activeClass=""
                to="main"
                spy={true}
                smooth={true}
                duration={500}
              >
                Jonathan Pinto
              </Link>
            </strong>
          </MDBNavbarBrand>
          <MDBCollapse id="navbarCollapse3" navbar>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink
                  className="waves-effect waves-light text-info"
                  to=""
                >
                  <MDBIcon icon="user" className="mr-1" />
                  <Link
                    activeClass=""
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={1000}
                  >
                    About
                  </Link>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  className="waves-effect waves-light text-info"
                  to=""
                >
                  <MDBIcon icon="briefcase" className="mr-1" />
                  <Link
                    activeClass=""
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={1000}
                  >
                    Experiences
                  </Link>
                </MDBNavLink>
              </MDBNavItem>

              <MDBNavItem>
                <MDBNavLink
                  className="waves-effect waves-light text-info"
                  to=""
                >
                  <MDBIcon icon="code" className="mr-1" />
                  <Link
                    activeClass=""
                    to="skills"
                    spy={true}
                    smooth={true}
                    // offset={0}
                    duration={1000}
                  >
                    Skills
                  </Link>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  className="waves-effect waves-light text-info"
                  to=""
                >
                  <MDBIcon icon="desktop" className="mr-1" />
                  <Link
                    activeClass=""
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={1000}
                  >
                    Projects
                  </Link>
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </Router>
    </div>
  );
}

export default NavigationBar;
