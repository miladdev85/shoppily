import React, { useEffect, useState } from "react";
import axios from "axios";
import { mainSections, sectionId } from "./Network";
import SectionItem from "./SectionItem";

const Section = ({ match }) => {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const getItems = async () => {
      const response = await axios.get(`${mainSections}/${sectionId[match.params.id]}`);
      setProducts(response.data.products);
      setTitle(response.data.title);
    };
    getItems();
  }, [match.params.id]);

  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: 30 }}>{title}</h1>
      <div className="row">
        {products.map(product => (
          <SectionItem key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Section;
