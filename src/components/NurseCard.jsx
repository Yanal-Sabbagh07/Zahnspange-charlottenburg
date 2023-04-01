import React, { useEffect, useRef } from "react";
import "../styles/components/NurseCard.scss";
import { useState } from "react";

const NurseCard = (props) => {
  const nurseRef = useRef();
  const [nurseIsVisible, setNurseIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setNurseIsVisible(entry.isIntersecting);
      console.log(nurseIsVisible);
    });
    observer.observe(nurseRef.current);
  }, [nurseIsVisible]);
  return (
    <div
      className="card-container"
      ref={nurseRef}
      style={{
        scale: !nurseIsVisible ? "0.1" : "1",
        transition: "all 1.5s ease-out",
      }}
    >
      {/* <div
        className="image-contianer"
        style={{ backgroundImage: `url(/imgs/${props.img}.jpg)` }}
      ></div> */}
      <div className="image-container">
        <div className="nurse-img" style={{ backgroundImage: props.img }} />
      </div>

      <div className="details-container">
        <div className="details-wrapper">
          <div className="name-container">
            <h3>{props.name}</h3>
          </div>

          <div className="job-container">
            <p>{props.job}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NurseCard;
