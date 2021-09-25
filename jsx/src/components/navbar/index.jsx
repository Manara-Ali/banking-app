// IMPORT CSS
import "./Navbar.css";

// 1. IMPORT REACT
import { React, useEffect, useRef } from "react";

// 2. ADDITIONAL IMPORTS
import { Link } from "react-router-dom";
import logo from "./../../images/appLogo.png";

// 3. CREATE A FUNCTION BASED COMPONENT
const Navbar = () => {
  //////////////////////////////// Creating Reference Elements
  // Create a reference element on the ul tag to recognize only clicks to links
  const ulRef = useRef();

  // Create a reference element on the image to recognize clicks on the image
  const imgRef = useRef();

  // Create a reference element to target the home node
  const homeRef = useRef();

  /////////////////////////////// ATTACHING EVENT LISTENER TO THE NAVBAR
  // Attach event listener to the document as soon as the page loads
  useEffect(() => {
    // Create an eventListener
    document.querySelector(".container").addEventListener("click", (e) => {
      // Find the element that was clicked on
      if (Object.values(ulRef.current.children).includes(e.path[1])) {
        // Remove the class name from its previous element
        document.querySelector(".current").classList.remove("current");
        // Add the class name to the element the user clicked on
        e.target.classList.add("current");
      } else if (e.target === imgRef.current) {
        document.querySelector(".current").classList.remove("current");
        homeRef.current.classList.add("current");
      }
    });
  }, []);

  //////////////////////////////// RETURN JSX TO THE SCREEN
  // Return component to the screen
  return (
    <div className="container">
      <div className="nav-logo">
        <Link to="/">
          <img className="logo" src={logo} alt="" ref={imgRef} />
        </Link>
        <p style={{ marginLeft: "14px" }}>
          Bank
          <br />
          Nerd
        </p>
      </div>
      <ul className="nav-container" ref={ulRef}>
        <Link className="nav-links" to="/">
          <li className="current" id="home" ref={homeRef}>
            HOME
          </li>
        </Link>
        <Link className="nav-links" to="/services">
          <li id="services">SERVICES</li>
        </Link>
        <Link className="nav-links" to="/contact">
          <li id="contact">CONTACT</li>
        </Link>
        <Link className="nav-links" to="/login">
          <li id="login">LOGIN</li>
        </Link>
        <Link className="nav-links" to="/signup">
          <li id="signup">SIGNUP</li>
        </Link>
      </ul>
    </div>
  );
};

// 4. EXPORT COMPONENT TO BE USED IN OTHER PARTS OF OUR APPLICATION
export default Navbar;
