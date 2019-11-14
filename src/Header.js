import React, { useContext } from "react";
import { CartContext } from "./Contexts/CartContext";
import { Link } from "react-router-dom";
import bag from "./bag.png";

const Header = () => {
  const { products } = useContext(CartContext);
  return (
    <nav>
      <ul className="nav__container">
        <li className="nav__item-logo flex__left">
          <Link to="/">
            <i className="far fa-gem nav__link"></i>
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/projektet" className="nav__link">
            Om detta projekt
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/loggain" className="nav__link">
            Logga in
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/kundkorg" className="nav__link">
            <div className="cart">
              <img src={bag} alt="" className="cart-image" />
              <span className="cart-nr">{products.length}</span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
