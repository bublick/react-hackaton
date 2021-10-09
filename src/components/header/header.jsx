import React from "react";
import NavBar from "../navBar/navBar";
import ThemeSwitcher from "../themeSwitcher/themeSwitcher";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <NavBar />
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
