import Logo from "../../Logo";
import { useState } from "react";

import { FcExpand } from "react-icons/fc";

import SectionHeading from "../../SectionHeading";

import { experiences } from "../../../data";

import "./Experience.css";

const Experiences = () => {
  const [isExpand, setIsExpand] = useState(false);

  return (
    <section id="experiences">
      <SectionHeading>Expériences professionnelles</SectionHeading>
      {experiences.map((experience) => {
        const { id, company, poste, logo, debut, end, presentation, tasks } =
          experience;
        return (
          <div className="experience" key={id}>
            <div className="experience__header-container">
              <div className="header">
                <div style={{overflow:"hidden"}}>
                  <Logo logo={logo} company={company} />
                </div>
                <div className="informations">
                  <h3>
                    {company} - {poste}
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "17rem",
                    }}
                  >
                    <p>
                      {debut} {end && <span>- {end}</span>}
                    </p>
                    <div
                      className="expand-icon"
                      onClick={(id) => setIsExpand(!isExpand)}
                    >
                      {isExpand ? (
                        <FcExpand className="expand-icon" />
                      ) : (
                        <FcExpand
                          className="expand-icon"
                          style={{ transform: "rotate(180deg)" }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {isExpand &&
            <div className="missions">
              <p className="description">
                <b>Description de l'entreprise&nbsp;:&nbsp;</b>
                {presentation}
              </p>
              <ul className="list">
                <p style={{ padding: "0" }}>
                  <b>Missions&nbsp;:&nbsp;</b>
                </p>
                {tasks.map((task, idx) => {
                  return (
                    <li className="list-item" key={idx}>
                      - {tasks[idx]}
                    </li>
                  );
                })}
              </ul>
            </div>
          }
          </div>
        );
      })}
    </section>
  );
};

export default Experiences;
