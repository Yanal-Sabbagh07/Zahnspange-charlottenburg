import React from "react";
import "../../styles/pages/leistungen/Adults.scss";
import Footer from "../../components/Footer";
import WaveSection from "../../components/WaveSection";
import TreatmentSection from "../../components/TreatmentSection";
const Adults = () => {
  return (
    <div className="adults-page-container">
      <section className="adults-first-container">
        <WaveSection
          header="Erwachsenenbehandlung"
          content="Vielen Patienten ist nicht bewusst welche Möglichkeiten auch im Erwachsenenalter besteht um 
          Zahnfehstellungen zu korrigieren. 
          Dank moderner Verfahren lassen sich Zähne und Kieferfehlstellungen heutzutage in jedem Alter korrigieren. 
          Für unsere Patienten, die durch soziale oder berufliche Situation nicht gehandikapt werden dürfen,  
          bieten wir zahlreiche unsichtbare Zahnkorrekturen an, die diesen Anspruch gerecht werden."
        />
      </section>
      <section className="adults-treatment-container">
        <TreatmentSection
          image="url(../../imgs/AlignerTherapie.jpeg)"
          color="#1f5ca2"
          header="Aligner Therapie:"
          text="Vielen Patienten ist nicht bewusst, dass am Ende einer Kieferorthopädischen Behandlung, 
          in der Regel der Anfang der Retentionsphase ist. 
          Wird in dieser Phase die Haltespange nicht regelmäßig getragen, 
          verschieben sich die Zähne zurück und es entsteht wieder Engstande, die die Ästhetik und Funktion stören können. 
          Dieser Engstande kann mit der Rezidiv Behandlung wieder  
          gerade gestellt werden und mit einem festen Retainer stabilisiert werden."
        />
      </section>
      <section className="adults-treatment-container">
        <TreatmentSection
          reverse="true"
          image="url(../../imgs/Ästhetische.png)"
          color="#20ade4"
          header="Ästhetische Keramik Brackets (AVL)"
          text="Vielen Patienten ist nicht bewusst, dass am Ende einer Kieferorthopädischen Behandlung, 
          in der Regel der Anfang der Retentionsphase ist. 
          Wird in dieser Phase die Haltespange nicht regelmäßig getragen, 
          verschieben sich die Zähne zurück und es entsteht wieder Engstande, die die Ästhetik und Funktion stören können. 
          Dieser Engstande kann mit der Rezidiv Behandlung wieder  
          gerade gestellt werden und mit einem festen Retainer stabilisiert werden."
        />
      </section>
      
      
      <section className="adults-treatment-container">
        <TreatmentSection
          image="url(../../imgs/präprothetische.jpeg)"
          reverse="flase"
          color="#1f5ca2"
          header="Präprothetische Kieferorthopädie"
          text="Vielen Patienten ist nicht bewusst, dass am Ende einer Kieferorthopädischen Behandlung, 
          in der Regel der Anfang der Retentionsphase ist. 
          Wird in dieser Phase die Haltespange nicht regelmäßig getragen, 
          verschieben sich die Zähne zurück und es entsteht wieder Engstande, die die Ästhetik und Funktion stören können. 
          Dieser Engstande kann mit der Rezidiv Behandlung wieder  
          gerade gestellt werden und mit einem festen Retainer stabilisiert werden."
        />
      </section>
      <section className="adults-treatment-container">
        <TreatmentSection
          image="url(../../imgs/kombinierte1.png)"
          reverse="true"
          color="#20ade4"
          header="Kombinierte kieferchirurgische Kieferorthopädische Therapie"
          text="Vielen Patienten ist nicht bewusst, dass am Ende einer Kieferorthopädischen Behandlung, 
          in der Regel der Anfang der Retentionsphase ist. 
          Wird in dieser Phase die Haltespange nicht regelmäßig getragen, 
          verschieben sich die Zähne zurück und es entsteht wieder Engstande, die die Ästhetik und Funktion stören können. 
          Dieser Engstande kann mit der Rezidiv Behandlung wieder  
          gerade gestellt werden und mit einem festen Retainer stabilisiert werden."
        />
      </section>
      <section className="adults-treatment-container">
        <TreatmentSection
          image="url(../../imgs/digitale.png)"
          reverse="flase"
          color="#1f5ca2"
          header="Digitale Planung"
          text="Vielen Patienten ist nicht bewusst, dass am Ende einer Kieferorthopädischen Behandlung, 
          in der Regel der Anfang der Retentionsphase ist. 
          Wird in dieser Phase die Haltespange nicht regelmäßig getragen, 
          verschieben sich die Zähne zurück und es entsteht wieder Engstande, die die Ästhetik und Funktion stören können. 
          Dieser Engstande kann mit der Rezidiv Behandlung wieder  
          gerade gestellt werden und mit einem festen Retainer stabilisiert werden."
        />
      </section>
      <section className="adults-treatment-container">
        <TreatmentSection
          image="url(../../imgs/Redzidiv-Behandlung.png)"
          reverse="true"
          color="#20ade4"
          header="Rezidiv-Behandlung"
          text="Vielen Patienten ist nicht bewusst, dass am Ende einer Kieferorthopädischen Behandlung, 
          in der Regel der Anfang der Retentionsphase ist. 
          Wird in dieser Phase die Haltespange nicht regelmäßig getragen, 
          verschieben sich die Zähne zurück und es entsteht wieder Engstande, die die Ästhetik und Funktion stören können. 
          Dieser Engstande kann mit der Rezidiv Behandlung wieder  
          gerade gestellt werden und mit einem festen Retainer stabilisiert werden."
        />
      </section>
      <section className="adults-eight-container">
        <Footer />
      </section>
    </div>
  );
};

export default Adults;
