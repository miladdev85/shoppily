import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import axios from "axios";
import { mainSections, sectionId } from "./Network";
import SectionItem from "./SectionItem";

const Section = ({ match }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="row">
          {products.map(product => (
            <SectionItem key={product.id} {...product} />
          ))}
        </div>
      )}
    </>
  );
};

export default Section;
