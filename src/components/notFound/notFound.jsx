import React from "react";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";

const NotFound = ({ crumbs }) => {
  return (
    <>
      {crumbs && <Breadcrumbs crumbs={crumbs} specify="Ошибка" />} <h1>Страница не найдена</h1>
    </>
  );
};

export default NotFound;
