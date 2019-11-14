import React, { useContext } from "react";
import { CartContext } from "./Contexts/CartContext";

const SectionItem = ({ item }) => {
  const { addProduct } = useContext(CartContext);

  return (
    <div style={{ marginBottom: 20 }} className="col-6 col-md-3">
      <div className="image__container">
        <div style={{ backgroundImage: `url(${item.imageUrl})` }} className="product__image" />
        <div className="product__overlay">
          <h3 onClick={() => addProduct(item)} className="product__overlay__button">
            Lägg till
          </h3>
          <h3 className="product__overlay__button">Mer info</h3>
        </div>
      </div>
      <div className="product__info">
        <p className="product__name">{item.name}</p>
        <p className="product__price">{item.price} kr</p>
      </div>
    </div>
  );
};

export default SectionItem;
