import React from "react";


const EmpoweringChildren = () => {
  return (
    <div
      style={{
        backgroundColor: "#d8ff7e",
        borderRadius: "20px",
        padding: "40px",
        textAlign: "center",
        margin: "50px auto",
        width: "80%",
        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <h1
        style={{
          fontSize: "32px",
          color: "black",
          marginBottom: "20px",
        }}
      >
        Join Us in Empowering Children
      </h1>
      <p
        style={{
          fontSize: "16px",
          fontFamily: "Times New Roman, serif",
          color: "black",
          lineHeight: "1.8",
          marginBottom: "30px",
        }}
      >
        Together, let's create a brighter future for these young souls. Whether
        you sponsor a child, donate to our impactful programs, or volunteer
        your time, your contribution matters. Join the movement and be part of
        this transformative journey. Together, we can empower children and
        level up their lives!
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <button
          style={{
            border: "none",
            padding: "15px 30px",
            borderRadius: "50px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "white",
            color: "black",
            border: "2px solid black",
            transition: "transform 0.3s",
          }}
        >
          Support Our Cause
        </button>
        <button
          style={{
            border: "none",
            padding: "15px 30px",
            borderRadius: "50px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "#d4ff80",
            color: "black",
            border: "2px solid black",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            transition: "transform 0.3s",
          }}
        >
          Get Involved{" "}
          <i
            className="fa fa-arrow-up-right-from-square"
            style={{ fontSize: "14px" }}
          ></i>
        </button>
      </div>
    </div>
  );
};

export default EmpoweringChildren;
