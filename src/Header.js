import React from "react";

const Header = () => {
  return (
    <nav>
      <ul className="nav-container">
        <li className="nav_item left">
          <a href="#">
            <i className="fab fa-ethereum nav_link"></i>
          </a>
        </li>
        <li className="nav_item">
          <a className="nav_link" href="#">
            Hem
          </a>
        </li>
        <li className="nav_item">
          <a className="nav_link" href="#">
            Kontakt
          </a>
        </li>
        <li className="nav_item">
          <a className="nav_link" href="#">
            Logga in
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
