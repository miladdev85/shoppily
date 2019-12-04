import React, { useContext } from "react";
import CartItem from "./CartItem";
import CustomButton from "./CustomButton";
import { CartContext } from "./Contexts/CartContext";

const Cart = () => {
  const { products, addProduct, subtractProduct, resetCart } = useContext(CartContext);

  return (
    <div className="cartsection">
      <div className="cart__header">
        <h1>Kassa</h1>
        <h3>Kontrollera din beställning</h3>
      </div>
      <div className="cart__row">
        <p className="cart__row-product">Produkt</p>
        <p className="cart__row-amount">Antal</p>
        <p className="cart__row-price">À-pris</p>
        <p className="cart__row-total">Summa</p>
      </div>
      {products.map(product => (
        <CartItem
          key={product.id + product.added}
          product={product}
          handleAdd={addProduct}
          handleSubtract={subtractProduct}
        />
      ))}
      {products.length > 0 && (
        <div className="actionsection">
          <CustomButton onClick={resetCart} styling="pinkButton">
            Töm varukorgen
          </CustomButton>
        </div>
      )}
    </div>
  );
};

export default Cart;
