import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul className="nav__container">
        <li className="nav__item flex__left">
          <Link to="/">
            <i className="far fa-gem nav__link"></i>
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/projektet" className="nav__link" href="_">
            Om detta projekt
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
