import React from "react";
import "./projects.styles.css";

const Projects = () => {
  return (
    <>
      <section class="container-fluid projects-container">
        <div class="row text-center">
          <div className="col-12">
            <h1 className="name-heading">
              My <span className="colored-name-heading">Projects</span>
            </h1>
          </div>
        </div>
        <div class="row align-items-center text-center">
          <div className="col-md-4 col-12"></div>
          <div className="col-md-4 col-12"></div>
          <div className="col-md-4 col-12"></div>
        </div>
      </section>
    </>
  );
};

export default Projects;
