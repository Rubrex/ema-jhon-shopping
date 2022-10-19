import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/UserContext";
import "./SignUp.css";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  // states
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    setError(null);
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      setError("Password did not match");
      return;
    }

    // Create a new user using firebase authentication
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // Reset Form Inputs as soon as registration is complete
        form.reset();

        toast.success("Registration complete");

        console.log(user);
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.code);
      });
  };

  return (
    <div className="form-container">
      <h2>Sign up</h2>
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
        <div className="form-control">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Password"
            required
          />
        </div>
        <span className="form-error">{error}</span>
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
