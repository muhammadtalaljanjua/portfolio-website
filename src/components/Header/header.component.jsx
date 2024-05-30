import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./header.styles.css";

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Navbar sticky="top" bg="light" data-bs-theme="light" className="header">
        <Container className="justify-content-center">
          <div>
            <Nav>
              <NavLink onClick={scrollToTop} className="links" to="/">
                Home
              </NavLink>
              <NavLink onClick={scrollToTop} className="links" to="projects">
                Projects
              </NavLink>
              <NavLink onClick={scrollToTop} className="links" to="about">
                About
              </NavLink>
              <NavLink onClick={scrollToTop} className="links" to="contact">
                Contact
              </NavLink>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
