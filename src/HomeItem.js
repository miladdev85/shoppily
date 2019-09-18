import React from "react";

const HomeItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`${size} home-item`}>
      <div style={{ backgroundImage: `url(${imageUrl})` }} className="home__background-image" />
      <div className="home__content">
        <h2 style={{ fontSize: "2.3rem" }}>{title}</h2>
      </div>
    </div>
  );
};

export default HomeItem;
