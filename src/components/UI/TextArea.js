import React, { useEffect, useState } from "react";

import classes from "./TextArea.module.css";

const TextArea = ({ id, label, placeholder, name }) => {
  const [numChars, setNumChars] = useState(400);

  const limitNumOfChars = () => {
    setNumChars((numChars) => numChars - 1);
  };

  useEffect(() => {
    if (numChars < 1) {
      console.log("c'est bon arrete");
    }
  }, [numChars]);

  return (
    <div className={classes.message}>
      <label htmlFor={id}>{label}</label>
      <div>
        <textarea
          id={id}
          placeholder={placeholder}
          rows="4"
          cols="40"
          name={name}
          onChange={limitNumOfChars}
          maxLength="400"
        />
        <p className={classes.decompte}>il vous reste {numChars} caracteres</p>
      </div>
    </div>
  );
};

export default TextArea;
