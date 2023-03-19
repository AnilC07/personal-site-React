

import classes from "./Logo.module.css";

const Logo = ({ logo, company }) => {
  return (
    <div className={classes.logo}>
      <img src={logo} alt={`logo de ${company}`} />
    </div>
  );
};

export default Logo;
