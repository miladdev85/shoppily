import React, { useState, useEffect } from "react";
import Header from "./Header";
import HomePage from "./HomePage";
import Section from "./Section";
import Breadcrumb from "./Breadcrumb";
import * as network from "./Network";
import axios from "axios";
import { Route } from "react-router-dom";
import "./styles/styles.scss";

function App() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const getSections = async () => {
      const response = await axios.get(network.sections);
      setSections(response.data);
    };
    getSections();
  }, []);

  return (
    <main style={{ minHeight: "100vh" }} className="contain">
      <Header />
      <Route exact path="/" render={() => <HomePage sections={sections} />} />
      <Route
        exact
        path="/avdelning/:id"
        render={props => (
          <>
            <Breadcrumb sections={sections} {...props} />
            <Section {...props} />
          </>
        )}
      />
    </main>
  );
}

export default App;
