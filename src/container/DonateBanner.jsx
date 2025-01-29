import React from "react";
import "./DonateBanner.css";

const DonateBanner = () => {
  return (
    <div className="donate-banner">
      <h1>Donate Now and Help Level Up the Lives of Children in Need</h1>
      <p>
        Your donation will help provide essential services to children in need, such as
        education, healthcare, nutrition, and enrichment.
      </p>
      <a href="#" className="donate-link">
        Click here to donate now and help level up the lives of children in need.
      </a>
      <button className="donate-btn-donate">
        Donate Now <i className="fas fa-arrow-up-right"></i>
      </button>
    </div>
  );
};

export default DonateBanner;
