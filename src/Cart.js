import React, { useContext } from "react";
import CartItem from "./CartItem";
import { CartContext } from "./Contexts/CartContext";

const Cart = () => {
  const { products, addProduct } = useContext(CartContext);

  const products2 = [
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
      amount: 3,
      createdAt: "2019-09-18T21:51:36.735Z",
      id: "5d82a6e89c1fsd3b30017fd083c",
      imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
      mainsection: "5d82a7329c13b30017fd083f",
      name: "Adidas NMD",
      price: 1299,
      updatedAt: "2019-09-19T20:59:29.928Z",
      __v: 0,
      _id: "5d82a6e89c13b30017fd083c"
    }
  ];
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
        <CartItem key={product.id + product.added} product={product} handleAdd={addProduct} />
      ))}
    </>
  );
};

export default Cart;
