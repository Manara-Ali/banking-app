// IMPORT APP CSS
import "./App.css";

// 1. IMPORT REACT
import React, { useEffect } from "react";

// 2. ADDITIONAL IMPORTS
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./home";
import Services from "./services";
import Contact from "./contact";
import Login from "./login";
import SignUp from "./signup";
import Footer from "./footer";

// 3. CREATE A FUNCTION BASED COMPONENT
const App = () => {
  // Use this Effect to keep the tab orange indicator where it currently is whenever the page is refreshed
  useEffect(() => {
    // Find the current location of the tab indicator using the url location
    const currentElement = window.location.pathname.split("/")[1];

    // If there is a path following the home url, remove the indicator from the home tab (which is the default when reloading the page) and add it to the current url location
    if (currentElement) {
      document.querySelector(".current").classList.remove("current");
      document.querySelector(`#${currentElement}`).classList.add("current");
    } else {
      // Otherwise if the tab is already home the split method will return null, therefore we need to manually add it to the home tab
      document.querySelector("#home").classList.add("current");
    }
  }, []);
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

// 4. EXPORT COMPONENT TO BE USED IN OTHER PARTS OF OUR APPLICATION
export default App;
