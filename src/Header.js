import React from "react";

const Header = () => {
  return (
    <nav>
      <ul className="nav-container">
        <li className="nav_item left">
          <a href="1" className="">
            <i className="fab fa-ethereum nav_link"></i>
          </a>
        </li>
        <li className="nav_item">
          <a className="nav_link" href="2">
            Hem
          </a>
        </li>
        <li className="nav_item">
          <a className="nav_link" href="3">
            Kontakt
          </a>
        </li>
        <li className="nav_item">
          <a className="nav_link" href="4">
            Logga in
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
