import React, { useContext } from "react";
import { CartContext } from "./Contexts/CartContext";

const Cart = () => {
  const { products } = useContext(CartContext);
  return (
    <div>
      <button>Fortsätt handla</button>
      <button>Logga in</button>
    </div>
  );
};

export default Cart;
