/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./getinvolved.css";
import gi1 from "./gi1.jpg";
import gi2 from "./gi2.jpg";
import gi3 from "./gi3.jpg";
import gi4 from "./gi4.jpg";

export const GetInvolved = () => {
  return (
    <div className="container">
      <div className="flex header">
        <div className="header-title header-width">Volunteer Opportunities</div>
        <div className="header-width1">
          <p>
            ForHelp offers a variety of volunteer opportunities for people of all ages and skill levels. Whether you're
            interested in tutoring children, helping with fundraising events, or simply lending a helping hand, there's
            a volunteer opportunity for you.
          </p>
          <p className="volunteer-button">Be a Volunteer</p>
          <p className="opportunities-button">View Opportunities</p>
        </div>
      </div>
      <div className="title">
        Here are some of the <br></br>volunteer opportunities available
      </div>
      <div className="subtitle">
        Welcome to our charity's online platform, where we unite hearts and efforts to bring hope to the lives of
        children in need.
      </div>
      <div className="volunteer-container flex" style={{ marginButtom: "20px" }}>
        <div className="image-container volunteer-width" style={{ height: "400px" }}>
          <iframe
            src="https://lottie.host/embed/ab1011e8-0685-4e42-9b07-d56eed8caf01/KRD4ZW1A1Y.lottie"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
            }}></iframe>
        </div>
        <div class="flex-column volunteer-width">
          <div class="volunteer-title">Tutoring</div>
          <div class="volunteer-subtitle">
            Help children with their studies <span class="volunteer-button">Be a Volunteer</span>
          </div>
          <div class="volunteer-description">
            Help children with their studies by volunteering to tutor them. You can help children with their homework,
            teach them new concepts, and help them improve their grades.
          </div>
          <div className="requirement">
            <div className="sub-requirement">
              <h3>Requirements</h3>
              <p>Must be able to commit to a regular schedule and have a strong understanding of the subject matter.</p>
            </div>
            <div className="sub-requirement">
              <h3>Requirements</h3>
              <p>Must be able to commit to a regular schedule and have a strong understanding of the subject matter.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="volunteer-container flex-help margin-top">
        <div className="flex-column help">
          <div class="title">Helping with Fundraising Events</div>
          <div>Help fundraising by volunteering of bake sales, car washes or other fundraising events</div>
          <div className="image-container">
            <iframe
              src="https://lottie.host/embed/bc9297d1-50d6-40d5-a684-0e301bce5077/wQPc4n3r0T.lottie"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
              }}></iframe>
          </div>
          <p className="volunteer-button">Be a Volunteer</p>
          <p className="opportunities-button">View Opportunities</p>
        </div>
        <div className="flex-column help">
          <div class="title">Organizing and Running Enrichment Activities</div>
          <div>Organize and run enrichment activities for children such as art classes, sports leagues, or clubs.</div>
          <div className="image-container">
            <img src={gi1} className="image" alt="volunteer opportunities" />
          </div>
          <p className="volunteer-button">Be a Volunteer</p>
          <p className="opportunities-button">View Opportunities</p>
        </div>
      </div>

      <div className="title margin-top">Fundraising Events</div>
      <div className="subtitle">
        ForHelp hosts a variety of fundraising events throughout the year. These events are a great way to raise money
        for ForHelp and to have fun with other people who care about holping children in noed.
      </div>
      <div className="volunteer-container flex">
        <div className="flex-column volunteer-width">
          <div className="title">Walkathons</div>
          <p>Walkathons are a great way to get exercise and raise money for ForHelp at the same time</p>
          <div className="image-container volunteer-width" style={{ height: "300px", width: "100%" }}>
            <iframe
              src="https://lottie.host/embed/c00d8a4d-3450-4ebe-b565-5fbb34a7fb41/eVV5VBjDZy.lottie"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
              }}></iframe>
          </div>
        </div>
        <div class="flex-column volunteer-width">
          <div className="requirement">
            <div className="sub-requirement">
              <h5>Requirements</h5>
              <p>Must be able to commit to a regular schedule and have a strong understanding of the subject matter.</p>
            </div>
            <div className="sub-requirement">
              <h5>Requirements</h5>
              <p>Must be able to commit to a regular schedule and have a strong understanding of the subject matter.</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="volunteer-container flex-help margin-top"
        style={{ marginBottom: "20px", display: "flex", justifyContent: "space-between" }}>
        <div className="help three" style={{ flex: 1 }}>
          <div className="subtitle">5K Run</div>
          <div className="body-text">
            Help fundraising by volunteering at bake sales, car washes, or other fundraising events.
          </div>
          <div className="image-container" style={{ height: "300px", width: "100%" }}>
            <img
              src={gi2}
              className="image"
              alt="volunteer opportunities"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <p className="volunteer-button">Be a Volunteer</p>
          <p className="opportunities-button">View Opportunities</p>
        </div>
        <div className="help three" style={{ flex: 1 }}>
          <div className="subtitle">Comedy Night</div>
          <div className="body-text">5K runs are another great way to get exercise and raise money for ForHelp.</div>
          <div className="image-container" style={{ height: "300px", width: "100%" }}>
            <img
              src={gi3}
              className="image"
              alt="volunteer opportunities"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <p className="volunteer-button">Be a Volunteer</p>
          <p className="opportunities-button">View Opportunities</p>
        </div>
        <div className="help three" style={{ flex: 1 }}>
          <div className="subtitle">Concert</div>
          <div className="body-text">
            Concerts are a great way to enjoy live music and raise money for ForHelp at the same time.
          </div>
          <div className="image-container" style={{ height: "300px", width: "100%" }}>
            <img
              src={gi4}
              className="image"
              alt="volunteer opportunities"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <p className="volunteer-button">Be a Volunteer</p>
          <p className="opportunities-button">View Opportunities</p>
        </div>
      </div>

      <div className="flex header margin-top">
        <div className="header-title header-width">Sponsar A Child</div>
        <div className="header-width1">
          <p>
            Sponsoring a child through ForHelp is a great way to make a difference in the life of a child in need. When
            you sponsor a child, you provide them with financial support to help them with their education, healthcare,
            and other basic needs.
          </p>
          <p className="volunteer-button">Be a Volunteer</p>
        </div>
      </div>

      <div className="child">
        <div class="title">How It Works</div>
        <div className="child-requirement">
          <div className="sub-requirement">
            <h3>Child Selection</h3>
            <p>We identify children in need, considering their background and circumstances.</p>
          </div>
          <div className="sub-requirement">
            <h3>Comprehensive Assistance</h3>
            <p>Sponsors provide resources for education, healthcare, and basic needs.</p>
          </div>
          <div className="sub-requirement">
            <h3>Dedicated Sponsors</h3>
            <p>Each child is matched with a caring sponsor for ongoing support. </p>
          </div>
          <div className="sub-requirement">
            <h3>Measurable Impact</h3>
            <p>
              We track progress and share results, showcasing the positive change sponsors make in these children's
              lives.
            </p>
          </div>
        </div>
      </div>

      <div className="child margin-top">
        <div class="title">Benefits of Sponsoring a Child</div>
        <div className="child-requirement">
          <div className="sub-requirement">
            <h3>Transform Lives</h3>
            <p>
              Your sponsorship can transform a child's life, providing them with access to education, healthcare, and a
              brighter future.
            </p>
          </div>
          <div className="sub-requirement">
            <h3>Meaningful Connection</h3>
            <p>
              Sponsoring allows you to build a meaningful connection with a child, fostering a sense of purpose and
              fulfillment.
            </p>
          </div>
          <div className="sub-requirement">
            <h3>Global Impact</h3>
            <p>
              By supporting a child's development, you contribute to the overall betterment of communities and society.
            </p>
          </div>
          <div className="sub-requirement">
            <h3>Personal Satisfaction</h3>
            <p>
              Witnessing the positive changes your sponsorship brings to a child's life is immensely rewarding and
              fulfilling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
