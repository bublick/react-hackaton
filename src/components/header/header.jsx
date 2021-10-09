import React from "react";
import NavBar from "../navBar/navBar";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <NavBar />
      <button>Сменить тему</button>
    </header>
  );
};

export default Header;
