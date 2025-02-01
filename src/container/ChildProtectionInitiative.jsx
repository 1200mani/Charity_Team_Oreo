import React from "react";
import "./ChildProtectionInitiative.css";
import img9 from "./img9.jpg"; // Adjust the path based on where this file is


const ChildProtectionInitiative = () => {
  return (
    <section className="initiative-support">
      <div className="initiative-content-container">
        {/* Text Section */}
        <div className="initiative-text-content">
          <h2 className="initiative-heading">
            <i className="fa fa-wand-magic-sparkles"></i> Child Protection Initiative
          </h2>
          <div className="initiative-content">
            <h3>A Safe Haven</h3>
            <br />
            <p>
              Creating a safe and secure environment is vital for the overall growth and happiness of children. Our Child Protection Initiatives encompass measures to safeguard children from abuse, exploitation, and neglect. With your help, we can establish safe spaces and implement child protection policies to ensure that every child feels protected and loved.
            </p>
            <br />
            <div className="initiative-buttons">
              <a href="#" className="initiative-btn join-movement">
                Be a Guardian of Hope
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
              <a
                style={{ backgroundColor: "lightgray" }}
                href="#"
                className="initiative-btn support-cause"
              >
                Get Involved
              </a>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="initiative-image-content">
        <img src={img9}
            alt="Child Protection Initiative"
            className="initiative-img"
          />
        </div>
      </div>
    </section>
  );
};

export default ChildProtectionInitiative;
