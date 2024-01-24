import React from "react";
import "./Header.css";
import slider_image from "../../assets/slider-image1.svg";
import promo from "../../assets/promo.svg";
import product_display1 from "../../assets/product-display1.svg";
import product_display2 from "../../assets/product-display2.svg";
import product_display3 from "../../assets/product-display3.svg";
import ProductBox from "./ProductBox";
import Categories from "./Categories";

const Dropdown = () => {
  return (
    <div className="dropdowns">
      <div className="container wrapper">
        <div className="left">
          <p>Categories</p>
          <ul>
            {Categories.map((item, i) => {
              return <li key={i}>{item}</li>;
            })}
          </ul>
        </div>
        <div className="middle">
          <div className="slider">
            <img src={slider_image} alt="" />
            <div className="slider-text">
              <h4>You can order any stuff in our online shop</h4>
              <p>Try it yourself and get 10% discount</p>
            </div>
          </div>
          <div className="products-display">
            <ProductBox image={product_display1} desc="Smart Watches" />
            <ProductBox image={product_display2} desc="Cameras" />
            <ProductBox image={product_display3} desc="Gamepads" />
          </div>
        </div>
        <div className="right">
          <div className="promo">
            <img src={promo} alt="" />
            <div className="promo-material">
              <h4>Register now and get 15% discount as a new customer</h4>
              <button>Get 15% Discount</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
