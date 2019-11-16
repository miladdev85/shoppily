import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      amount: 2,
      createdAt: "2019-09-19T09:46:03.525Z",
      id: "5d834e5b3850e50017d4efea",
      imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
      mainsection: "5d82a76e9c13b30017fd0845",
      name: "Blue Beanie",
      price: 29,
      updatedAt: "2019-09-19T20:55:21.733Z",
      __v: 0,
      _id: "5d834e5b3850e50017d4efea"
    },
    {
      amount: 1,
      createdAt: "2019-09-18T21:51:36.735Z",
      id: "5d82a6e89c13b30017fd083c",
      imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
      mainsection: "5d82a7329c13b30017fd083f",
      name: "Adidas Yeezy",
      price: 3299,
      updatedAt: "2019-09-19T20:59:29.928Z",
      __v: 0,
      _id: "5d82a6e89c13b30017fd083c"
    },
    {
      amount: 5,
      createdAt: "2019-09-19T09:55:42.896Z",
      id: "5d83509e3850e50017d4efef",
      imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png",
      mainsection: "5d82a76e9c13b30017fd0845",
      name: "Red Beanie",
      price: 89,
      updatedAt: "2019-09-19T20:55:52.482Z",
      __v: 0,
      _id: "5d83509e3850e50017d4efef"
    }
  ]);

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
