import React from "react";
import "./Crew.css";
import CrewCard from "./CrewCard";
import crew1 from "../../assets/crew1.svg";
import crew2 from "../../assets/crew2.svg";
import crew3 from "../../assets/crew3.svg";

const Crew = () => {
  return (
    <div className="crew">
      <h2>Our Crew</h2>
      <p>
        We have created a new product that will help designers, developers and
        <br />
        companies create websites for their startups quickly and easily.
      </p>
      <div className="crew-card-wrapper">
        <CrewCard image={crew1} name="Samantha Gimson" position="CEO" />
        <CrewCard
          image={crew2}
          name="Evan Barrington"
          position="Product Manager, Designer"
        />
        <CrewCard image={crew3} name="Brian Oakman" position="Developer" />
      </div>
      <button>View Our Team</button>
    </div>
  );
};

export default Crew;
