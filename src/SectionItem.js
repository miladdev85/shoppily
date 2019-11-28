import React, { useContext, useState } from "react";
import { CartContext } from "./Contexts/CartContext";
import { Link, withRouter } from "react-router-dom";

const SectionItem = ({ location, item }) => {
  const [loading, setLoading] = useState(false);
  const { addProduct } = useContext(CartContext);

  // Simulating async function for adding items to cart so we can have loading state
  const handleAdd = item => {
    setLoading(true);
    setTimeout(() => {
      addProduct(item);
      setLoading(false);
    }, 1000);
  };

  const convertItemName = str => {
    return str
      .split(" ")
      .join("-")
      .toLowerCase();
  };

  return (
    <div className="productwrapper col-6 col-md-3">
      <div className="shadow">
        <div className="imagewrapper">
          <div style={{ backgroundImage: `url(${item.imageUrl})` }} className="product__image" />
          <div className="product__overlay">
            <button onClick={() => !loading && handleAdd(item)} className="product__overlay-button">
              {loading ? <p>Vänta...</p> : "Lägg till"}
            </button>
            <button className="product__overlay-button">
              <Link
                className="product__overlay-link"
                to={{
                  pathname: `${location.pathname}/${convertItemName(item.name)}`
                }}
              >
                Mer info
              </Link>
            </button>
          </div>
        </div>
        <Link
          className="product__overlay-link"
          to={{
            pathname: `${location.pathname}/${convertItemName(item.name)}`
          }}
        >
          <div className="product__info">
            <p className="product__name">{item.name}</p>
            <p className="product__price">{item.price} kr</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default withRouter(SectionItem);
