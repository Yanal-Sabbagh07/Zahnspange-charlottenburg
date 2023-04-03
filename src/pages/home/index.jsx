import React from "react";
import "../../styles/pages/Home.scss";
import Slider from "../../components/Slider";
import Wave from "../../components/Wave";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import TreatmentProcess from "../../components/TreatmentProcess";
import homeSlider from "../../helpers/homeSlider";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const { ref, inView } = useInView({ threshold: 0.25, triggerOnce: true });
  return (
    <div className="home-page">
      <section className="hero-section" id="/">
        <div className="home-slider-container">
          <Slider sliderData={homeSlider} count={2} type=".jpg" />
        </div>
        <div className="welcome-title-mobile-container">
          <h1 className="welcome-title-mobile">
            Willkommen in unserer kieferorthopädischen Facharztpraxis in <br />
            <span>Berlin-Charlottenburg</span>
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
              in freundlicher und professioneller Umgebung möchten wir Ihnen
              bzw. Ihrem Kind zu einem gesunden, schönen Lächeln verhelfen. Hier
              können Sie sich einen Überblick über unsere Praxis, unser Team und
              unser Behandlungsspektrum verschaffen. Vereinbaren Sie gerne einen
              Termin bei uns und wir freuen uns darauf, Sie in unserer Praxis
              begrüßen zu dürfen.
            </p>
          </div>
          <div className="welcome-last-2">
            <Link to="/about" className="welcome-owner-txt">
              Ihr Praxisteam Dr. Nawras Darkazanly & Partner
            </Link>
          </div>
          <div className="welcome-btn">
            <Button bgColor="#1f5ca2" color="#fff" />
          </div>
        </div>
      </section>
      <section className="treatment-process-section">
        <div className="treatment-process-title-container">
          <h1>Ablauf einer Behandlung</h1>
        </div>
        <div className="treatment-process-container" ref={ref}>
          <div
            className={
              !inView
                ? "treatment-proccess-card-conainer card-1"
                : "treatment-proccess-card-conainer animate-1"
            }
            // ref={ref}
          >
            <TreatmentProcess
              img="dental-checkup"
              title="Erstkontakt und Erstberatung"
              txt="In einem ersten Gespräch werden
                    eventuelle Fehlstellungen der Zähne und Kiefer diagnostiziert,
                    mögliche Behandlungsoptionen vorgestellt und die eventuellen Kosten
                    besprochen."
            />
          </div>
          <div
            className={
              !inView
                ? "treatment-proccess-card-conainer card-2"
                : "treatment-proccess-card-conainer animate-2"
            }
            // ref={ref}
          >
            <TreatmentProcess
              img="x-ray"
              title="Erstellung der notwendigen diagnostischen Unterlagen"
              txt="
              Bei diesem Termin werden alle notwendigen Unterlagen zusammengestellt, die wir für eine
              ausführliche Planung der Behandlung benötigen (Röntgenaufnahmen, Abformung bzw. Scan
              der Zähne und Fotos)"
            />
          </div>
          <div
            className={
              !inView
                ? "treatment-proccess-card-conainer card-3"
                : "treatment-proccess-card-conainer animate-3"
            }
            // ref={ref}
          >
            <TreatmentProcess
              img="docpat"
              title="Therapiebesprechung"
              txt="In der Therapiebesprechung stellen wir Ihnen die Behandlungsoptionen vor und erläutern 
              mögliche kieferorthopädische Geräte, welche wir zu einem großen Teil in unserem eigenen Praxislabor
              herstellen."
            />
          </div>
          <div
            className={
              !inView
                ? "treatment-proccess-card-conainer card-4"
                : "treatment-proccess-card-conainer animate-4"
            }
            ref={ref}
          >
            <TreatmentProcess
              img="control"
              title="Kontolltermin:"
              txt="Abhängig von der gewählten Behandlungsmethode erfolgt alle vier bis zehn Wochen ein
              Kontrolltermin, um eine sichere und erfolgreiche Behandlung zu gewährleisten."
            />
          </div>
          <div
            className={
              !inView
                ? "treatment-proccess-card-conainer card-5"
                : "treatment-proccess-card-conainer animate-5"
            }
            // ref={ref}
          >
            <TreatmentProcess
              img="retainer"
              title="Retention"
              txt="Nach der Phase der aktiven Behandlung erfolgt die Retentionsphase. In dieser Phase wird
              das Ergebnis der Behandlung gesichert, damit die Zähne sich nicht wieder in ihrer
              Ausgangsposition zurückbewegen. Dies kann mit herausnehmbaren Retentionsspangen oder
              durch einen festen Retainer gewährleistet werden."
            />
          </div>
        </div>
      </section>
      <section className="hero-section3" id="3">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
