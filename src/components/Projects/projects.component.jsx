import React, { useEffect, useState } from "react";
import projects from "../../projectsData";
import Spinner from "react-bootstrap/Spinner";
// import code from "../../../public/assets/code.gif";
import "./projects.styles.css";

const Projects = () => {
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
    }, 500);
  });

  return (
    <>
      <section className="container-fluid projects-container">
        <div className="row text-center">
          <div className="col-12">
            <img className="codeImage" src={require("./code.gif")} alt="Code GIF" />

            <h1 className="projects-heading">
              My <span className="colored-projects-heading">Projects</span>
            </h1>
          </div>
        </div>

        {spinner ? (
          <div className="d-flex justify-content-center align-items-center loader-box">
            <Spinner className="loader" animation="border" /> &nbsp; Loading...
          </div>
        ) : (
          <div className="new">
            <div className="row">
              <div className="preview">
                {projects.map((element) => {
                  return (
                    <>
                      <div className="container-box" key={element.id}>
                        <div className="card">
                          <img
                            className="card-image"
                            src={element.projectImage}
                            alt={`Project ${element.id}`}
                          />
                          <div className="card-details">
                            <span className="tag">{element.projectKeyword1}</span>
                            <span className="tag">{element.projectKeyword2}</span>
                            <span className="tag">{element.projectKeyword3}</span>
                            <div className="name">{element.projectName}</div>
                            <p className="description">{element.projectDescription}</p>
                            <button className="read-more">Read More</button>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Projects;
