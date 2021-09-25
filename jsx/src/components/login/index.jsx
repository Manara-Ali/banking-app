// 1. IMPORT REACT
import React from "react";

// 2. ADDITIONAL IMPORTS

// 3. CREATE A FUNCTION BASED COMPONENT
const Login = () => {
  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div id="container">
      <br />
      <br />
      <br />
      <br />
      <div className="form-wrap">
        <h1>Log In</h1>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
          </div>
          <div className="form-group">
            <label htmlFor="pin">PIN</label>
            <input type="text" name="pin" id="pin" />
          </div>
          <button
            onClick={(e) => {
              return handleSubmit(e);
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

// 4. EXPORT COMPONENT TO BE USED IN OTHER PARTS OF OUR APPLICATION
export default Login;
