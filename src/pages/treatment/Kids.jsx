import React from "react";
import "../../styles/pages/leistungen/Kids.scss";
import Footer from "../../components/Footer";
import WaveSection from "../../components/WaveSection";
const Kids = () => {
  return (
    <div className="kids-page-container">
      <section className="kids-first-container">
        <WaveSection
          header="Kinder und Jugendliche"
          content="Fällt ihnen etwas an der Zahnstellung ihres Kindes auf,
           oder hat sie ihr Hauszahnarzt darauf hingewiesen,
           dann zögern sie nicht ein Beratungstermin zur vereinbaren, gerade bei Kindern 
           und Jugendliche kann eine rechtzeitige Diagnose der Behandlungsdauer verkürzt
           und die Prognose verbessern."
        />
      </section>
      <section className="kids-secound-container">secound</section>
      <section className="kids-third-container">third</section>
      <section className="kids-fourth-container">fourth</section>
      <section className="kids-fifth-container">5</section>
      <section className="kids-sixth-container">6</section>
      <section className="kids-seventh-container">7</section>
      <section className="kids-eight-container">
        <Footer />
      </section>
    </div>
  );
};

export default Kids;
