import React from "react";
import logo from "../../assets/logo.png";
import "./Logo.css"


const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logo} alt="logo-img" />
    </div>
  );
};

export default Logo;
