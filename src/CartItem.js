import React from "react";

const CartItem = ({ product, handleAdd, handleSubtract }) => {
  const totalPrice = product.amount * product.price;

  return (
    <div className="cart__product">
      <p className="cart__product-name">{product.name}</p>
      <div className="cart__product-amount">
        <i className="fas fa-minus amount-minus" onClick={() => handleSubtract(product)}></i>
        <p>{product.amount}</p>
        <i className="fas fa-plus amount-plus" onClick={() => handleAdd(product)}></i>
      </div>
      <p className="cart__product-price">{product.price.toLocaleString()} kr</p>
      <p className="cart__product-total">{totalPrice.toLocaleString()} kr</p>
    </div>
  );
};

export default CartItem;
