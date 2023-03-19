import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <div id="footer">
        <p className="footer__text"> &copy; {new Date().getFullYear()} Anil CELIK.</p>
    </div>
  );
};

export default Footer;
