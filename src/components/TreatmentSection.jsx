import React from "react";
import "../styles/components/TreatmentSection.scss";
const TreatmentSection = (props) => {
  return (
    <div
      className="treatment-container"
      style={{
        flexDirection: props.reverse === "true" && "row-reverse",
        backgroundColor: props.color,
      }}
    >
      <div
        className="treatment-left"
        style={{ backgroundImage: props.image }}
      ></div>
      <div className="treatment-right">
        <h1 className="tratment-right-title">{props.header}</h1>
        <p className="tratment-right-txt">{props.text}</p>
      </div>
    </div>
  );
};

export default TreatmentSection;
