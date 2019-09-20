import React, { useEffect, useState } from "react";
import axios from "axios";
import { mainSections, sectionId } from "./Network";
import SectionItem from "./SectionItem";

const Section = ({ match }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const response = await axios.get(`${mainSections}/${sectionId[match.params.id]}`);
      setProducts(response.data.products);
    };
    getItems();
  }, [match.params.id]);

  return (
    <div className="row">
      {products.map(product => (
        <SectionItem key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Section;
