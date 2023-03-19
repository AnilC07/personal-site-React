import React from "react";

import classes from "./UserIcon.module.css";

const UserIcon = ({ type, id, name, value, label,getGender,classname }) => {
  console.log({ type, id, name, value, label });
  return (
    <div className={classes.radio_groups}>
      <div className={classes.radio_group}>
        <input type={type} value={value} name={name} id={id} hidden />
        <label htmlFor={id} className={classname}>
          <img src={label} alt={`avatar ${value}`} onClick={()=>getGender(value)}/>
        </label>
      </div>
    </div>
  );
};

export default UserIcon;
