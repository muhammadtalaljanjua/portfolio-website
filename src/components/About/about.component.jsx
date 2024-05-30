import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./about.styles.css";

const About = () => {
  return (
    <>
      <section className="container-fluid about-container">
        <div className="row text-center">
          <div className="col-12">
            <img className="codeImage" src={require("./about.gif")} alt="Code GIF" />
            <h1 className="about-heading">
              About <span className="colored-projects-heading">Myself</span>
            </h1>
            <p className="about-text">
              I believe in the power of web development to tell stories, engage users, and create
              meaningful online experiences.
            </p>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-6 col-12 order-2 order-md-1 column-1">
            <h4 className="title-heading">
              <span className="colored-title-heading">01. </span>Education
            </h4>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header className="acc-title">Bachelors</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Intermediate</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Matriculation</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <h4 className="title-heading">
              <span className="colored-title-heading">02. </span>Work Experience
            </h4>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Node Tech Solutions</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Sentax Lab</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Fiverr</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Upwork</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

          <div className="col-md-6 col-12 order-1 order-md-2 image-container"></div>
        </div>
        <div className="row text-center">
          <div className="col-12">
            <h4 className="title-heading">
              <span className="colored-title-heading">03. </span>Skills
            </h4>
            <div className="row">
              <div className="main-div">
                <div className="outer-box">
                  <div className="collection">
                    <img className="logos" src={require("./html.png")} alt="Logo 1" />
                    <div className="inner-heading">HTML</div>
                  </div>
                  <div className="collection">
                    <img className="logos" src={require("./css.png")} alt="Logo 2" />
                    <div className="inner-heading">CSS</div>
                  </div>
                  <div className="collection">
                    <img className="logos" src={require("./javascript.png")} alt="Logo 3" />
                    <div className="inner-heading">JavaScript</div>
                  </div>
                  <div className="collection">
                    <img className="logos" src={require("./wordpress.png")} alt="Logo 4" />
                    <div className="inner-heading">WordPress</div>
                  </div>
                  <div className="collection">
                    <img className="logos" src={require("./react.png")} alt="Logo 5" />
                    <div className="inner-heading">React</div>
                  </div>
                  <div className="collection">
                    <img className="logos" src={require("./node-js.png")} alt="Logo 6" />
                    <div className="inner-heading">Node JS</div>
                  </div>
                  <div className="collection">
                    <img className="logos" src={require("./express.webp")} alt="Logo 7" />
                    <div className="inner-heading">Express</div>
                  </div>
                  <div className="collection">
                    <img className="logos" src={require("./mongodb.png")} alt="Logo 8" />
                    <div className="inner-heading">MongoDB</div>
                  </div>
                  <div className="collection">
                    <img className="logos" src={require("./mysql.png")} alt="Logo 9" />
                    <div className="inner-heading">MySQL</div>
                  </div>
                  <div className="collection">
                    <img className="logos" src={require("./canva.png")} alt="Logo 10" />
                    <div className="inner-heading">Canva</div>
                  </div>
                  <div className="collection">
                    <img className="logos" src={require("./bootstrap.png")} alt="Logo 11" />
                    <div className="inner-heading">Bootstrap</div>
                  </div>
                  <div className="collection">
                    <img className="logos" src={require("./tailwind.png")} alt="Logo 12" />
                    <div className="inner-heading">Tailwind</div>
                  </div>
                  <div className="collection">
                    <img className="logos" src={require("./github.png")} alt="Logo 13" />
                    <div className="inner-heading">Git/Github</div>
                  </div>
                  <div className="collection">
                    <img className="logos" src={require("./woocommerce.png")} alt="Logo 14" />
                    <div className="inner-heading">WooCommerce</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
