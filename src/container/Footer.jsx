import React from "react";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-logo">
          <i className="fa fa-child"></i>
        </div>

        {/* Navigation Links */}
        <nav className="footer-nav">
          <a href="#">Home</a>
          <a href="#">Get Involved</a>
          <a href="#">Donate</a>
          <a href="#">Impact Areas</a>
          <a href="#">Success Stories</a>
          <a href="#">News</a>
          <a href="#">Contact Us</a>
        </nav>

        {/* Social Media Icons */}
        <div className="footer-social-icons">
          <div><i className="fa-brands fa-facebook-f"></i></div>
          <div><i className="fa-brands fa-twitter"></i></div>
          <div><i className="fa-brands fa-linkedin-in"></i></div>
        </div>
      </div>

      {/* Copyright */}
      <p className="footer-copyright">
        © 2024 ForHelp. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
