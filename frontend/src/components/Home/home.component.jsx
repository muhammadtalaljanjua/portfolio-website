import React from "react";
import { NavLink } from "react-router-dom";
import "./home.styles.css";

const Home = () => {
  return (
    <>
      <section className="container-fluid main-box">
        <div className="row align-items-center">
          <div className="col-md-6 col-12 order-2 order-md-1 column-1">
            <h1 className="title-heading">
              Hi, I'm <span className="colored-title-heading">Muhammad Talal</span>
            </h1>
            <h4 className="sub-heading">MERN Stack Developer | WordPress Developer</h4>
            <p className="summary">
              Experienced Front-End Developer proficient in HTML, CSS, and JavaScript, with
              expertise in WordPress, React, Express JS, MongoDB, MySQL, and Git/Github. Let's
              connect and discuss how I can add value to your team.
            </p>
            <div className="btn-group">
              <NavLink to="contact">Contact Me</NavLink>
              <NavLink to="projects">See Projects</NavLink>
            </div>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/talal-janjua" target="_blank">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://www.facebook.com/talal.janjua.2000" target="_blank">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://x.com/talal_janjua_" target="_blank">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="https://github.com/muhammadtalaljanjua" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.instagram.com/talal_janjua/" target="_blank">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://wa.me/923211941854" target="_blank">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="mailto:hafiztalalaqeel1@gmail.com" target="_blank">
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
