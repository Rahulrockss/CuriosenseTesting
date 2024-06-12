import React, { useContext, useState } from "react";
import "../Components/NavBar.css";
import Logo from "../Images/Logo.jpeg";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../App";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const { user } = useContext(UserContext);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <NavLink to="/">
            <img src={Logo} alt="Logo" />
          </NavLink>
        </div>
        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <Link to="/" onClick={toggleNavbar}>
            Home
          </Link>
          <Link to="/about" onClick={toggleNavbar}>
            About
          </Link>
          <Link to="/product" onClick={toggleNavbar}>
            Products
          </Link>
          <Link to="/team" onClick={toggleNavbar}>
            Team
          </Link>
          <Link to="/awards" onClick={toggleNavbar}>
            Awards
          </Link>
          {!user ? (
            <Link to="/login" className="navbar-button" onClick={toggleNavbar}>
              Log In
            </Link>
          ) : (
            <>
              <Link to="/dashboard" onClick={toggleNavbar}>
                Dashboard
              </Link>
              <Link to="/logout" className="navbar-button" onClick={toggleNavbar}>
                Log Out
              </Link>
            </>
          )}
        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
