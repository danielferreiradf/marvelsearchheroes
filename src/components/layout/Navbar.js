import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.jpg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__menu" />
        <Link to="/">
          <img src={Logo} alt="Marvel Logo" className="navbar__menu-logo" />
          <p>Search Heroes</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
