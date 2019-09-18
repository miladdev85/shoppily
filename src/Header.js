import React from "react";

const Header = () => {
  return (
    <nav>
      <ul className="nav__container">
        <li className="nav__item flex__left">
          <a href="#">
            <i className="far fa-gem nav__link"></i>
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#">
            Hem
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#">
            Kontakt
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#">
            Logga in
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
