import React from "react";
import styled from "styled-components";

const Overlay = styled.h3`
  padding: 6px 8px 6px 8px;
  text-align: center;
  background-color: white;
  color: grey;
  cursor: pointer;
  &:hover {
    background-color: rgb(170, 170, 170);
    color: white;
  }
  @media screen and (max-width: 900px) {
    font-size: 1.6rem;
    padding: 4px 6px 4px 6px;
  }
`;

const SectionItem = props => {
  return (
    <div style={{ marginBottom: 20 }} className="col-6 col-md-3">
      <div className="image__container">
        <div style={{ backgroundImage: `url(${props.imageUrl})` }} className="product__image" />
        <div className="product__overlay">
          <Overlay>Lägg till</Overlay>
          <Overlay>Mer info</Overlay>
        </div>
      </div>
      <div style={{ cursor: "pointer" }} className="product__info">
        <p className="product__name">{props.name}</p>
        <p className="product__price">{props.price} kr</p>
      </div>
    </div>
  );
};

export default SectionItem;
