import React from "react";
import { useLocation } from "react-router-dom";
import "./details.styles.css";

const Details = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <h2>{location.state.projectName}</h2>
      <img src={location.state.detailImage} alt="Project" />
    </div>
  );
};

export default Details;
