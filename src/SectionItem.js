import React, { useContext, useState } from "react";
import { CartContext } from "./Contexts/CartContext";
import Spinner from "react-bootstrap/Spinner";

const SectionItem = ({ item }) => {
  const [loading, setLoading] = useState(false);
  const { addProduct } = useContext(CartContext);

  const handleAdd = item => {
    setLoading(true);
    setTimeout(() => {
      addProduct(item);
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <div style={{ marginBottom: 20 }} className="col-6 col-md-3">
        <div className="image__container">
          <div style={{ backgroundImage: `url(${item.imageUrl})` }} className="product__image" />
          <div className="product__overlay">
            <h3 onClick={() => !loading && handleAdd(item)} className="product__overlay__button">
              {loading ? (
                <>
                  <Spinner
                    as="span"
                    animation="grow"
                    size="lg"
                    role="status"
                    aria-hidden="true"
                    className="product-loader"
                  />
                </>
              ) : (
                "Lägg till"
              )}
            </h3>
            {/* <h3 className="product__overlay__button">Mer info</h3> */}
          </div>
        </div>
        <div className="product__info">
          <p className="product__name">{item.name}</p>
          <p className="product__price">{item.price} kr</p>
        </div>
      </div>
    </>
  );
};

export default SectionItem;
