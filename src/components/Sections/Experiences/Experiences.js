import { useEffect, useState } from "react";

import { FcExpand } from "react-icons/fc";

import SectionHeading from "../../SectionHeading";

import "./Experience.css";
import Experience from "./Experience";
import { jobs } from "../../../data";

const Experiences = () => {
  const [experiences, setExperiences] = useState(jobs);

  return (
    <section id="experiences">
      <SectionHeading>Expériences professionnelles</SectionHeading>
      {experiences.map((experience) => {
        return <Experience {...experience} key={experience.id} />;
      })}
    </section>
  );
};

export default Experiences;
