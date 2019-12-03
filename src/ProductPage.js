import React, { useEffect, useState, useContext } from "react";
import Loading from "./Loading";
import axios from "axios";
import CustomButton from "./CustomButton";
import { CartContext } from "./Contexts/CartContext";
import { products } from "./Utils/Network";

const ProductPage = ({ match }) => {
  const [product, setProduct] = useState({});
  const [isAdding, setIsAdding] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { addProduct } = useContext(CartContext);

  useEffect(() => {
    let didCancel = false;
    const getItem = async () => {
      setIsLoading(true);
      const response = await axios.get(
        `${products}?name_contains=${match.params.product.split("-").join(" ")}`
      );

      setProduct(response.data[0]);
      setIsLoading(false);
    };
    if (didCancel === false) {
      getItem();
    }
    return () => (didCancel = true);
  }, [match.params.product]);

  const handleAdd = () => {
    setIsAdding(true);
    setTimeout(() => {
      addProduct(product);
      setIsAdding(false);
    }, 1000);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="row productdetails">
          <div className="col-12 col-md-6 col-lg-4">
            <img
              src={product.imageUrl}
              alt="product"
              style={{ objectFit: "cover", width: "100%", height: "350px", display: "block" }}
            />
          </div>
          <div className="col productdetails__infocontent">
            <div>
              <h1 className="productdetails__title">{product.name}</h1>
              <p className="productdetails__price">
                {product.price} kr <span className="productdetails__vat">inkl. moms</span>
              </p>
              <p className="productdetails__description">{product.description}</p>
            </div>
            <div className="productdetails__button">
              <CustomButton disabled={isAdding} onClick={handleAdd}>
                {isAdding ? "Lägger till produkten" : "Lägg till i varukorgen"}
              </CustomButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPage;
