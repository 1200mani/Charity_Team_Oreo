import React from "react";
import EducationSupport from "./EducationSupport"; // Correct import
import HealthcareforChildren from "./HealthcareforChildren"; // Correct import
import NutritionPrograms from "./NutritionPrograms"; // Correct import
import ChildProtectionInitiative from "./ChildProtectionInitiative"; // Correct import
import EmpoweringChildren from "./EmpoweringChildren";
import "./ImpactPage.css";

const ImpactPage = () => {
  return (
    <>
    <section className="hero-section">
      <div className="text-left">
        <h1>Empowering Children for a Brighter Tomorrow</h1>
      </div>
      <div className="text-right">
        <p>
          At ForHelp, our commitment to creating a lasting impact on the lives of
          underprivileged children drives our efforts in four core Impact Areas.
          Through Education Support, Healthcare for Children, Nutrition Programs,
          and Child Protection Initiatives, we strive to build a strong foundation
          for their future. Together, let's transform their lives, one step at a
          time, and pave the way for a world where every child can flourish and
          dream without limits.
        </p>
        <div className="buttons">
          <a href="#" className="btn join-movement">
            Join the Movement <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
          <a href="#" className="btn support-cause">
            Support Our Cause
          </a>
        </div>
      </div>
    </section>


      <EducationSupport />
      <HealthcareforChildren />
      <NutritionPrograms />
      <ChildProtectionInitiative />
      <EmpoweringChildren />
      </>
    
  );
};

export default ImpactPage;
