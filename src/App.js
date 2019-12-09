import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import { CartProvider } from "./Contexts/CartContext";
import HomePage from "./Components/HomePage";
import Section from "./Components/Section";
import Error from "./Components/Error";
import Breadcrumb from "./Components/Breadcrumb";
import About from "./Components/About";
import Cart from "./Components/Cart";
import SignInPage from "./Components/SignInPage";
import Loading from "./Components/Loading";
import * as network from "./Utils/Network";
import axios from "axios";
import { Route } from "react-router-dom";
import ResetPassword from "./Components/ResetPassword";
import ProductPage from "./Components/ProductPage";
import "./styles/styles.scss";

function App() {
  const [sections, setSections] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);

  // Clean up in useEffect by return function that sets didCancel to true so we don't try and set state on unmounted component.
  // We check the condition of didCancel every time we set state in useEffect.
  useEffect(() => {
    let didCancel = false;

    const getSections = async () => {
      try {
        const response = await axios.get(network.sections);

        //Sort array before putting it in state because sort will mutate array if we do it later - more easy and practical to do it now.
        //Sorting the array by poster size so that we have correct design on landing page. Because the size property is affected on CSS classname in HomePage/HomeItem component.
        response.data.sort((a, b) => !b.size - !a.size);
        if (!didCancel) {
          setSections(response.data);
          setFirstLoad(false);
          setIsLoading(false);
        }
      } catch (error) {
        if (!didCancel) {
          setIsLoading(false);
          setError(error.message);
        }
      }
    };
    if (!didCancel) {
      setIsLoading(true);
      getSections();
    }
    return () => (didCancel = true);
  }, []);

  return (
    <CartProvider>
      <main className="contain">
        <Header />
        <Breadcrumb sections={sections} />
        <Route
          exact
          path="/"
          render={() => (
            <>
              {isLoading && (
                <Loading message={firstLoad ? "Please wait for Heroku server to wake up" : ""} />
              )}
              {error && <Error message={error} />}
              {!isLoading && !error && <HomePage sections={sections} />}
            </>
          )}
        />

        <Route exact path="/avdelning/:id" component={Section} />
        <Route exact path="/avdelning/:id/:product" component={ProductPage} />
        <Route exact path="/kundkorg" component={Cart} />
        <Route exact path="/projektet" component={About} />
        <Route exact path="/loggain" component={SignInPage} />
        <Route exact path="/aterstall" component={ResetPassword} />
      </main>
    </CartProvider>
  );
}

export default App;
