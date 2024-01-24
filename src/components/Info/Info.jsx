import React from "react";
import "./Info.css";
import CardText from "../CardText/CardText";
import {
  faBriefcase,
  faDesktop,
  faDownLeftAndUpRightToCenter,
} from "@fortawesome/free-solid-svg-icons";

const Info = () => {
  return (
    <div className="info">
      <h2>Our Benefits</h2>
      <div className="info-container">
        <CardText
          header={"Many Useful Components"}
          icon={faBriefcase}
          content="Startup Framework contains components and complex blocks which can easily be integrated into almost any design."
        />
        <CardText
          header={"Responsive\nLayout"}
          icon={faDownLeftAndUpRightToCenter}
          content="We haven't forgotten about responsive layout. With Startup Framework, you can create a website with full mobile support."
        />
        <CardText
          header={"Retina\nReady"}
          icon={faDesktop}
          content="Startup Framework works on devices supporting Retina Display. Feel the clarity in each pixel."
        />
      </div>
    </div>
  );
};

export default Info;
