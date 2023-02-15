import React, { useEffect, useState } from "react";

import "./TextArea.css";

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
    <div className="message">
      <label htmlFor={id}>{label}</label>
      <div className="text-area">
        <textarea
          id={id}
          placeholder={placeholder}
          rows="5"
          cols=""
          name={name}
          onChange={limitNumOfChars}
          maxLength="400"
        />
        <p className="decompte">il vous reste {numChars} caracteres</p>
      </div>
    </div>
  );
};

export default TextArea;
