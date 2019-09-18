import React from "react";
import HomeItem from "./HomeItem";
import { SECTIONS as sections } from "./data";

function HomePage() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", marginTop: 20 }}>
      {sections.map(item => (
        <HomeItem key={item.id} {...item} />
      ))}
    </div>
  );
}

export default HomePage;
