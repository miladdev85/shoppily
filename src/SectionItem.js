import React, { useContext, useState } from "react";
import { CartContext } from "./Contexts/CartContext";
import { Link, withRouter } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const SectionItem = ({ location, item }) => {
  const [loading, setLoading] = useState(false);
  const { addProduct } = useContext(CartContext);

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
    <div className="product__container col-6 col-md-3">
      <div className="product">
        <div className="image__container">
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
        <div className="product__info">
          <p className="product__name">{item.name}</p>
          <p className="product__price">{item.price} kr</p>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SectionItem);
