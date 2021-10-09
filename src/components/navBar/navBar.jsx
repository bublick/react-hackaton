import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";

const NavBar = () => {
  return (
    <ul className="navigation">
      <li className="navigation__item">
        <Link className="navigation__link" to="/">
          Главная
        </Link>
      </li>
      <li className="navigation__item">
        <Link className="navigation__link" to="/users">
          Пользователи
        </Link>
      </li>
      <li className="navigation__item">
        <Link className="navigation__link" to="/bookmark">
          Избранное
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
