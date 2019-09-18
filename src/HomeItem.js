import React from "react";
import { Link } from "react-router-dom";

const HomeItem = ({ title, id, sectionImage, size, url }) => {
  return (
    <Link
      to={{ pathname: `avdelning/${url}`, search: `?sectionId=${id}` }}
      className={`${size} home__item`}
    >
      <div
        style={{ backgroundImage: `url(http://localhost:1337${sectionImage.url})` }}
        className="home__background-image"
      />
      <div className="home__content">
        <h2 style={{ fontSize: "2.4rem" }}>{title}</h2>
      </div>
    </Link>
  );
};

export default HomeItem;
