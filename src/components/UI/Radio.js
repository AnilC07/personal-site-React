import React from "react";

import "./Radio.css";

const Radio = ({ label, value, name, setCategoryOfVisitor }) => {
  return (

      <div className="radio-group">
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
