import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookReader } from "@fortawesome/free-solid-svg-icons";
import logo from "../img/logo.png";
const Header = (props) => {
  function formatCount() {
    return props.count ? props.count : "";
  }
  return (
    <React.Fragment>
      <header className="fixed-top">
        <Container>
          <Navbar expand="lg">
            <Navbar.Brand href="#home">
              <img src={logo} alt="School Logo" className="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link className="my-link" href="#home">
                  Home
                </Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                <Nav.Link href="#account">Account</Nav.Link>
                <Nav.Link href="#course">
                  <FontAwesomeIcon icon={faBookReader} />
                  <sub className="ml-1">{formatCount()}</sub>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </header>
    </React.Fragment>
  );
};

export default Header;
