import React from "react";
import { NavLink } from "react-router-dom";
import "./home.styles.css";

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <section className="container-fluid main-box">
        <div className="row align-items-center">
          <div className="col-md-6 col-12 order-2 order-md-1 column-1">
            <h1 className="my-heading">
              Hi, I'm <span className="my-colored-heading">Muhammad Talal</span>
            </h1>
            <h4 className="sub-heading">MERN Stack Developer | WordPress Developer</h4>
            <p className="summary">
              Experienced Front-End Developer proficient in HTML, CSS, and JavaScript, with
              expertise in WordPress, React, Express JS, MongoDB, MySQL, and Git/Github. Let's
              connect and discuss how I can add value to your team.
            </p>
            <div className="btn-group">
              <NavLink onClick={scrollToTop} to="contact">
                Get In Touch
              </NavLink>
              <NavLink onClick={scrollToTop} to="projects">
                Explore My Work
              </NavLink>
            </div>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/talal-janjua" rel="noreferrer" target="_blank">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://www.facebook.com/talal.janjua.2000" rel="noreferrer" target="_blank">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://x.com/talal_janjua_" rel="noreferrer" target="_blank">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="https://github.com/muhammadtalaljanjua" rel="noreferrer" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.instagram.com/talal_janjua/" rel="noreferrer" target="_blank">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://wa.me/923211941854" rel="noreferrer" target="_blank">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="mailto:hafiztalalaqeel1@gmail.com" rel="noreferrer" target="_blank">
                <i className="fa-brands fa-google"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-12 order-1 order-md-2 column-2"></div>
        </div>
      </section>
    </>
  );
};

export default Home;
