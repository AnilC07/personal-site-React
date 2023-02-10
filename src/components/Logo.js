import React from "react";

import "./Logo.css";

const Logo = ({ logo, company }) => {
  return (
    <div className="logo">
      <img src={logo} alt={`logo de ${company}`} />
    </div>
  );
};

export default Logo;
