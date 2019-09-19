import React, { useEffect, useState } from "react";
// import queryString from "query-string";
import axios from "axios";
import { mainSections, sectionId } from "./Network";
import SectionItem from "./SectionItem";

const Section = ({ match }) => {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const getItems = async () => {
      const response = await axios.get(`${mainSections}/${sectionId[match.params.id]}`);
      console.log(response.data.products);
      setProducts(response.data.products);
      setTitle(response.data.title);
    };
    getItems();
  }, [match.params.id]);

  return (
    <div>
      <h1>{title}</h1>
      {products.map(product => (
        <SectionItem key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Section;
