import React, { useState, useEffect } from "react";
import Header from "./Header";
import HomePage from "./HomePage";
import Section from "./Section";
import Breadcrumb from "./Breadcrumb";
import About from "./About";
import Loading from "./Loading";
import * as network from "./Utils/Network";
import axios from "axios";
import { Route } from "react-router-dom";
import "./styles/styles.scss";

function App() {
  const [sections, setSections] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let didCancel = false;
    const getSections = async () => {
      setIsLoading(true);
      const response = await axios.get(network.sections);
      setSections(response.data);
      setIsLoading(false);
    };
    if (didCancel === false) {
      getSections();
    }
    return () => (didCancel = true);
  }, []);

  return (
    <main style={{ minHeight: "100vh" }} className="contain">
      <Header />
      {isLoading ? (
        <Loading />
      ) : (
        <Route exact path="/" render={() => <HomePage sections={sections} />} />
      )}
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
      <Route exact path="/projektet" component={About} />
    </main>
  );
}

export default App;
