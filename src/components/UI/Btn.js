import React from "react";

import {BiMailSend, BiCommentAdd} from 'react-icons/bi'



import "./Btn.css";

const Btn = ({ title, bgColor, textColor,classname, onClickHandler, icon }) => {

  const styles = {
    backgroundColor: `${bgColor}`,
    color: `${textColor}`,
    display:"inline-flex",
    alignItems: "center",
    gap:"10px"
  };
  return (
    <button className={`button ${classname}`} style={styles} onClick={onClickHandler}>
      {title}
      {title.includes('mail') ? <BiMailSend />:<BiCommentAdd /> }
    </button>
  );
};

export default Btn;
