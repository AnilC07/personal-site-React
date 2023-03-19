

import SectionHeading from "../../SectionHeading";

import "./Experience.css";
import Experience from "./Experience";
import { jobs } from "../../../data";

const Experiences = () => {

  return (
    <section className="experiences">
      <SectionHeading>Expériences professionnelles</SectionHeading>
      {jobs.map((job) => {
        return <Experience {...job} key={job.id} />;
      })}
    </section>
  );
};

export default Experiences;
