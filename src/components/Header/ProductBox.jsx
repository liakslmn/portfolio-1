import React from "react";
import "./Header.css";

const ProductBox = ({ image, desc }) => {
  return (
    <div className="product-box">
      <p>{desc}</p>
      <img src={image} alt="" />
    </div>
  );
};

export default ProductBox;
