import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="form-container">
      <h2>Sign up</h2>
      <form>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            placeholder="Password"
            required
          />
        </div>
        <button className="login-btn">Signup</button>
        <div className="new-to-ema-jhon">
          Already have an Account? <Link to="/login">Login</Link>
        </div>
        <hr className="hr-divider" data-content="OR" />
        <button className="other-sign-in">
          <FcGoogle style={{ fontSize: "32px" }} />
          <p>Continue with Google</p>
        </button>
      </form>
    </div>
  );
};

export default SignUp;
