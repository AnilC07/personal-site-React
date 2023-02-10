import React from "react";

import "./Radio.css";

const Radio = ({ label, value, name, setCategoryOfVisitor }) => {
  return (
    <div className="radio-groups">
      <div className="radio-group">
        <input
          type="radio"
          value={value}
          name={name}
          onClick={() => setCategoryOfVisitor(value)}
        />
        <label>{label}</label>
      </div>
    </div>
  );
};

export default Radio;
