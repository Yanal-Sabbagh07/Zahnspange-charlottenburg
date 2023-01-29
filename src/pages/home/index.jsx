import React from "react";
import "../../styles/pages/Home.scss";
import Slider from "../../components/Slider";
import Wave from "../../components/Wave";
import Footer from "../../components/Footer";
import Button from "../../components/Button";

const index = () => {
  return (
    <div className="home-page">
      <section className="hero-section" id="/">
        <Slider />
        <div className="welcome-title-mobile-container">
          <h1 className="welcome-title-mobile">
            Willkommen in unserer kieferorthopädischen Facharztpraxis in <br />
            Berlin-Charlottenburg.
          </h1>
        </div>
      </section>

      <section className="hero-section2">
        <Wave
          header="Willkommen in unserer kieferorthopädischen Facharztpraxis in
          Berlin-Charlottenburg."
        />
        <div className="welcome-content-container">
          <div className="welcome-last-1">
            <p className="welcome-content">
              Mit hochmodernen diagnostischen und therapeutischen Technologien,
              in freundlicher und professioneller Umgebung, möchten wir Ihnen
              bzw. ihrem Kind zu einem gesunden, schönen Lächeln verhelfen. Hier
              können Sie sich einen Überblick über unsere Praxis, unser Team und
              unser Behandlungsspektrum verschafften. Vereinbaren Sie gerne
              einen Termin bei uns und wir freuen uns darauf, Sie in unserer
              Praxis begrüßen zu dürfen.
            </p>
          </div>
          <div className="welcome-last-2">
            <p className="welcome-owner-txt">
              Ihr Praxisteam Dr. Nawras Darkazanly & Partner
            </p>
          </div>
          <div className="welcome-btn">
            <Button bgColor="#1f5ca2" color="#fff" />
          </div>
        </div>
      </section>
      <section className="hero-section3" id="3">
        <div className="last-section-container">
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default index;
