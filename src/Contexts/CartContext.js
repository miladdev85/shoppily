import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProduct = item => {
    let updatedProducts = [];

    if (products.find(product => product.id === item.id)) {
      updatedProducts = products.map(product => {
        if (product.id === item.id) {
          return { ...product, amount: (product.amount += 1) };
        }
        return product;
      });
    } else {
      updatedProducts = [...products, { ...item, amount: 1 }];
    }
    setProducts(updatedProducts);
  };

  const removeProduct = id => {
    setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
  };

  const resetCart = () => {
    setProducts([]);
  };

  return (
    <CartContext.Provider value={{ products, addProduct, removeProduct, resetCart }}>
      {children}
    </CartContext.Provider>
  );
};
