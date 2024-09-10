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
              connect and discuss how I can add value to your projects.
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
              <a href="https://github.com/muhammadtalaljanjua" rel="noreferrer" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.instagram.com/talal_janjua/" rel="noreferrer" target="_blank">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="mailto:hafiztalalaqeel1@gmail.com" rel="noreferrer" target="_blank">
                <i className="fa-brands fa-google"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-12 order-1 order-md-2 column-2"></div>
        </div>

        <div className="row text-center skills-box">
          <div className="col-12">
            <h1 className="skills-heading">
              My <span className="my-colored-heading">Expertise</span>
            </h1>
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
                    <div className="inner-heading">React JS</div>
                  </div>
                  <div className="collection">
                    <img
                      className="logos"
                      src={`${process.env.PUBLIC_URL}/assets/next.webp`}
                      alt="Logo 5"
                    />
                    <div className="inner-heading">Next JS</div>
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
                      src={`${process.env.PUBLIC_URL}/assets/firebase.webp`}
                      alt="Logo 9"
                    />
                    <div className="inner-heading">Firebase</div>
                  </div>
                  <div className="collection">
                    <img
                      className="logos"
                      src={`${process.env.PUBLIC_URL}/assets/prisma.webp`}
                      alt="Logo 5"
                    />
                    <div className="inner-heading">Prisma</div>
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
                  <div className="collection">
                    <img
                      className="logos"
                      src={`${process.env.PUBLIC_URL}/assets/canva.webp`}
                      alt="Logo 10"
                    />
                    <div className="inner-heading">Canva</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row hire-section">
          <div className="col-12 text-center">
            <h1 className="hire-heading">
              Hire <span className="my-colored-heading">Me!</span>
            </h1>
            <p className="about-text">
              Looking for a skilled developer? <br /> Check out my
              <span className="my-colored-heading"> Upwork</span> and
              <span className="my-colored-heading"> Fiverr</span> profiles!
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-12 profile-box">
            <div className="social-card">
              <div className="content">
                <img
                  className="img"
                  src={`${process.env.PUBLIC_URL}/assets/upwork.png`}
                  alt="Upwork Logo"
                />
                <p className="para">
                  Looking for a reliable and skilled developer to bring your ideas to life? Check
                  out my Upwork profile to see my projects portfolio. Let's collaborate and make
                  your project a success!
                </p>
                <a
                  href="https://www.upwork.com/freelancers/~0111643175d390076b"
                  rel="noreferrer"
                  target="_blank"
                >
                  <button className="profile-button">Go To Profile</button>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-12 profile-box">
            <div className="social-card">
              <div className="content">
                <img
                  className="img"
                  src={`${process.env.PUBLIC_URL}/assets/fiverr.png`}
                  alt="Fiverr Logo"
                />
                <p className="para">
                  Need high-quality web development services with a quick turnaround? Visit my
                  Fiverr profile to explore my gigs and place an order. Let's get started on your
                  project today!
                </p>
                <a href="https://www.fiverr.com/talal_janjua" rel="noreferrer" target="_blank">
                  <button className="profile-button">Go To Profile</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
