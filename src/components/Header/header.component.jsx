import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.styles.css";

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <div>
          <h1 className="logo-heading">
            Muhammad<span className="logo-colored-heading"> Talal</span>
          </h1>
        </div>
        <nav>
          <ul className={`nav-link ${isOpen ? "active" : ""}`}>
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
          </ul>
          <div className="hamburger" onClick={toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>

      {/* <Navbar sticky="top" bg="light" data-bs-theme="light" className="header">
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
      </Navbar> */}
    </>
  );
};

export default Header;
