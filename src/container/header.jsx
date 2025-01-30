
import React, { useState } from "react";
import "./Header.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <span role="img" aria-label="leaf">🌱</span>
        </div>
        <button className="lines-header" onClick={() => setIsOpen(!isOpen)}>
          <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><Link to ={"/"}>Home</Link></li>
          <li><Link to="/get-involved">Get Involved</Link></li>
          <li><Link to="/donate">Donate</Link></li>
          <li><Link to="/impact-areas">Impact Areas</Link></li>
          <li><Link to="/success-stories">Success Stories</Link></li>
          <li><Link to="/news">News</Link></li>
        </ul>
        <button className="contact-us hidden-on-mobile">
          <Link to="/contact-us" >Contact Us <i className="fa fa-envelope"></i></Link>
        </button>
      </nav>
    </header>
  );
};

export default Header;