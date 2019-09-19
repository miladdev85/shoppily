import React from "react";

const SectionItem = props => {
  return (
    <div style={{ paddingBottom: 20 }} className="col-6 col-md-3 product__container">
      <img src={props.imageUrl} alt={props.name} className="product__image" />
      <p>{props.name}</p>
      <p>{props.price} kr</p>
    </div>
  );
};

export default SectionItem;
