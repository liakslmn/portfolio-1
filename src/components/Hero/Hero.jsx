import React from "react";
import "./Hero.css";
import hero_image1 from "../../assets/hero-image1.svg";
import hero_image2 from "../../assets/hero-image2.svg";
import CardBox from "../CardBox/CardBox";

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <h2>
          A high-quality solution for those who want a beautiful startup website
          quickly
        </h2>
        <h5>
          Startup contains components and complex blocks which can easily be
          integrated into almost any design.
        </h5>
        <button>Get started for Free</button>
        <div className="hero-images">
          <CardBox
            header="Swift Quality"
            image={hero_image1}
            content="A high-quality solution for a beautiful startup website."
          />
          <CardBox
            header="Demo Version"
            image={hero_image2}
            content="Learn more about Startup Framework in demo version."
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
