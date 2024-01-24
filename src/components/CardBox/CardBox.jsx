import React from "react";
import "./CardBox.css";

const CardBox = ({ image, content, header, thin }) => {
  return (
    <div className="cardbox">
      <img src={image} alt="" />
      <div className="text-wrapper">
        <h5>{header}</h5>
        <p className={thin ? "thin text-color" : "text-color"}>{content}</p>
      </div>
    </div>
  );
};

export default CardBox;
