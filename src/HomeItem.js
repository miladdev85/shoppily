import React from "react";

const HomeItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`${size} home-item`}>
      <div style={{ backgroundImage: `url(${imageUrl})` }} className="background-image" />
      <div className="content">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default HomeItem;
