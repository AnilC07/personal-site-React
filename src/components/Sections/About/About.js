import React from "react";

import "./About.css";

import SectionHeading from "../../SectionHeading";

const About = () => {
  return (
    <section className="about">
        <SectionHeading>A propos de moi</SectionHeading>
      <div className="about__container">
        <div className="about__container-img">
          <img src={"/images/maPhoto.jpg"} alt="" />
        </div>
        <div className="about__container-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et
            nunc tempor neque semper vulputate. Vestibulum sed lorem viverra,
            viverra augue quis, porttitor magna. Interdum et malesuada fames ac
            ante ipsum primis in faucibus. Quisque in ultricies urna. Duis
            dapibus pharetra pharetra. Vivamus non tincidunt orci. Vestibulum
            porttitor ante urna, eu placerat nibh mollis nec. Praesent congue
            viverra porttitor. Sed bibendum dui quis sollicitudin porttitor.
            Curabitur congue tortor mauris, mattis pulvinar tellus lacinia vel.
            Etiam sed facilisis nisi, non rutrum nulla.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
