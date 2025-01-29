import React from "react";
import "./FourBlocks.css";
const FourBlocks = () => {
  return (
    <div className="info-blocks">
      {/* first block */}
      <div className="block first-block">
        <div className="unique-arrow"></div>
        <div className="block-image green-bg">
          <img src={"/images/img2.jpg"} alt="Amplify Their Voice" className="block-img" />
          <div className="rounded-rect"></div>
        </div>
        <div className="amplify-voice-btn">
          <div className="emoji-circle">
            <span className="emoji">✨</span>
          </div>
          Amplify Their Voice
        </div>
      </div>

      {/* second block */}
      <div className="block second-block">
        <div className="unique-star"></div>

        <div className="second-p">
          <p>Help for 8,892 Children in India</p>
        </div>

        <h2>62%</h2>
        <p>
          India Grieves the Passing of Thousands. Faces Challenges in the Wake
          of Catastrophe.
        </p>
      </div>

      {/* third block */}
      <div className="block third-block">
        <div className="four-img-text">
          <h2>
            🔆 <br />
            Support
          </h2>
          <p>
            Support a child in need. Make a meaningful connection. Help break
            the cycle of poverty.
          </p>
        </div>
        <div className="find-btn">Find a Child ↗</div>
      </div>

      {/* fourth block */}
      <div className="block four-block">
        <div className="volunteer-btn">Be a Volunteer ↗</div>
        <div className="unique-smile"></div>
        <div className="four-img-text">
          <img src={"/images/img1.jpg"} alt="Amplify Their Voice" className="block-img" />
          <h4>Do Something Great</h4>
          <p>Help Others Move and Grow to Be in a Better World</p>
        </div>
      </div>
    </div>
  );
};

export default FourBlocks;
