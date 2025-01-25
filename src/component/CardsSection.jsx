import React from "react";
import Card from "./Card";
import "./CardsSection.css";

const CardsSection = () => {
  const cardData = [
    {
      image: "https://via.placeholder.com/250",
      title: "Amplify Their Voice",
      description: "Help for 8,892 Children in India.",
    },
    {
      image: "https://via.placeholder.com/250",
      title: "Support",
      description:
        "Support a child in need. Make a meaningful connection. Help break the cycle of poverty.",
    },
    {
      image: "https://via.placeholder.com/250",
      title: "Do Something Great",
      description: "Help Others to Move and Grow and be in a better World.",
    },
  ];

  return (
    <section className="cards">
      {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </section>
  );
};

export default CardsSection;
