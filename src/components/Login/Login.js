import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/UserContext";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // sign in using firebase authentication
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        toast.success("User Signed in successfully!");
        console.log(user);
      })
      .catch((error) => {
        toast.warning(`Unable to login: ${error.code}`);
        console.log(error);
      });
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            id="password"
            placeholder="******"
          />
        </div>
        <input className="login-btn" type="submit" value="Login" />
      </form>
      <div className="new-to-ema-jhon">
        New to Ema-Jhon? <Link to="/signup">Create New Account</Link>
      </div>
      <hr className="hr-divider" data-content="OR" />
      <button className="other-sign-in">
        <FcGoogle style={{ fontSize: "32px" }} />
        <p>Continue with Google</p>
      </button>
    </div>
  );
};

export default Login;
