import React from "react";
import { Link } from "react-router-dom";
import "./breadcrumbs.css";

const Breadcrumbs = ({ crumbs, specify }) => {
  if (crumbs.length <= 1) {
    return null;
  }
  return (
    <div className="breadcrumbs">
      {crumbs.map(({ name, path }, key) =>
        key + 1 === crumbs.length ? (
          <span key={key} className="breadcrumbs__item breadcrumbs__item--disable">
            {specify ? specify : name}
          </span>
        ) : (
          <Link key={key} className="breadcrumbs__item" to={path}>
            {name}
          </Link>
        )
      )}
    </div>
  );
};

export default Breadcrumbs;
