import React from "react";

import classes from "./Radio.module.css";

const Radio = ({ label, value, name, setCategoryOfVisitor }) => {
  return (

      <div className={classes.radio_group}>
        <input
        id={value}
          type="radio"
          value={value}
          name={name}
          onClick={() => setCategoryOfVisitor(value)}
        />
        <label htmlFor={value}>{label}</label>
      </div>
    
  );
};

export default Radio;
