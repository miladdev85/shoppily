import React, { useEffect, useState, useContext, useRef } from "react";
import Loading from "./Loading";
import axios from "axios";
import Error from "./Error";
import CustomButton from "./CustomButton";
import { CartContext } from "../Contexts/CartContext";
import { products } from "../Utils/Network";

const ProductPage = ({ match, history }) => {
  const [product, setProduct] = useState({});
  const [error, setError] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { addProduct } = useContext(CartContext);

  //Using a ref to know if the component is mounted or not. We will use this so that we don't update state in case component is unmounted
  const isMounted = useRef(false);

  //We clean up by setting isMounted.current to false. If it is false, we won't update the state in handleAdd function.
  useEffect(() => {
    isMounted.current = true;
    return () => (isMounted.current = false);
  }, []);

  useEffect(() => {
    let didCancel = false;
    const getItem = async () => {
      try {
        const response = await axios.get(
          `${products}?name_contains=${match.params.product.split("-").join(" ")}`
        );

        if (!didCancel) {
          setProduct(response.data[0]);
          setIsLoading(false);
        }
      } catch (error) {
        if (!didCancel) {
          setIsLoading(false);
          setError(error.message);
        }
      }
    };
    if (didCancel === false) {
      setIsLoading(true);
      getItem();
    }
    return () => (didCancel = true);
  }, [match.params.product]);

  // Simulating async function for adding items to cart so we can have loading state. Also to disable "Add to cart" button when we're working on adding to cart.
  // We check if the component is mounted and only if it is mounted, we perform the state changes in the setTimeout
  const handleAdd = () => {
    setIsAdding(true);
    setTimeout(() => {
      if (isMounted.current) {
        addProduct(product);
        setIsAdding(false);
      }
    }, 1000);
  };

  // Using params from match so we can handle users who visit the site by a direct link to a product
  // Fits our need right now, but could get troublesome if we have subtrees etc.

  const handleBack = () => {
    history.push(`/avdelning/${match.params.id}`);
  };

  return (
    <>
      {isLoading && <Loading />}
      {error && <Error message={error} />}
      {!isLoading && !error && (
        <div className="row productdetails fadeIn">
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
              <CustomButton styling="blueButton" onClick={handleBack}>
                Tillbaka
              </CustomButton>
              <CustomButton styling="greenButton" disabled={isAdding} onClick={handleAdd}>
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
