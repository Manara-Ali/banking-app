// IMPORT APP CSS
import "./App.css";

// 1. IMPORT REACT
import React from "react";

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
