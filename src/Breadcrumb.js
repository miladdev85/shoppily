import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const Breadcrumb = ({ sections, location }) => {
  if (location.pathname === "/") return null;

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

export default withRouter(Breadcrumb);
