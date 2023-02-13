import Logo from "../../Logo";
import SectionHeading from "../../SectionHeading";

import { experiences } from "../../../data";

import "./Experience.css";

const Experiences = () => {

  return (
    <section id="experiences">
      <SectionHeading>Expériences professionnelles</SectionHeading>
      {experiences.map((experience) => {
        const { id, company,poste, logo, debut, end, presentation, tasks } =
          experience;
        return (
          <div className="experience" key={id}>
            <div className="header">
              <div>
                <Logo logo={logo} company={company} />
              </div>
              <div className="informations">
                <h3>{company} - {poste}</h3>
                <p>
                  {debut} {end && <span>- {end}</span>}
                </p>
              </div>
            </div>
            <div className="missions">
              <p className="description">{presentation}</p>
              <ul className="list">
                {tasks.map((task, idx) => {
                  return (
                    <li className="list-item" key={idx}>
                      - {tasks[idx]}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
      </section>
  );
};

export default Experiences;
