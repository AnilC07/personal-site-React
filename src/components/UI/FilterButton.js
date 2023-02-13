import React from "react";

import './FilterButton.css'

const FilterButton = ({ competence, id }) => {
  return (
      <button id="filter">{competence}</button>
  );
};

export default FilterButton;
