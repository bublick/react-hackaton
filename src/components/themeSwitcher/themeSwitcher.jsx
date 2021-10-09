import React, { useState } from "react";
import { DARK_THEME_COLOR, LIGHT_THEME_COLOR } from "../../contants/contants";
import "./themeSwitcher.css";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState({
    color: LIGHT_THEME_COLOR,
    backgroundColor: DARK_THEME_COLOR,
  });

  const handleChangeTheme = () => {
    const body = document.body;
    body.style.backgroundColor = theme.backgroundColor;
    body.style.color = theme.color;
    setTheme(({ color, backgroundColor }) => {
      return {
        color: color === LIGHT_THEME_COLOR ? DARK_THEME_COLOR : LIGHT_THEME_COLOR,
        backgroundColor:
          backgroundColor === LIGHT_THEME_COLOR ? DARK_THEME_COLOR : LIGHT_THEME_COLOR,
      };
    });
  };

  return (
    <button onClick={handleChangeTheme} className="theme-switcher">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 114.39 114.39" width="40">
        <path
          fill={theme.backgroundColor}
          d="M56.69,0a56.7,56.7,0,1,0,56.7,56.69A56.69,56.69,0,0,0,56.69,0Zm0,110.55V2.83a53.86,53.86,0,0,1,0,107.72Z"
          transform="translate(0.5 0.5)"
        />
      </svg>
    </button>
  );
};

export default ThemeSwitcher;
