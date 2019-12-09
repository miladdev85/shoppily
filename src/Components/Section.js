import React, { useEffect, useState, useContext, useRef } from "react";
import Loading from "./Loading";
import Error from "./Error";
import axios from "axios";
import { mainSections, sectionId } from "../Utils/Network";
import SectionItem from "./SectionItem";
import { CartContext } from "../Contexts/CartContext";

const Section = ({ match }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [disableButtons, setDisableButtons] = useState(false);

  const { addProduct } = useContext(CartContext);

  //Using a ref to know if the component is mounted or not. We will use this so that we don't update state in case component is unmounted
  const isMounted = useRef(false);

  //We clean up by setting isMounted.current to false. If it is false, we won't update the state in handleAdd function.
  useEffect(() => {
    isMounted.current = true;
    return () => (isMounted.current = false);
  }, []);

  // Clean up in useEffect by return function that sets didCancel to true so we don't try and set state on unmounted component.
  // We check the condition of didCancel every time we set state in useEffect.
  useEffect(() => {
    let didCancel = false;

    const getItems = async () => {
      try {
        const response = await axios.get(`${mainSections}/${sectionId[match.params.id]}`);

        if (!didCancel) {
          setProducts(response.data.products);
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };
    if (!didCancel) {
      setIsLoading(true);
      getItems();
    }
    return () => (didCancel = true);
  }, [match.params.id]);

  // Simulating async function for adding items to cart so we can have loading state. Also to disable "Add to cart" buttons when we're working on adding to cart.
  // We check if the component is mounted and only if it is mounted, we perform the state changes in the setTimeout
  const handleAdd = item => {
    setSelectedProduct(item);
    setDisableButtons(true);
    setTimeout(() => {
      if (isMounted.current) {
        addProduct(item);
        setSelectedProduct({});
        setDisableButtons(false);
      }
    }, 1000);
  };

  return (
    <>
      {isLoading && <Loading />}
      {error && <Error message={error} />}

      {!isLoading && !error && (
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
