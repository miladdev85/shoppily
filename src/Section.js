import React, { useEffect, useState } from "react";
import queryString from "query-string";
import axios from "axios";
import SectionItem from "./SectionItem";

const Section = props => {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");
  const parsed = queryString.parse(props.location.search);

  useEffect(() => {
    const getItems = async () => {
      const response = await axios.get(`http://localhost:1337/sections/${parsed.sectionId}`);
      console.log(response.data.products);
      setProducts(response.data.products);
      setTitle(response.data.title);
    };
    getItems();
  }, [parsed.sectionId]);

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
