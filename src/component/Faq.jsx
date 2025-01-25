import React, { useState } from "react";
import "./Faq.css";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    {
      number: "01",
      question: "What is ForHelp?",
      answer: "ForHelp is a charity organization that helps children in need.",
    },
    {
      number: "02",
      question: "How can I help ForHelp?",
      answer: "You can help by donating through our website.",
    },
    {
      number: "03",
      question: "How does ForHelp use donations?",
      answer:
        "Donations are used to support children in need through online initiatives.",
    },
    {
      number: "04",
      question: "How can I be sure that my donation is used effectively?",
      answer:
        "Yes, we have a transparent system to track and use donations effectively.",
    },
    {
      number: "05",
      question: "What is the impact of ForHelp's work?",
      answer:
        "Our work helps grow the charity and provide resources to children in need.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      {questions.map((faq, index) => (
        <div
          key={index}
          className={`faq-block ${openIndex === index ? "open" : ""}`}
        >
          <div className="faq-header" onClick={() => handleToggle(index)}>
            <div className="faq-left">
              <span className="faq-number">{faq.number}</span>
            </div>
            <div className="faq-center">
              <span className="faq-question">{faq.question}</span>
              {openIndex === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
            <div className="faq-right">
              <span className="faq-toggle-icon">
                {openIndex === index ? "×" : "+"}
              </span>
            </div>
          </div>

          {/* {openIndex === index && (
            <div className="faq-answer">{faq.answer}</div>
          )} */}
        </div>
      ))}
    </div>
  );
};

export default Faq;
