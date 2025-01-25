import React from "react";
import "./Hero.css";
import "./FourBlocks";
import FourBlocks from "./FourBlocks";
import Mission from "./Mission";
import Vision from "./Vision";
import Goals from "./Goals";
import HowWork from "./HowWork";
import FaceSection from "./FaceSection";
import Faq from "./Faq";
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
      <FourBlocks />
      <div className="hope-today">
        <h1>Give a Child Hope Today</h1>
        <p>
          Welcome to our charity's online plateform. Where we unite hearts and
          efforts to bring hope to the lives
        </p>
      </div>

      <div className="three-sep">
        <div>
          <h1>85%</h1>
          <p>
            Children enrolled in the Loved program are Increasingly poised to
            emerge as future leaders within their communities.
          </p>
        </div>
        <div>
          <h1>3,250</h1>
          <p>
            The average time that children supported by Loved program spend in
            secure and nurturing activities.
          </p>
        </div>
        <div>
          <h1>69%</h1>
          <p>
            Secondary education completion is more probable for 69% of children
            enrolled in the Loved program
          </p>
        </div>
      </div>

      <div className="hope-today">
        <h1>Empowering Children, Creating Futures</h1>
        <p>
          At ForHelp, we are on a heartfelt mission to empower underprivileged
          children by providing them with the essential resources and <br />{" "}
          opportunities they need to build a brighter future.
        </p>
      </div>
      <div className="we-believe">
        <p>
          We believe that by working together, we can create a world where every
          child has the opportunity to reach their full potential
        </p>
      </div>
      {/* Mission Section */}
      <Mission />
      {/* Vision Section */}
      <Vision />
      {/* Goals section */}
      <Goals />
      {/* two arrow cont */}
      <div className="two-devide">
        <div className="two-first-line-btn">
          <div className="two-heading">
            <h5>The Goal of ForHelp</h5>
            <div className="two-arrow-symbol">↗</div>
          </div>

          <div className="">
            <p>
              The goal of ForHelp is to help children level up their lives by
              providing them with the essential services they need to succeed
            </p>
          </div>
        </div>
        <div className="two-first-line-btn">
          <div className="two-heading">
            <h5>The organization's objective</h5>
            <div className="two-arrow-symbol">↗</div>
          </div>

          <div className="">
            <p>
              Providing education and tutoring to children in need. Providing
              healthcare and nutrition to children in need. Providing enrichment
              opportunities to children in need. Advocating for children's
              rights
            </p>
          </div>
        </div>
      </div>
      {/* how we work section  */}
      <HowWork />
      {/* three arrow cont */}
      <div className="two-devide">
        <div className="two-first-line-btn">
          <div className="two-heading">
            <h5>Needs Assessment</h5>
            <div className="two-arrow-symbol">↗</div>
          </div>

          <div className="">
            <p>
              We start by understanding the unique challenges of the communities
              we serve.
            </p>
          </div>
        </div>
        <div className="two-first-line-btn">
          <div className="two-heading">
            <h5>Collaborative Partnerships</h5>
            <div className="two-arrow-symbol">↗</div>
          </div>

          <div className="">
            <p>
              We team up with local organizations and volunteers to maximize our
              impact
            </p>
          </div>
        </div>
        <div className="two-first-line-btn">
          <div className="two-heading">
            <h5>Transparent Impact Reporting</h5>
            <div className="two-arrow-symbol">↗</div>
          </div>

          <div className="">
            <p>
              We provide regular updates on our projects to build trust and
              accountability
            </p>
          </div>
        </div>
      </div>
      <div className="hope-today">
        <h1>Spreading Smiles, Changing Lives</h1>
        <p>
          ForHelp is a passionate team of individuals dedicated to transforming
          the lives of children in need. We believe that every child deserves a
          chance to thrive, and with love, care, and quality support, we strive
          to make a positive impact on their lives.
        </p>
      </div>
      {/* face and content */}
      <FaceSection />
      <div className="hope-today">
        <h1>Frequently Asked Questions</h1>
        <p>
          Curious to know more about ForHelp and our misston? Look no further!
          We've compiled a list of frequently asked questions to
          <br /> provide you with the onswers you seek
        </p>
      </div>
      {/* faq section  */}
      <Faq />
    </section>
  );
};

export default Hero;
