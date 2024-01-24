import React from "react";

const FooterMenu = ({ title, menu }) => {
  return (
    <div className="footer-menu">
      <h4>{title}</h4>
      <ul>
        {menu.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default FooterMenu;
