import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./about.styles.css";

const About = () => {
  return (
    <>
      <section className="container-fluid about-container">
        <div className="row text-center">
          <div className="col-12">
            <img
              className="codeImage"
              src={`${process.env.PUBLIC_URL}/assets/about.gif`}
              alt="Code GIF"
            />
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
                  <h3 className="info-title">
                    <span className="info-color-title">01. </span>Program:
                  </h3>
                  <h5 className="info-detail">Bachelors in Computer Science</h5>
                  <h3 className="info-title">
                    <span className="info-color-title">02. </span>University:
                  </h3>
                  <h5 className="info-detail">University of Gujrat, Gujrat, Pakistan</h5>
                  <h3 className="info-title">
                    <span className="info-color-title">03. </span>Duration:
                  </h3>
                  <h5 className="info-detail">September 2019 - September 2023</h5>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Intermediate</Accordion.Header>
                <Accordion.Body>
                  <h3 className="info-title">
                    <span className="info-color-title">01. </span>Program:
                  </h3>
                  <h5 className="info-detail">Pre-Engineering</h5>
                  <h3 className="info-title">
                    <span className="info-color-title">02. </span>College:
                  </h3>
                  <h5 className="info-detail">Punjab College of Science, Gujranwala, Pakistan</h5>
                  <h3 className="info-title">
                    <span className="info-color-title">03. </span>Duration:
                  </h3>
                  <h5 className="info-detail">August 2017 - May 2019</h5>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Matriculation</Accordion.Header>
                <Accordion.Body>
                  <h3 className="info-title">
                    <span className="info-color-title">01. </span>Group:
                  </h3>
                  <h5 className="info-detail">Biology</h5>
                  <h3 className="info-title">
                    <span className="info-color-title">02. </span>School:
                  </h3>
                  <h5 className="info-detail">Allied School, Gujranwala, Pakistan</h5>
                  <h3 className="info-title">
                    <span className="info-color-title">03. </span>Duration:
                  </h3>
                  <h5 className="info-detail">March 2015 - April 2017</h5>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <h4 className="title-heading">
              <span className="colored-title-heading">02. </span>Work Experience
            </h4>

            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header className="acc-title">Node Tech Solutions</Accordion.Header>
                <Accordion.Body>
                  <h3 className="info-title">
                    <span className="info-color-title">01. </span>Job Role:
                  </h3>
                  <h5 className="info-detail">WordPress & Frontend Developer</h5>
                  <h3 className="info-title">
                    <span className="info-color-title">02. </span>Job Description:
                  </h3>
                  <h5 className="info-detail">
                    <ul>
                      <li className="list-style">
                        Implemented responsive design principles to ensure optimal viewing
                        experience on various devices.
                      </li>
                      <li className="list-style">
                        Developed custom WordPress websites from scratch based on client
                        requirements & design mockups.
                      </li>
                      <li className="list-style">
                        Provided ongoing support and maintenance including troubleshooting issues &
                        implementing updates to ensure optimal functionality.
                      </li>
                    </ul>
                  </h5>
                  <h3 className="info-title">
                    <span className="info-color-title">03. </span>Employment Period:
                  </h3>
                  <h5 className="info-detail">March 2022 - October 2022</h5>
                  <h3 className="info-title">
                    <span className="info-color-title">04. </span>Company Location:
                  </h3>
                  <h5 className="info-detail">Jinnah Road, Gujranwala</h5>
                  <h3 className="info-title">
                    <span className="info-color-title">05. </span>Company Website:
                  </h3>
                  <h5 className="info-detail">
                    <a className="info-link" href="https://nodetechsolutions.com/">
                      https://nodetechsolutions.com
                    </a>
                  </h5>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Sentax Lab</Accordion.Header>
                <Accordion.Body>
                  <h3 className="info-title">
                    <span className="info-color-title">01. </span>Job Role:
                  </h3>
                  <h5 className="info-detail">WordPress Developer</h5>
                  <h3 className="info-title">
                    <span className="info-color-title">02. </span>Job Description:
                  </h3>
                  <h5 className="info-detail">
                    <ul>
                      <li className="list-style">
                        Managed multiple WordPress websites, including updates, backups, and
                        maintenance tasks.
                      </li>
                      <li className="list-style">
                        Designed and developed custom WordPress websites to meet client requirements
                        and specifications.
                      </li>
                    </ul>
                  </h5>
                  <h3 className="info-title">
                    <span className="info-color-title">03. </span>Employment Period:
                  </h3>
                  <h5 className="info-detail">September 2021 - February 2022</h5>
                  <h3 className="info-title">
                    <span className="info-color-title">04. </span>Company Location:
                  </h3>
                  <h5 className="info-detail">Trade Center, GT Road, Gujranwala</h5>
                  <h3 className="info-title">
                    <span className="info-color-title">05. </span>Company Website:
                  </h3>
                  <h5 className="info-detail">
                    <a className="info-link" href="http://www.sentaxlab.net/">
                      http://www.sentaxlab.net
                    </a>
                  </h5>
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
                    <img
                      className="logos"
                      src={`${process.env.PUBLIC_URL}/assets/html.webp`}
                      alt="Logo 1"
                    />
                    <div className="inner-heading">HTML</div>
                  </div>
                  <div className="collection">
                    <img
                      className="logos"
                      src={`${process.env.PUBLIC_URL}/assets/css.webp`}
                      alt="Logo 2"
                    />
                    <div className="inner-heading">CSS</div>
                  </div>
                  <div className="collection">
                    <img
                      className="logos"
                      src={`${process.env.PUBLIC_URL}/assets/javascript.webp`}
                      alt="Logo 3"
                    />
                    <div className="inner-heading">JavaScript</div>
                  </div>
                  <div className="collection">
                    <img
                      className="logos"
                      src={`${process.env.PUBLIC_URL}/assets/wordpress.webp`}
                      alt="Logo 4"
                    />
                    <div className="inner-heading">WordPress</div>
                  </div>
                  <div className="collection">
                    <img
                      className="logos"
                      src={`${process.env.PUBLIC_URL}/assets/react.webp`}
                      alt="Logo 5"
                    />
                    <div className="inner-heading">React</div>
                  </div>
                  <div className="collection">
                    <img
                      className="logos"
                      src={`${process.env.PUBLIC_URL}/assets/node-js.webp`}
                      alt="Logo 6"
                    />
                    <div className="inner-heading">Node JS</div>
                  </div>
                  <div className="collection">
                    <img
                      className="logos"
                      src={`${process.env.PUBLIC_URL}/assets/express.webp`}
                      alt="Logo 7"
                    />
                    <div className="inner-heading">Express</div>
                  </div>
                  <div className="collection">
                    <img
                      className="logos"
                      src={`${process.env.PUBLIC_URL}/assets/mongodb.webp`}
                      alt="Logo 8"
                    />
                    <div className="inner-heading">MongoDB</div>
                  </div>
                  <div className="collection">
                    <img
                      className="logos"
                      src={`${process.env.PUBLIC_URL}/assets/mysql.webp`}
                      alt="Logo 9"
                    />
                    <div className="inner-heading">MySQL</div>
                  </div>
                  <div className="collection">
                    <img
                      className="logos"
                      src={`${process.env.PUBLIC_URL}/assets/canva.webp`}
                      alt="Logo 10"
                    />
                    <div className="inner-heading">Canva</div>
                  </div>
                  <div className="collection">
                    <img
                      className="logos"
                      src={`${process.env.PUBLIC_URL}/assets/bootstrap.webp`}
                      alt="Logo 11"
                    />
                    <div className="inner-heading">Bootstrap</div>
                  </div>
                  <div className="collection">
                    <img
                      className="logos"
                      src={`${process.env.PUBLIC_URL}/assets/tailwind.webp`}
                      alt="Logo 12"
                    />
                    <div className="inner-heading">Tailwind</div>
                  </div>
                  <div className="collection">
                    <img
                      className="logos"
                      src={`${process.env.PUBLIC_URL}/assets/github.webp`}
                      alt="Logo 13"
                    />
                    <div className="inner-heading">Git/Github</div>
                  </div>
                  <div className="collection">
                    <img
                      className="logos"
                      src={`${process.env.PUBLIC_URL}/assets/woocommerce.webp`}
                      alt="Logo 14"
                    />
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
