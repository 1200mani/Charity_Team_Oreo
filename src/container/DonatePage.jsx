import React from "react";
import DonationOption from './DonationOption';
import DonateForm from './DonateForm';
import DonateBanner from "./DonateBanner";
import "./DonatePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"; // ✅ Import the icon

<br></br>
const DonatePage = () => {
  return (
    <>
    <div className="donatecontainer">
      {/* Left Side: Text */}
      <div className="donatetext-content">
        <h2>Making a Meaningful Difference Together</h2>
        <p>
          At Forhelp, we believe that true impact is achieved when individuals,
          communities, and organizations come together for a shared purpose – to
          create positive change in the world.
        </p>
        <a href="#">
          Donate Now <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> {/* ✅ Correct usage */}
        </a>

      </div>

      {/* Right Side: Statistics */}
      <div className="donate-statistics">
        <div className="donate-stat-box">
          <h3>70%</h3>
          <p>Education Support</p>
        </div>
        <div className="donate-stat-box">
          <h3>24/7</h3>
          <p>Healthcare for Children</p>
        </div>
        <div className="donate-stat-box">
          <h3>108</h3>
          <p>Nutrition Programs</p>
        </div>
        <div className="donate-stat-box">
          <h3>+105</h3>
          <p>Happy Children</p>
        </div>
      </div>
    </div>
    <DonationOption />
    <DonateForm />
    <DonateBanner />
    </>
  );
};

export default DonatePage;
