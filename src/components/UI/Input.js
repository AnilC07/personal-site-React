import React, { useEffect } from "react";
// import useCtx from "../../hook/useCtx";

import "./Input.css";

const Input = ({ placeholder, type, label, id, name }) => {
  // const context = useCtx();

  console.log(typeof label)
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

  //   context.setFormulaire(name, value);
  //   // console.log(context.formulaire)
  };

  // useEffect(() => {
  //   console.log("formulaire", context.formulaire);
  // }, [context.formulaire]);

  return (
    <div className="input">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        name={name}
        onChange={onChangeHandler}
        required
      />
    </div>
  );
};

export default Input;
