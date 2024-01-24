import {
  faDiscord,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { listOne, listTwo, listThree, listFour } from "../../assets/list";
import FooterMenu from "./FooterMenu";
import "./Footer.css";
import { faHeadphonesAlt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="container-wrapper">
          <div className="container-1">
            <div className="logo">
              <FontAwesomeIcon icon={faHeadphonesAlt} className="logo-icon" />
              <h2>BleakTech</h2>
            </div>
            <p>
              Be sure to take a look at <br /> our Terms of Use and Privacy
              Policy
            </p>
            <div className="footer-icon-wrapper">
              <FontAwesomeIcon icon={faDiscord} className="footer-icon" />
              <FontAwesomeIcon icon={faFacebook} className="footer-icon" />
              <FontAwesomeIcon icon={faGithub} className="footer-icon" />
            </div>
          </div>
          <div className="container-divider">
            <div className="container-2">
              <FooterMenu menu={listOne} title="Product" />
            </div>
            <div className="container-3">
              <FooterMenu menu={listTwo} title="Work" />
            </div>
            <div className="container-4">
              <FooterMenu menu={listThree} title="Stuff" />
            </div>
            <div className="container-5">
              <FooterMenu menu={listFour} title="Contact" />
            </div>
          </div>
        </div>
        <p className="copyright">© 2024 BleakTech. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
