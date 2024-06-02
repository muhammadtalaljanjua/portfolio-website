import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import "./details.styles.css";

const Details = () => {
  const location = useLocation();
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
    }, 800);
  });

  return (
    <div className="details">
      <h2 className="project-name">{location.state.projectName}</h2>
      {spinner ? (
        <div className="d-flex justify-content-center align-items-center loader-box">
          <Spinner className="loader" animation="border" /> &nbsp; Loading...
        </div>
      ) : (
        <img
          className="background-image"
          src={location.state.detailImage}
          alt={location.state.projectName}
        />
      )}
    </div>
  );
};

export default Details;
