import React from "react";
import "../../styles/pages/Home.scss";
// import Image from "react-image-webp";
import Slider from "../../components/Slider";

const index = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        {/* <div className="hero-image">
          <Image
            src={require("../../imgs/hero2.jpg")}
            webp={require("../../imgs/hero2.webp")}
          />
        </div> */}
        <Slider />
      </section>
      <section className="hero-section2">
        <div className="welcome-title-container">
          <h1 className="welcome-title">
            Willkommen in unserer kieferorthopädischen Facharztpraxis in
            Berlin-Charlottenburg.
          </h1>
        </div>
        <div className="welcome-waves"></div>
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
          <p className="welcome-owner-txt">
            Ihr Praxisteam
            <span className="welcome-owner"> Dr. Nawras Darkazanly</span> &
            Partner
          </p>
          <div className="termin-button">
            <a href="#3" className="ayah-button">
              Beratungstermin buchen!
            </a>
          </div>
        </div>
      </section>
      <section className="hero-section3" id="3">
        hi2
      </section>
    </div>
  );
};

export default index;
