import React from "react";
import "./Brands.css";
import fox from "../../assets/Fox.svg";
import google from "../../assets/Google.svg";
import walmart from "../../assets/Walmart.svg";
import adidas from "../../assets/Adidad.svg";
import pizza from "../../assets/Pizza Hut.svg";
import phillips from "../../assets/Philips.svg";
import cnn from "../../assets/CNN.svg";
import beanstalk from "../../assets/Beanstalk.svg";
import ImageBox from "../ImageBox/ImageBox";

const Brands = () => {
  return (
    <div className="brands">
      <header>
        <h2>Our Great Clients</h2>
        <p>
          Startup includes great form options for your startup projects. Each
          component is coded for web which makes creating a website quick and
          easy.
        </p>
      </header>
      <div className="brands-images">
        <ImageBox image={fox} />
        <ImageBox image={google} />
        <ImageBox image={walmart} />
        <ImageBox image={adidas} />
        <ImageBox image={pizza} />
        <ImageBox image={phillips} />
        <ImageBox image={cnn} />
        <ImageBox image={beanstalk} />
      </div>
    </div>
  );
};

export default Brands;
