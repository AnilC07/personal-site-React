import React from "react";


import "./Btn.css";

const Btn = ({ title, bgColor, textColor,classname, onClickHandler }) => {

  const styles = {
    backgroundColor: `${bgColor}`,
    color: `${textColor}`,
  };
  return (
    <button className={`button ${classname}`} style={styles} onClick={onClickHandler}>
      {title}
    </button>
  );
};

export default Btn;
