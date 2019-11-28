import React from "react";
import { Link } from "react-router-dom";

const HomeItem = ({ title, size, imageUrl, mainsection }) => {
  return (
    <Link to={{ pathname: `avdelning/${mainsection.url}` }} className={`${size} home`}>
      <div style={{ backgroundImage: `url(${imageUrl})` }} className="home__backgroundimage" />
      <div className="home__content">
        <h2 style={{ fontSize: "2.4rem" }}>{title}</h2>
      </div>
    </Link>
  );
};

export default HomeItem;
