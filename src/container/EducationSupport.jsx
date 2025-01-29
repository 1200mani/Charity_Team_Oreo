import React from "react";
import img6 from "./img6.jpg"; // Adjust the path based on where this file is

const EducationSupport = () => {
  return (
    <section className="education-support">
      <div className="content-container">
        {/* Text Section */}
        <div className="text-content">
          <h2 className="education-heading">
            <i className="fa fa-wand-magic-sparkles"></i> Education Support
          </h2>
          <div className="education-content">
            <h3>Unlocking Potential</h3><br></br>
            <p>
              Education is a powerful tool that can break barriers and change lives. 
              Our Education Support program aims to provide underprivileged children 
              with access to quality education, scholarships, and school supplies. 
              With your help, we can foster a nurturing learning environment and empower 
              these young minds to dream big and achieve their goals.
            </p><br></br>
            <div className="buttons">
              <a href="#" className="btn join-movement">
                Sponsor a child's Education
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
              <a href="#" className="btn support-cause" style={{ backgroundColor: "lightgray" }}>
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="image-content">
          <img src={img6} alt="Education Support" className="education-img" />
        </div>
      </div>
    </section>
  );
};

export default EducationSupport;
