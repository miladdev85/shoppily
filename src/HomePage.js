import React, { useState, useEffect } from "react";
import HomeItem from "./HomeItem";
import axios from "axios";

function HomePage() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const getSections = async () => {
      const response = await axios.get("http://localhost:1337/mainsections");
      console.log(response.data);
      setSections(response.data);
    };
    getSections();
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {sections
        .sort((a, b) => (b.size === null) - (a.size === null))
        .map(item => (
          <HomeItem key={item.id} {...item} />
        ))}
    </div>
  );
}

export default HomePage;
