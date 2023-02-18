import React from "react";

import "./FilterButton.css";

const FilterButton = ({ competence, id, filterOnClick, selected }) => {
  return (
    <button
      id="filter"
      className={selected.join("").includes(competence) && "active"}
      value={competence}
      onClick={filterOnClick}
    >
      {competence}
    </button>
  );
};

export default FilterButton;
