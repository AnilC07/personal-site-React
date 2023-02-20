import React from "react";

import Logo from "../../Logo";

import Detail from "./Detail";

const Experience = ({
  id,
  company,
  poste,
  logo,
  debut,
  end,
  presentation,
  tasks,
}) => {
  return (
    <div className="experience" key={id}>
      <div className="experience__header-container">
        <div className="header">
          <div>
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
                marginLeft: "auto",
              }}
            >
              <p className="date">
                {debut} {end && <span>- {end}</span>}
              </p>
            </div>
          </div>
        </div>
        <Detail presentation={presentation} tasks={tasks} />
      </div>
    </div>
  );
};

export default Experience;
