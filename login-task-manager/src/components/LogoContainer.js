import React from "react";
import "animate.css";
import "./LogoContainer.css";

import transdevLogo from "../assets/Transdev.png";
import rbuLogo from "../assets/RBU.png";
import redvanLogo from "../assets/Redvan.png";
import redsupportLogo from "../assets/Redsupport.png";

const LogoContainer = () => {
  return (
    <div className="logo-container animate__animated animate__backInLeft">
      <img src={transdevLogo} alt="Transdev Logo" className="logo" />
      <img src={rbuLogo} alt="RBU Logo" className="logo" />
      <img src={redvanLogo} alt="Redvan Logo" className="logo" />
      <img src={redsupportLogo} alt="Redsupport Logo" className="logo" />
    </div>
  );
};

export default LogoContainer;
