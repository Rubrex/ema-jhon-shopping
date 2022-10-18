import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const handleSubmit = (event) => {
    const form = event.target;
    const email = form.email;
    const password = form.password;
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button className="login-btn">Login</button>
        <div className="new-to-ema-jhon">
          New to Ema-Jhon? <Link to="/signup">Create New Account</Link>
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

export default Login;
