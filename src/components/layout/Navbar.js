import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.jpg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/">
          <img src={Logo} alt="Marvel Logo" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
