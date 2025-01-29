import React from "react";
import "./Header.css"; // Import the CSS file
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome icons

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <span role="img" aria-label="leaf">
            🌱
          </span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Get Involved</a>
          </li>
          <li>
            <a href="#">Donate</a>
          </li>
          <li>
            <a href="#">Impact Areas</a>
          </li>
          <li>
            <a href="#">Success Stories</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
        </ul>
        <button className="contact-us">
          Contact Us <i className="fa fa-envelope"></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;
