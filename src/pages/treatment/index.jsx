import React from "react";
import "../../styles/pages/leistungen/Leistungen.scss";

import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import WaveSection from "../../components/WaveSection";

const index = () => {
  return (
    <div className="leistungen-main-container">
      <section className="first-container">
        {/* <Wave header="Unsere Leistungen für Sie" />
        <div className="leistungen-content-container">
          <p className="leistungen-content">
            Unsere Fachpraxis in Charlottenburg bietet Kindern, Jugendlichen und
            Erwachsenen professionelle Leistungen auf dem neusten Stand der
            Technik. Alle Behandler haben jahrzehntelange kieferorthopädische
            Erfahrung. Schöne und gerade Zähne sind in jedem Alter möglich, man
            ist nie zu alt für eine kieferorthopädische Behandlung
          </p>
        </div> */}
        <WaveSection
          header="Unsere Leistungen für Sie"
          content="Unsere Fachpraxis in Charlottenburg bietet Kindern, Jugendlichen und
          Erwachsenen professionelle Leistungen auf dem neusten Stand der
          Technik. Alle Behandler haben jahrzehntelange kieferorthopädische
          Erfahrung. Schöne und gerade Zähne sind in jedem Alter möglich, man
          ist nie zu alt für eine kieferorthopädische Behandlung"
        />
      </section>
      <section className="secound-container">
        <div className="secound-left-container"></div>
        <div className="secound-right-container">
          <div className="adults-title-container">
            <h1 className="adults-title">Erwachsenenbehandlung</h1>
          </div>
          <div className="adults-btn-container">
            <Link to="/treatment/adults" className="adults-btn">
              Unsere behandlung für Erwachsene
            </Link>
          </div>
        </div>
      </section>
      <section className="third-container">
        <div className="third-left-container">
          <div className="kids-title-container">
            <h2 className="kids-title">Kinder / Jugendliche </h2>
          </div>
          <div className="kids-btn-container">
            <Link to="/treatment/kids" className="kids-btn">
              Unsere behandlung für Kinder & Jugendliche
            </Link>
          </div>
        </div>
        <div className="third-right-container"></div>
      </section>
      <section className="leistungen-footer-container">
        <Footer />
      </section>
    </div>
  );
};

export default index;
