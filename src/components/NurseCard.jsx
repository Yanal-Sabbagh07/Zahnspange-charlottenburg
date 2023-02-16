import React from "react";
import "../styles/components/NurseCard.scss";

const NurseCard = (props) => {
  //   nurse1 = props.img;
  return (
    <div className="card-container">
      {/* <div
        className="image-contianer"
        style={{ backgroundImage: `url(/imgs/${props.img}.jpg)` }}
      ></div> */}
      <div className="image-container">
        <img
          src={require(`../imgs/${props.img}.jpg`)}
          alt="nurse"
          className="nurse-img"
        />
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
