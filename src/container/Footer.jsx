import React from "react";
import "./Footer.css"; // Import the CSS file
import { Link } from "react-router-dom";


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
          <Link to={"/"}>Home</Link>
          <Link to="/get-involved">Get Involved</Link>
          <Link to="/donate">Donate</Link>
          <Link to="/impact-areas">Impact Areas</Link>
          <Link to="/success-stories">Success Stories</Link>
          <Link to="/news">News</Link>
          <Link to="/contact-us" >Contact Us</Link>
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
