import React from "react";

import cls from 'classnames'

import classes from "./FilterButton.module.css";

const FilterButton = ({ competence, id, filterOnClick, selected }) => {
  console.log(selected)
  return (
    <button
      id="filter"
      className={cls(selected.join("").includes(competence) && classes.active)}
      value={competence}
      onClick={filterOnClick}
    >
      {competence}
    </button>
  );
};

export default FilterButton;
