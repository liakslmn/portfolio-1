import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CrewCard = ({ image, name, position }) => {
  return (
    <div className="crew-card">
      <img src={image} alt="" />
      <div>
        <p>{name}</p>
        <p className="position">{position}</p>
      </div>
      <div className="icon-wrapper">
        <FontAwesomeIcon icon={faTwitter} className="icon twitter" />
        <FontAwesomeIcon icon={faFacebook} className="icon facebook" />
        <FontAwesomeIcon icon={faLinkedin} className="icon linkedin" />
      </div>
    </div>
  );
};

export default CrewCard;
