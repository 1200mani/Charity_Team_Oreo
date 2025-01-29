import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import './DonateForm.css';
import img5 from "./img5.jpg"; // Adjust the path based on where this file is


const DonateForm = () => {
  return (
    <div className="donation-container-form">
      <div className="donation-content">
        {/* Left Section */}
        <div className="donation-left">
          <div className="image-wrapper">
          <img src={img5} alt="Healthcare" className="donation-image" />
          </div>
          <div className="social-section">
            <p>Follow us on social:</p>
            <div className="social-icons">
              <div className="icon">
                <i className="fa-brands fa-facebook-f"></i>
              </div>
              <div className="icon">
                <i className="fa-brands fa-twitter"></i>
              </div>
              <div className="icon">
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="donation-right">
          <form>
            <div className="form-row">
              <input type="text" placeholder="Enter First Name" className="input-field" />
              <input type="text" placeholder="Enter Last Name" className="input-field" />
            </div>
            <div className="form-row">
              <input type="email" placeholder="Enter your Email" className="input-field" />
              <input type="tel" placeholder="Enter Phone Number" className="input-field" />
            </div>
            <div className="form-group">
              <p>Type of Donation:</p>
              <div className="checkbox-group">
                <label><input type="checkbox" /> One-Time Donation</label>
                <label><input type="checkbox" /> Monthly Giving</label>
                <label><input type="checkbox" /> Corporate Donations</label>
                <label><input type="checkbox" /> Legacy Giving</label>
              </div>
            </div>
            <div className="form-group">
              <input type="text" placeholder="Enter your Amount" className="input-field full-width" />
            </div>
            <div className="form-group">
              <textarea placeholder="Enter your Message" className="textarea-field"></textarea>
            </div>
            <div className="form-group">
              <label><input type="checkbox" /> I agree with Terms of Use and Privacy Policy</label>
            </div>
            <button type="submit" className="donate-btn">Donate Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonateForm;
