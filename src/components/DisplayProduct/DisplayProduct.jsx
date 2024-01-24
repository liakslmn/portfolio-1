import React from "react";
import "./DisplayProduct.css";
import iphones from "../../assets/iPhones.svg";
import IconText from "../IconText/IconText";
import {
  faDatabase,
  faDesktop,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

const DisplayProduct = () => {
  return (
    <div className="display-product">
      <div className="display-product-wrapper">
        <div className="display-product-text">
          <h2>
            Looking cautiously <br /> round
          </h2>
          <p>
            With the brand new camera, immerse yourself <br /> with the
            megapixels, on the tip of your finger.
          </p>
          <div className="display-product-box">
            <IconText
              icon={faLayerGroup}
              content="Thoroughly Structured Layers"
            />
            <IconText icon={faDesktop} content="Ready to Prototype" />
            <IconText icon={faDatabase} content="Great Layer Organization" />
          </div>
        </div>
        <img src={iphones} alt="" />
      </div>
    </div>
  );
};

export default DisplayProduct;
