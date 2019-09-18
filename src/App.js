import React from "react";
import Header from "./Header";
import HomePage from "./HomePage";
import Section from "./Section";
import { Route } from "react-router-dom";
import "./styles/styles.scss";

function App() {
  return (
    <div className="container_">
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/avdelning/:id" component={Section} />
    </div>
  );
}

export default App;
