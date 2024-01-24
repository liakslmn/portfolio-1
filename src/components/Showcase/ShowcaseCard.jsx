import React from "react";
import "./Showcase.css";

const ShowcaseCard = ({ image, content, header }) => {
  return (
    <div className="showcase-card">
      <img src={image} alt="" />
      <div className="showcase-card-text">
        <h5>{header}</h5>
        <p>{content}</p>
        <button>Learn more</button>
      </div>
    </div>
  );
};

export default ShowcaseCard;
