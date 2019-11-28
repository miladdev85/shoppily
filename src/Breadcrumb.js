import React from "react";
import { NavLink } from "react-router-dom";

const Breadcrumb = ({ sections }) => {
  return (
    <div>
      <ul className="breadcrumb">
        {sections.map(section => {
          return (
            <li className="breadcrumb__list" key={section.id}>
              <NavLink
                className="inactive"
                activeClassName="active"
                to={`/avdelning/${section.title}`}
              >
                <p className="breadcrumb__title">{section.mainsection.title}</p>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumb;
