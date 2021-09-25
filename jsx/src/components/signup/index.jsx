// IMPORT SIGNUP CSS
import "./Signup.css";

// 1. IMPORT REACT
import React from "react";

// 2. ADDITIONAL IMPORTS
import { Link } from "react-router-dom";

// 3. CREATE A FUNCTION BASED COMPONENT
const SignUp = () => {
  const handleClick = (e) => {
    if (e.target.className === "member-login") {
      document.querySelector(".current").classList.remove("current");
      document.querySelector("#login").classList.add("current");
    }
  };
  return (
    <div id="container">
      <br />
      <div className="form-wrap">
        <h1>Sign Up</h1>
        <form>
          <div className="form-group">
            <label htmlFor="first-name">First Name</label>
            <input type="text" name="firstName" id="first-name" />
          </div>
          <div className="form-group">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" name="lastName" id="last-name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="text" name="password" id="password" />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="text" name="confirmPassword" id="confirm-password" />
          </div>
          <button>Submit</button>
        </form>
        <div className="member">
          Already a member?
          <Link
            to="/login"
            className="member-login"
            onClick={(e) => {
              return handleClick(e);
            }}
          >
            Login Here
          </Link>
        </div>
      </div>
    </div>
  );
};

// 4. EXPORT COMPONENT TO BE USED IN OTHER PARTS OF OUR APPLICATION
export default SignUp;
