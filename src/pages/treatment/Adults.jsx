import React from "react";
import "../../styles/pages/leistungen/Adults.scss";
import Footer from "../../components/Footer";
import WaveSection from "../../components/WaveSection";
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
      <section className="adults-secound-container"></section>
      <section className="adults-third-container"></section>
      <section className="adults-fourth-container"></section>
      <section className="adults-fifth-container"></section>
      <section className="adults-sexth-container"></section>
      <section className="adults-seventh-container"></section>
      <section className="adults-eight-container">
        <Footer />
      </section>
    </div>
  );
};

export default Adults;
