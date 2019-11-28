import React from "react";
import HomeItem from "./HomeItem";

function HomePage({ sections }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", marginTop: "20px" }}>
      {sections && sections.map(item => <HomeItem key={item.id} {...item} />)}
    </div>
  );
}

export default HomePage;
