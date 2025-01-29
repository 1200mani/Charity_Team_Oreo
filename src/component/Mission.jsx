import React from "react";
import "./Mission.css";

const Mission = () => {
  return (
    <div className="mission-tab">
      <div className="mission-image">
        <img src={"/images/img3.jpg"} alt="Amplify Their Voice" />
      </div>
      <div className="mission-para">
        <div className="first-line">
          <div className="h1-mission">
            <h2>Mission</h2>
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
                To help children level up their lives by providing thern with
                the essential services they need to succeed.
              </p>
            </div>
          </div>
          <div className="mission-two">
            <div className="num">
              <h1>02</h1>
            </div>
            <div className="para">
              <p>
                We believe that every child deserves the opportunity to reach
                their full potential, regardless of their circumstances.
              </p>
            </div>
          </div>
          <div className="mission-three">
            <div className="num">
              <h1>03</h1>
            </div>
            <div className="para">
              <p>
                We provide a variety of programs and services to help children
                in need. including education, healthcare, nutrition, and
                enrichment.
              </p>
            </div>
          </div>

          <div className="mission-three">
            <div className="num">
              <h1>04</h1>
            </div>
            <div className="para">
              <p>
                We believe that by providing these essential services, we can
                help children level up their lives and reach their full
                potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
