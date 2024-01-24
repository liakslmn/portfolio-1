import React from "react";
import "./Testimonial.css";
import TestimonialBox from "./TestimonialBox";
import testimonial1 from "../../assets/testimonial1.svg";
import testimonial2 from "../../assets/testimonial2.svg";
import testimonial3 from "../../assets/testimonial3.svg";
import testimonial4 from "../../assets/testimonial4.svg";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="testimonial-wrapper">
        <h2>Our Happy Clients</h2>
        <div className="testimonial-box-wrapper">
          <TestimonialBox
            image={testimonial1}
            content="Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support."
            name="Rayhan Curran"
          />
          <TestimonialBox
            image={testimonial2}
            content="As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website."
            name="Kayley Frame"
          />
          <TestimonialBox
            image={testimonial3}
            content="Extremely easy to use, helped us develop our Vote for George Washington micro-site extre- mely quickly! We will definitely use it again for other projects."
            name="Gene Whitfield"
          />
          <TestimonialBox
            image={testimonial4}
            content="It was just amazing implementing the website in such short time. Thank you BleakTech for making my life easier and my work more fun ;)"
            name="Allan Kim"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
