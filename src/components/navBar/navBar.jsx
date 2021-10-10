import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link className="navbar__brand-logo" to="/">
        BrandLogo
      </Link>

      <ul className="navbar__list">
        <li class="navbar__list-item">
          <Link className="navbar__item-anchor" to="/">
            Главная
          </Link>
        </li>
        <li class="navbar__list-item">
          <Link className="navbar__item-anchor" to="/users">
            Команда
          </Link>
        </li>
        <li class="navbar__list-item">
          <Link className="navbar__item-anchor" to="/bookmark">
            Избранное
          </Link>
        </li>
      </ul>

      <button>Сменить тему</button>
    </div>
  );
};

export default NavBar;
