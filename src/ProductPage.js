import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import axios from "axios";
import { products } from "./Utils/Network";

const ProductPage = ({ match }) => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let didCancel = false;
    const getItem = async () => {
      setIsLoading(true);
      const response = await axios.get(
        `${products}?name_contains=${match.params.product.split("-").join(" ")}`
      );
      console.log(response.data[0]);
      setProduct(response.data[0]);
      setIsLoading(false);
    };
    if (didCancel === false) {
      getItem();
    }
    return () => (didCancel = true);
  }, [match.params.product]);

  return (
    <div>
      <h1>Product Page Coming Soon</h1>
    </div>
  );
};

export default ProductPage;
