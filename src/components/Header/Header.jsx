import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./Dropdown";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <header>
        <div className="container header">
          <div className="logo" title="BleakTech">
            <img src={logo} alt="logo" />
            <h2>BleakTech</h2>
          </div>
          <div className="menu">
            <ul>
              <li
                onClick={() => {
                  setShow(!show);
                }}
              >
                Shop{" "}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="fa-chevron-down"
                  style={show && { transform: "rotate(180deg)" }}
                />
              </li>
              <li>About</li>
              <li>Prices</li>
              <li>Blog</li>
              <li>Feedback</li>
              <li>F.A.Q.</li>
            </ul>
            <div className="cta">
              <button className="custom">Contact Us</button>
            </div>
          </div>
        </div>
      </header>
      {show && <Dropdown />}
    </>
  );
};

export default Header;