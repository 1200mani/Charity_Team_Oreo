// Header.js
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <span role="img" aria-label="leaf">🌱</span>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/get-involved">Get Involved</Link></li>
          <li><Link to="/donate">Donate</Link></li>
          <li><Link to="/impact-areas">Impact Areas</Link></li>
          <li><Link to="/success-stories">Success Stories</Link></li>
          <li><Link to="/news">News</Link></li>
        </ul>
        <button className="contact-us">
        <Link to="/contact-us" className="contact-us">
  Contact Us <span><i className="fa fa-envelope"></i></span>
</Link>
        </button>
      </nav>
    </header>
  );
};

export default Header;
