import React from "react";
import { Link, withRouter } from "react-router-dom";

// Using withRouter HOC to get location object as props. We use location when sending to user to the correct product.

const SectionItem = ({ location, item, addItem, selectedProduct, disableButtons }) => {
  // Function to provide easier url path that we use in Link.
  const convertItemName = str => {
    return str
      .split(" ")
      .join("-")
      .toLowerCase();
  };

  return (
    <div className="productwrapper col-6 col-md-3 fadeIn">
      <div className="shadow">
        <div className="imagewrapper">
          <div style={{ backgroundImage: `url(${item.imageUrl})` }} className="product__image" />
          <div className="product__overlay">
            <button
              disabled={disableButtons}
              onClick={() => addItem(item)}
              className="product__overlay-button"
            >
              {selectedProduct.id === item.id ? <p>Vänta...</p> : "Lägg till"}
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
