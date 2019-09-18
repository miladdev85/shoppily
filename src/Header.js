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
          <Link to="/" className="nav__link" href="_">
            Hem
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/kontakt" className="nav__link" href="_">
            Kontakt
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/login" className="nav__link" href="_">
            Logga in
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
