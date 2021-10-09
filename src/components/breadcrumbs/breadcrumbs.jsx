import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ crumbs }) => {
  if (crumbs.length <= 1) {
    return null;
  }

  return (
    <div className="">
      {crumbs.map(({ name, path }, key) =>
        key + 1 === crumbs.length ? (
          <span key={key} className="">
            {name}
          </span>
        ) : (
          <Link key={key} className="" to={path}>
            {name}
          </Link>
        )
      )}
    </div>
  );
};

export default Breadcrumbs;
