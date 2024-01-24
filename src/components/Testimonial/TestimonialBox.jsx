import React from "react";
import "./Testimonial.css";

const TestimonialBox = ({ image, content, name }) => {
  return (
    <div className="testimonial-box">
      <img src={image} alt="" />
      <div className="wrapper-text">
        <p className="content">{content}</p>
        <p className="name">{name}</p>
      </div>
    </div>
  );
};

export default TestimonialBox;
