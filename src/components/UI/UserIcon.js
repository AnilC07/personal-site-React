import React from "react";

import "./UserIcon.css";

const UserIcon = ({ type, id, name, value, label,getGender,classname }) => {
  console.log({ type, id, name, value, label });
  return (
    <div className="radio-groups">
      <div className="radio-group">
        <input type={type} value={value} name={name} id={id} hidden />
        <label htmlFor={id} className={classname}>
          <img src={label} alt={`avatar ${value}`} onClick={()=>getGender(value)}/>
        </label>
      </div>
    </div>
  );
};

export default UserIcon;
