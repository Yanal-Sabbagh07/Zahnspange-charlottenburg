import React from "react";

const Wave = (props) => {
  return (
    <>
      <div className="welcome-title-container">
        <h1 className="welcome-title">{props.header}</h1>
      </div>
      <div className="welcome-waves"></div>
    </>
  );
};

export default Wave;
