import React, { useState } from "react";
import "./FaceSection.css";
import imgSrc from "../assets/images/img4.jpg";
const users = [
  {
    picture: { src: imgSrc },

    feedback:
      "Thank you so much for your support! I was so grateful to receive the financial assistance that helped me pay for my son's school fees.",
    name: "John Smith",
  },
  {
    picture: { src: imgSrc },
    feedback:
      "The help I received allowed me to stay in school and focus on my education. I couldn’t have done it without your support!",
    name: "Sarah Brown",
  },
  {
    picture: { src: imgSrc },
    feedback:
      "This support has been life-changing. Thank you for making it possible for me to continue my journey!",
    name: "Michael Green",
  },
  {
    picture: { src: imgSrc },
    feedback:
      "Your generosity has allowed me to pursue my dreams. I will always be grateful for your assistance!",
    name: "Emily White",
  },
  {
    picture: { src: imgSrc },
    feedback:
      "I am so thankful for the support I received. It truly made a difference in my life. Thank you so much!",
    name: "David Johnson",
  },
  {
    picture: { src: imgSrc },
    feedback:
      "Your support gave me the chance to improve my life. I can’t thank you enough for this opportunity!",
    name: "Jessica Taylor",
  },
  {
    picture: { src: imgSrc },
    feedback:
      "Your support gave me the chance to improve my life. I can’t thank you enough for this opportunity!",
    name: "Jessica Taylor",
  },
];
console.log(users);

const FaceSection = () => {
  const [currentUserIndex, setCurrentUserIndex] = useState(0);

  const handleNext = () => {
    setCurrentUserIndex((prevIndex) =>
      prevIndex === users.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentUserIndex((prevIndex) =>
      prevIndex === 0 ? users.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="face-section">
      {/* Picture Carousel */}
      <div className="face-carousel">
        <button className="arrow left-arrow" onClick={handlePrevious}>
          ←
        </button>
        <div className="face-slider">
          {users.map((user, index) => (
            <div
              key={index}
              className={`face-circle ${
                index === currentUserIndex ? "active" : ""
              }`}
              onClick={() => setCurrentUserIndex(index)}
            >
              <img
                src={user.picture.src}
                alt={`User ${index}`}
                width={"1000px"}
              />
            </div>
          ))}
        </div>
        <button className="arrow right-arrow" onClick={handleNext}>
          →
        </button>
      </div>

      {/* Feedback Section */}
      <div className="content-block">
        <blockquote>"{users[currentUserIndex].feedback}"</blockquote>
        <p>- {users[currentUserIndex].name}</p>
      </div>
    </div>
  );
};

export default FaceSection;
