import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import logo from "../../images/Logo.svg";
import "./Header.css";
const Header = () => {
  const { myUser } = useContext(AuthContext);
  return (
    <nav>
      <div className="header-wrapper">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <div className="header-navs">
          <Link to="/orders">Orders</Link>
          <Link to="/inventory">Inventory</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
          <span
            style={{
              color: "white",
              marginLeft: "10px",
              border: "1px solid white",
              padding: "10px",
            }}
          >
            {myUser?.displayName}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
