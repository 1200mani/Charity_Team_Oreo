import React from "react";
import "./NutritionPrograms.css";
import img8 from "./img8.jpg"; // Adjust the path based on where this file is


const NutritionPrograms = () => {
  return (
    <section className="nutrition-support">
      <div className="nutrition-content-container">
        {/* Text Section */}
        <div className="nutrition-text-content">
          <h2 className="nutrition-heading">
            <i className="fa fa-wand-magic-sparkles"></i> Nutrition Programs
          </h2>
          <div className="nutrition-content">
            <h3>Nourishing Potential:</h3>
            <br />
            <p>
              Proper nutrition is fundamental for a child's physical and cognitive development. Our Nutrition Programs provide nutritious meals and essential dietary support to children facing food insecurity. With your support, we can ensure that no child goes to bed hungry and they have the fuel they need to focus on learning and growing.
            </p>
            <br />
            <div className="nutrition-buttons">
              <a href="#" className="nutrition-btn join-movement">
                Give the Gift of Nutrition
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
              <a
                style={{ backgroundColor: "lightgray" }}
                href="#"
                className="nutrition-btn support-cause"
              >
                Donate Today
              </a>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="image-content">
          <img src={img8} alt="Healthcare"
            className="nutrition-img"
          />
        </div>
      </div>
    </section>
  );
};

export default NutritionPrograms;
