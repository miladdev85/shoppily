import React, { useState, useEffect } from "react";
import Header from "./Header";
import { CartProvider } from "./Contexts/CartContext";
import HomePage from "./HomePage";
import Section from "./Section";
import Breadcrumb from "./Breadcrumb";
import About from "./About";
import Cart from "./Cart";
import SignInPage from "./SignInPage";
import Loading from "./Loading";
import * as network from "./Utils/Network";
import axios from "axios";
import { Route } from "react-router-dom";
import "./styles/styles.scss";
import ResetPassword from "./ResetPassword";
import Details from "./Details";

function App() {
  const [sections, setSections] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    let didCancel = false;
    const getSections = async () => {
      setIsLoading(true);
      const response = await axios.get(network.sections);

      //Sort array before putting it in state because sort will mutate array if we do it later - more easy and practical to do it now.
      //Sorting the array by poster size so that we have correct design on homepage.
      response.data.sort((a, b) => !b.size - !a.size);

      setSections(response.data);
      setFirstLoad(false);
      setIsLoading(false);
    };
    if (didCancel === false) {
      getSections();
    }
    return () => (didCancel = true);
  }, []);

  return (
    <CartProvider>
      <main className="contain">
        <Header />
        <Route
          exact
          path="/"
          render={() => (
            <>
              {isLoading ? (
                <Loading message={firstLoad ? "Please wait for Heroku server to wake up" : ""} />
              ) : (
                <HomePage sections={sections} />
              )}
            </>
          )}
        />

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
        <Route
          exact
          path="/avdelning/:id/:product"
          render={props => (
            <>
              <Breadcrumb sections={sections} {...props} />
              <Details />
            </>
          )}
        />
        <Route exact path="/kundkorg" component={Cart} />
        <Route exact path="/projektet" component={About} />
        <Route exact path="/loggain" component={SignInPage} />
        <Route exact path="/aterstall" component={ResetPassword} />
      </main>
    </CartProvider>
  );
}

export default App;
