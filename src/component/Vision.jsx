import React from "react";
import "./Vision.css";
import imgSrc from "../assets/images/img3.jpg";

const Vision = () => {
  return (
    <div className="mission-tab">
      <div className="mission-para">
        <div className="first-line">
          <div className="h1-mission">
            <h2>Vision</h2>
          </div>
          <div className="learn-btn">Learn more ↗</div>
        </div>
        <div className="mission-four">
          <div className="mission-one">
            <div className="num">
              <h1>01</h1>
            </div>
            <div className="para">
              <p>
                A world where every child has the opportunity to reach their.
                full potential.
              </p>
            </div>
          </div>
          <div className="mission-two">
            <div className="num">
              <h1>02</h1>
            </div>
            <div className="para">
              <p>
                A world where children are healthy, educated, and
                well-nourished.
              </p>
            </div>
          </div>
          <div className="mission-three">
            <div className="num">
              <h1>03</h1>
            </div>
            <div className="para">
              <p>
                A world where children have the opportunity to participate in
                extracurricular activities and have fun.
              </p>
            </div>
          </div>

          <div className="mission-three">
            <div className="num">
              <h1>04</h1>
            </div>
            <div className="para">
              <p>A world where children are safe and loved.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mission-image">
        <img src={imgSrc} alt="Amplify Their Voice" />
      </div>
    </div>
  );
};

export default Vision;
