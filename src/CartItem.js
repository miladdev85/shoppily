import React from "react";

const CartItem = ({ product, handleAdd, handleSubtract }) => {
  const totalPrice = product.amount * product.price;

  return (
    <div className="cartitem">
      <p className="cartitem__name">{product.name}</p>
      <div className="cartitem__amount">
        <i className="fas fa-chevron-down amount-minus" onClick={() => handleSubtract(product)}></i>
        <p>{product.amount}</p>
        <i className="fas fa-chevron-up amount-plus" onClick={() => handleAdd(product)}></i>
      </div>
      <p className="cartitem__price">{product.price.toLocaleString()} kr</p>
      <p className="cartitem__total">{totalPrice.toLocaleString()} kr</p>
    </div>
  );
};

export default CartItem;
