import React from "react";
import "./ImpactPage.css";
import img7 from "./img7.jpg"; // Adjust the path based on where this file is


const HealthcareforChildren = () => {
  return (
    <section className="health-support">
      <div className="content-container">
        {/* Text Section */}
        <div className="text-content">
          <h2 className="health-heading">
            <i className="fa fa-wand-magic-sparkles"></i> Healthcare for Children
          </h2>
          <div className="health-content">
            <h3>Ensuring Well-Being</h3>
            <br />
            <p>
              Every child deserves to grow up in good health and happiness. Through our Healthcare for Children initiative, we ensure regular health check-ups and necessary medical support for underprivileged children. Together, let's keep illnesses at bay and provide the care and attention they need to thrive.
            </p>
            <br />
            <div className="buttons">
              <a href="#" className="btn join-movement">
                Donate to Health Programs
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
              <a
                style={{ backgroundColor: "lightgray" }}
                href="#"
                className="btn support-cause"
              >
                Support Now
              </a>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="image-content">
        <img src={img7} alt="Healthcare" className="health-img" />

        </div>
      </div>
    </section>
  );
};

export default HealthcareforChildren;
