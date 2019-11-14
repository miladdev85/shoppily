import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProduct = item => {
    setProducts([...products, item]);
  };

  const removeProduct = id => {
    setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
  };

  const resetCart = () => {
    setProducts([]);
  };

  useEffect(() => console.log(products), [products]);

  return (
    <CartContext.Provider value={{ products, addProduct, removeProduct, resetCart }}>
      {children}
    </CartContext.Provider>
  );
};
