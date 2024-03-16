import React from "react";
import Logo from "../Logo/Logo";
import "./MainPage.css";


const MainPage = () => {
  return (
    <div className="container">
      <div className="logo-container">
        <Logo />
        <h1>Planilha de gestão de pedidos</h1>

      </div>
      
    </div>
  );
};

export default MainPage;
