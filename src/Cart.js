import React, { useContext } from "react";
import CartItem from "./CartItem";
import { CartContext } from "./Contexts/CartContext";

const Cart = () => {
  const { products, addProduct, subtractProduct } = useContext(CartContext);

  return (
    <>
      <div className="cart__main">
        <h1>Kassa</h1>
        <h3>Kontrollera din beställning</h3>
      </div>
      <div className="cart__head">
        <p className="cart__head-product">Produkt</p>
        <p className="cart__head-amount">Antal</p>
        <p className="cart__head-price">À-pris</p>
        <p className="cart__head-total">Summa</p>
      </div>
      {products.map(product => (
        <CartItem
          key={product.id + product.added}
          product={product}
          handleAdd={addProduct}
          handleSubtract={subtractProduct}
        />
      ))}
    </>
  );
};

export default Cart;
