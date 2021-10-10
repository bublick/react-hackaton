import React from "react";
import { technologyIcons } from "../technologyIcons/technologyIcons";
import "./technologiesList.css";

const TechnologiesList = ({ technologies }) => {
  return (
    <ul className="technologies">
      {technologies.map(technology => (
        <li key={technology} className="technologies__item">
          <div className="technologies__wrapper">
            {technologyIcons[technology]()}
            <h3 className="technologies__name">{technology}</h3>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TechnologiesList;
