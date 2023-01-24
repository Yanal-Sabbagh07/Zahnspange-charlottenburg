import React from "react";
import "../../styles/pages/about/About.scss";
// import { useLocation } from "react-router-dom";
const About = () => {
  return (
    <div>
      <div className="about-us-container">
        <div className="upper-teath"></div>
        <div className="about-us-content-container">
          <div className="about-us-content">
            <h1>
              Willkommen in unserer kieferorthopädischen Facharztpraxis in
              Berlin-Charlottenburg.
            </h1>
          </div>
        </div>
        <div className="footer-teath"></div>
      </div>
    </div>
  );
};

export default About;
