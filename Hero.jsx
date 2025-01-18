import React from "react";
import "./Hero.css";
import imgSrc from "../assets/images/img1.jpg"; // Correct path after moving the image

const Hero = () => {
  return (
    <section className="hero">
      <h1>
        Transforming Lives Through <br /> Hope and Education
      </h1>
      <p>
        Welcome to ForHelp, where we believe in the boundless potential of every
        child. Our mission is to create a world where underprivileged children
        are given the wings to soar high and achieve their dreams.
      </p>
      <a href="#donate" className="donate-btn">
        <p>Donate Now</p>
        <div className="icon-circle">↗</div>
      </a>

      {/* New Blocks Section */}

      <div className="info-blocks">
        <div className="block first-block">
          <div className="block-image green-bg">
            <img src={imgSrc} alt="Amplify Their Voice" className="block-img" />
            {/* Rounded rectangle below the image */}
            <div className="rounded-rect"></div>
          </div>

          {/* Styling the Amplify Their Voice Text as a Button */}
          <div className="amplify-voice-btn">
            <div className="emoji-circle">
              <span className="emoji">🌟</span>
            </div>
            Amplify Their Voice
          </div>
        </div>

        <div className="block">
          <div className="block-image green-bg">
            <h2>62%</h2>
          </div>
          <h3>Catastrophe Relief</h3>
          <p>
            India Grieves the Passing of Thousands. Faces Challenges in the Wake
            of Catastrophe.
          </p>
        </div>

        <div className="block">
          <div className="block-image green-bg">
            <img
              src="your-image-url2.png"
              alt="Support a Child"
              className="block-img"
            />
          </div>
          <h3>Support</h3>
          <p>
            Support a child in need. Make a meaningful connection. Help break
            the cycle of poverty.
          </p>
        </div>

        <div className="block">
          <div className="block-image green-bg">
            <img
              src="your-image-url3.png"
              alt="Do Something Great"
              className="block-img"
            />
          </div>
          <h3>Do Something Great</h3>
          <p>Help Others to Move and Grow and Be in a Better World.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
