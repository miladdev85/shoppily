import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const sortArray = (array, value) => {
    return array.sort((a, b) => {
      const valueA = a[value].toLowerCase();
      const valueB = b[value].toLowerCase();
      return valueA < valueB ? -1 : 1;
    });
  };

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

    const sortedProducts = sortArray(updatedProducts, "name");

    setProducts(sortedProducts);
  };

  const subtractProduct = item => {
    const updatedProduct = { ...item };
    updatedProduct.amount -= 1;
    const updatedProducts = products.filter(product => product.id !== updatedProduct.id);

    if (updatedProduct.amount >= 1) {
      const sortedProducts = sortArray([...updatedProducts, updatedProduct], "name");
      setProducts(sortedProducts);
    } else {
      const sortedProducts = sortArray([...updatedProducts], "name");
      setProducts(sortedProducts);
    }
  };

  const removeProduct = id => {
    setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
  };

  const resetCart = () => {
    setProducts([]);
  };

  return (
    <CartContext.Provider
      value={{ products, addProduct, subtractProduct, removeProduct, resetCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
