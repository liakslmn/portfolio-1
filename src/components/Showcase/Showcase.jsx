import React from "react";
import "./Showcase.css";
import ShowcaseCard from "./ShowcaseCard";
import showcase1 from "../../assets/showcase1.svg";
import showcase2 from "../../assets/showcase2.svg";
import showcase3 from "../../assets/showcase3.svg";
import showcase4 from "../../assets/showcase4.svg";
import showcase5 from "../../assets/showcase5.svg";
import showcase6 from "../../assets/showcase6.svg";

const Showcase = () => {
  return (
    <div className="showcase">
      <div className="showcase-wrapper">
        <h2>25 Ready-to-Use Pages</h2>
        <p>
          We prepared some high-quality web-pages, that you can use in your
          projects. When you have to create your website you can use these
          templates.
        </p>
        <div className="showcase-card-wrapper">
          <ShowcaseCard
            image={showcase1}
            content="Startup Framework works fine on devices supporting Retina Desplay. Feel the clarity!"
            header="Quality you can trust"
          />
          <ShowcaseCard
            image={showcase2}
            content="We used only time-tested technologies for the best results."
            header="Fast prototyping"
          />
          <ShowcaseCard
            image={showcase3}
            content="HTML layout is based on one of the most common and reliable framework - Bootstrap."
            header="Bootstrap based"
          />
          <ShowcaseCard
            image={showcase4}
            content="We prepared some high-quality photos, that you can use in your projects. "
            header="Mozart Project"
          />
          <ShowcaseCard
            image={showcase5}
            content="Startup Framework contains components and blocks which are highly reusable."
            header="Web Generator"
          />
          <ShowcaseCard
            image={showcase6}
            content="Carefully crafted precise design, with typography and perfect padding."
            header="More than Design"
          />
        </div>
      </div>
    </div>
  );
};

export default Showcase;
