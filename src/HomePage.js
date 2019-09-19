import React, { useState, useEffect } from "react";
import HomeItem from "./HomeItem";
import * as network from "./Network";
import axios from "axios";

function HomePage() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const getSections = async () => {
      const response = await axios.get(network.sections);
      console.log(response.data);
      setSections(response.data);
    };
    getSections();
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {sections
        .sort((a, b) => !b.size - !a.size)
        .map(item => (
          <HomeItem key={item.id} {...item} />
        ))}
    </div>
  );
}

export default HomePage;
