import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Главная</Link>
      </li>
      <li>
        <Link to="/user">Пользователи</Link>
      </li>
      <li>
        <Link to="/bookmark">Избранное</Link>
      </li>
    </ul>
  );
};

export default NavBar;
