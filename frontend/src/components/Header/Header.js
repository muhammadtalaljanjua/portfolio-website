import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./Styles.css";

const Header = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" className="height">
        <Container className="justify-content-center">
          <div>
            <Nav>
              <NavLink className="links" to="/">
                Home
              </NavLink>
              <NavLink className="links" to="playlist">
                Projects
              </NavLink>
              <NavLink className="links" to="about">
                About
              </NavLink>
              <NavLink className="links" to="contact">
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
