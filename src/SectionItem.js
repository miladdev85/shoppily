import React from "react";
import styled from "styled-components";

const Overlay = styled.h2`
  padding: 6px 8px 6px 8px;
  text-align: center;
  background-color: white;
  color: grey;
  cursor: pointer;
  &:hover {
    background-color: rgb(170, 170, 170);
    color: white;
  }
`;

const SectionItem = props => {
  return (
    <div style={{ marginBottom: 20 }} className="col-6 col-md-3">
      <div className="image__container">
        <div style={{ backgroundImage: `url(${props.imageUrl})` }} className="product__image" />
        <div className="product__overlay">
          <Overlay>Add to cart</Overlay>
          <Overlay>More info</Overlay>
        </div>
      </div>
      <div style={{ cursor: "pointer" }} className="product__info">
        <p className="product__name">{props.name}</p>
        <p>{props.price} kr</p>
      </div>
    </div>
  );
};

export default SectionItem;
