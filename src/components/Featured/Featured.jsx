import React from "react";
import "./Featured.css";
import CardBox from "../CardBox/CardBox";
import featured_img1 from "../../assets/featured-img1.svg";
import content_image1 from "../../assets/content-image1.svg";
import content_image2 from "../../assets/content-image2.svg";

const Featured = () => {
  return (
    <div className="featured">
      <div className="wrapper">
        <h2>Our Featured</h2>
        <h5>
          We've created the product that will help your startup look better!
        </h5>
        <img className="featured-hero-image" src={featured_img1} alt="" />
        <div className="featured-images">
          <CardBox
            header="Feel our design"
            image={content_image1}
            content="Startup Design Framework contains components which can easily be integrated into almost any design."
            thin={false}
          />
          <CardBox
            header="High Resolution"
            thin={false}
            image={content_image2}
            content="We did a 2.5K size high resolution photo that will suit even for a very web site."
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
