import React from "react";
import "../../styles/pages/Home.scss";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "react-image-webp";
import Header from "../../components/Header";
const index = () => {
  return (
    <div className="home-page">
      <Header />
      <section className="hero-section">
        {/* <div className="arrow-1">
          <ArrowBackIosNewIcon className="arrow-icon" />
        </div> */}
        <div className="hero-image">
          <Image
            src={require("../../imgs/hero2.webp")}
            webp={require("../../imgs/hero2.webp")}
          />
        </div>

        {/* <div className="arrow-2">
          <ArrowForwardIosIcon className="arrow-icon" />
        </div> */}
      </section>
      <section className="hero-section2">
        <div className="welcome-title-container">
          <h1 className="welcome-title">
            Willkommen in unserer kieferorthopädischen Facharztpraxis in
            Berlin-Charlottenburg.
          </h1>
        </div>
        <div className="welcome-content-container">
          <p className="welcome-content">
            Mit hochmodernen diagnostischen und therapeutischen Technologien, in
            freundlicher und professioneller Umgebung, möchten wir Ihnen bzw.
            ihrem Kind zu einem gesunden, schönen Lächeln verhelfen. Hier können
            Sie sich einen Überblick über unsere Praxis, unser Team und unser
            Behandlungsspektrum verschafften. Vereinbaren Sie gerne einen Termin
            bei uns und wir freuen uns darauf, Sie in unserer Praxis begrüßen zu
            dürfen.
          </p>
        </div>
      </section>
      <section className="hero-section3">hi2</section>
    </div>
  );
};

export default index;
