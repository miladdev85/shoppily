import React from "react";

const SectionItem = props => {
  return (
    <div style={{ marginBottom: 20 }} className="col-6 col-md-3">
      <div className="image__container">
        <div style={{ backgroundImage: `url(${props.imageUrl})` }} className="product__image" />
        <div className="product__overlay">
          <h3 className="product__overlay__button">Lägg till</h3>
          <h3 className="product__overlay__button">Mer info</h3>
        </div>
      </div>
      <div className="product__info">
        <p className="product__name">{props.name}</p>
        <p className="product__price">{props.price} kr</p>
      </div>
    </div>
  );
};

export default SectionItem;
