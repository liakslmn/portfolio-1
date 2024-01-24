import React from "react";
import "./IconText.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconText = ({ icon, content }) => {
  return (
    <div className="icon-text">
      <FontAwesomeIcon icon={icon} className="icon-text-icon" />
      <p>{content}</p>
    </div>
  );
};

export default IconText;
