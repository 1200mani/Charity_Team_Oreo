
import React, { useState } from "react";
import "./Header.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <span role="img" aria-label="leaf">🌱</span>
        </div>
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Get Involved</a></li>
          <li><a href="#">Donate</a></li>
          <li><a href="#">Impact Areas</a></li>
          <li><a href="#">Success Stories</a></li>
          <li><a href="#">News</a></li>
        </ul>
        <button className="contact-us">
          Contact Us <i className="fa fa-envelope"></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;