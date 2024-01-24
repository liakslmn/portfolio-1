import React from "react";
import "./CardText.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardText = ({ icon, header, content }) => {
  return (
    <div className="card-text">
      <FontAwesomeIcon icon={icon} className="icon" />
      <h5>{header}</h5>
      <p>{content}</p>
    </div>
  );
};

export default CardText;
