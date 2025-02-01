import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import './DonateForm.css';
import img5 from "./img5.jpg"; // Adjust the path based on where this file is


const DonateForm = () => {
  return (
    <div className="donate-donation-container-form">
      <div className="donate-donation-content">
        {/* Left Section */}
        <div className="donate-donation-left">
          <div className="donate-image-wrapper">
          <img src={img5} alt="Healthcare" className="donate-donation-image" />
          </div>
          <div className="donate-social-section">
            <p>Follow us on social:</p>
            <div className="donate-social-icons">
              <div className="donate-icon">
                <i className="fa-brands fa-facebook-f"></i>
              </div>
              <div className="donate-icon">
                <i className="fa-brands fa-twitter"></i>
              </div>
              <div className="donate-icon">
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="donate-donation-right">
          <form>
            <div className="donate-form-row">
              <input type="text" placeholder="Enter First Name" className="input-field" />
              <input type="text" placeholder="Enter Last Name" className="input-field" />
            </div>
            <div className="donate-form-row">
              <input type="email" placeholder="Enter your Email" className="input-field" />
              <input type="tel" placeholder="Enter Phone Number" className="input-field" />
            </div>
            <div className="donate-form-group">
              <p>Type of Donation:</p><br></br>
              <div className="donate-checkbox-group">
                <label><input type="checkbox" /> One-Time Donation</label>
                <label><input type="checkbox" /> Monthly Giving</label>
                <label><input type="checkbox" /> Corporate Donations</label>
                <label><input type="checkbox" /> Legacy Giving</label>
              </div>
            </div>
            <div className="donate-form-group">
              <input type="text" placeholder="Enter your Amount" className="input-field full-width" />
            </div>
            <div className="donate-form-group">
              <textarea placeholder="Enter your Message" className="textarea-field"></textarea>
            </div>
            <div className="donate-form-group">
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
