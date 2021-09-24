// 1. IMPORT REACT
import React, { Link } from "react";

// 2. ADDITIONAL IMPORTS

// 3. CREATE A FUNCTION BASED COMPONENT
const SignUp = () => {
  return (
    <div id="container">
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
            <label htmlFor="password">PassWord</label>
            <input type="text" name="password" id="password" />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm PassWord</label>
            <input type="text" name="confirmPassword" id="confirm-password" />
          </div>
          <button>Submit</button>
        </form>
        <div className="member">
          <p>Already a member?</p>
          {/* <Link to="/login">Login Here</Link> */}
        </div>
      </div>
    </div>
  );
};

// 4. EXPORT COMPONENT TO BE USED IN OTHER PARTS OF OUR APPLICATION
export default SignUp;
