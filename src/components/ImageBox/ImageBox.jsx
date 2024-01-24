import React from "react";
import "./ImageBox.css";

const ImageBox = ({ image }) => {
  return (
    <div className="images-box">
      <img src={image} alt="" />
    </div>
  );
};

export default ImageBox;
