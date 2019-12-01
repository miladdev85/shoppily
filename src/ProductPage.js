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

      setProduct(response.data[0]);
      setIsLoading(false);
    };
    if (didCancel === false) {
      getItem();
    }
    return () => (didCancel = true);
  }, [match.params.product]);

  // Add more details, add to cart and quantity input. 2019-12-02

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="productdetails">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <img
                src={product.imageUrl}
                alt="product"
                style={{ objectFit: "cover", width: "100%", height: "350px" }}
              />
            </div>
            <div className="col">
              <p>{product.description}</p>
            </div>
          </div>
          <p style={{ marginTop: "4rem", textAlign: "center" }}>More details coming soon...</p>
        </div>
      )}
    </>
  );
};

export default ProductPage;
