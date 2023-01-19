import React from "react";
import "../../styles/pages/Home.scss";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Header from "../../components/Header";
const index = () => {
  return (
    <div className="home-page">
      <Header />
      <section className="hero-section">
        <div className="arrow-1">
          <ArrowBackIosNewIcon className="arrow-icon" />
        </div>
        <div className="hero-image">
          <img src={require("../../imgs/hero2.jpg")} alt="hero" />
        </div>
        <div className="arrow-2">
          <ArrowForwardIosIcon className="arrow-icon" />
        </div>
      </section>
      <section className="hero-section2">
        <div className="welcome-title-container">
          <h1 className="welcome-title">
            Willkommen in unserer kieferorthopädischen Facharztpraxis in
            Berlin-Charlottenburg.
          </h1>
        </div>
      </section>
      <section className="hero-section3">hi2</section>
    </div>
  );
};

export default index;
