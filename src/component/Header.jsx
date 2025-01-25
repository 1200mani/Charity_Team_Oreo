import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const toggleNav = () => {
    document.querySelector("nav").classList.toggle("active");
  };

  return (
    <header>
      <div className="logo">😁</div>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#get-involved">Get Involved</a>
          </li>
          <li>
            <a href="#donate">Donate</a>
          </li>
          <li>
            <a href="#impact-areas">Impact Areas</a>
          </li>
          <li>
            <a href="#success-stories">Success Stories</a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
        </ul>
        <div className="hamburger" onClick={toggleNav}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
      <a href="#contact" className="contact-btn">
        <p>Contact Us</p>
        <div className="icon-circle">
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
      </a>
    </header>
  );
};

export default Header;
