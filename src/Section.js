import React, { useEffect, useState, useContext } from "react";
import Loading from "./Loading";
import axios from "axios";
import { mainSections, sectionId } from "./Utils/Network";
import SectionItem from "./SectionItem";
import { CartContext } from "./Contexts/CartContext";

const Section = ({ match }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [disableButtons, setDisableButtons] = useState(false);

  const { addProduct } = useContext(CartContext);

  useEffect(() => {
    let didCancel = false;
    const getItems = async () => {
      setIsLoading(true);
      const response = await axios.get(`${mainSections}/${sectionId[match.params.id]}`);
      setProducts(response.data.products);
      setIsLoading(false);
    };
    if (didCancel === false) {
      getItems();
    }
    return () => (didCancel = true);
  }, [match.params.id]);

  // Simulating async function for adding items to cart so we can have loading state
  // Also to disable "Add to cart" buttons when we're working on adding to cart
  const handleAdd = item => {
    setSelectedProduct(item);
    setDisableButtons(true);
    setTimeout(() => {
      addProduct(item);
      setSelectedProduct({});
      setDisableButtons(false);
    }, 1000);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="row">
          {products.map(product => (
            <SectionItem
              key={product.id}
              item={product}
              addItem={handleAdd}
              selectedProduct={selectedProduct}
              disableButtons={disableButtons}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Section;
