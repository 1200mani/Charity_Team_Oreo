import React from "react";
import "./Goals.css";

const Goals = () => {
  return (
    <div className="big-cont">
      <div className="image-text-container">
        <img src={"/images/img4.png"} alt="Amplify Their Voice" />
        <div className="text-content">
          <h1>Goals and Objectives</h1>
          <p>
            ForHelp's goals and objectives are centered around making a
            meaningful impact on the lives of those in need. We strive to
            provide essential resources, support, and opportunities to
            underprivileged communities, fostering positive change and creating
            a brighter future for all.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Goals;
