import React from "react";
import "./home.styles.css";

const Home = () => {
  return (
    <>
      <section class="container-fluid main-box">
        <div class="row align-items-center">
          <div className="col-md-6 col-12 order-2 order-md-1">
            <h1 className="name-heading">
              Hi, I'm <span className="colored-name-heading">Muhammad Talal</span>
            </h1>
            <h4 className="sub-heading">MERN Stack Developer | WordPress Developer</h4>
            <p className="summary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A esse totam provident
              voluptas similique. Impedit incidunt atque recusandae rem quam.
            </p>
            <div class="btn-group">
              <a href="#">Hire Me</a>
              <a href="#">See Projects</a>
            </div>
            <div class="social-icons">
              <a href="#">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-12 order-1 order-md-2 bg"></div>
        </div>
      </section>
    </>
  );
};

export default Home;
