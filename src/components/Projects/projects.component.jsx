import React, { useEffect, useState } from "react";
import projects from "../../projectsData";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router-dom";
import "./projects.styles.css";

const Projects = () => {
  const navigate = useNavigate();
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
    }, 1000);
  });

  const handleClick = (value) => {
    console.log(value);
    navigate(`/projects/${value.projectName}`, { state: value });
  };

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
                {projects.map((element, id) => (
                  <div className="container-box" key={id}>
                    <div className="card">
                      <img
                        className="card-image"
                        src={element.projectImage}
                        alt={`Project ${element.id}`}
                      />
                      <div className="card-details">
                        <span className="tag">{element.projectKeyword1}</span>
                        <span className="tag">{element.projectKeyword2}</span>
                        <span className="no-tag">{element.projectKeyword3}</span>
                        <div className="name">{element.projectName}</div>
                        <p className="description">{element.projectDescription}</p>
                        <button className="read-more" onClick={() => handleClick(element)}>
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Projects;
