import React from "react";
import "../../styles/pages/leistungen/Kids.scss";
import Footer from "../../components/Footer";
import WaveSection from "../../components/WaveSection";
import TreatmentSection from "../../components/TreatmentSection";
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
      <section className="kids-treatment-container">
        <TreatmentSection
          image="url(../../imgs/AlignerfürTeenager.png)"
          reverse="false"
          color="#1f5ca2"
          header="Alginer für Teenager:"
          text="Vielen Patienten ist nicht bewusst, dass am Ende einer Kieferorthopädischen Behandlung, 
          in der Regel der Anfang der Retentionsphase ist. 
          Wird in dieser Phase die Haltespange nicht regelmäßig getragen, 
          verschieben sich die Zähne zurück und es entsteht wieder Engstande, die die Ästhetik und Funktion stören können. 
          Dieser Engstande kann mit der Rezidiv Behandlung wieder  
          gerade gestellt werden und mit einem festen Retainer stabilisiert werden."
        />
      </section>
      <section className="kids-treatment-container">
        <TreatmentSection
          image="url(../../imgs/feste.png)"
          position="30%"
          reverse="true"
          color="#20ade4"
          header="Feste Zahnspange:"
          text="Vielen Patienten ist nicht bewusst, dass am Ende einer Kieferorthopädischen Behandlung, 
          in der Regel der Anfang der Retentionsphase ist. 
          Wird in dieser Phase die Haltespange nicht regelmäßig getragen, 
          verschieben sich die Zähne zurück und es entsteht wieder Engstande, die die Ästhetik und Funktion stören können. 
          Dieser Engstande kann mit der Rezidiv Behandlung wieder  
          gerade gestellt werden und mit einem festen Retainer stabilisiert werden."
        />
      </section>
      <section className="kids-treatment-container">
        <TreatmentSection
          reverse="false"
          image="url(../../imgs/Herausnehmbare.jpeg)"
          position="70%"
          color="#1f5ca2"
          header="Herausnehmbare Zahnspange:"
          text="Vielen Patienten ist nicht bewusst, dass am Ende einer Kieferorthopädischen Behandlung, 
          in der Regel der Anfang der Retentionsphase ist. 
          Wird in dieser Phase die Haltespange nicht regelmäßig getragen, 
          verschieben sich die Zähne zurück und es entsteht wieder Engstande, die die Ästhetik und Funktion stören können. 
          Dieser Engstande kann mit der Rezidiv Behandlung wieder  
          gerade gestellt werden und mit einem festen Retainer stabilisiert werden."
        />
      </section>
      <section className="kids-treatment-container">
        <TreatmentSection
          image="url(../../imgs/Frühbehandlung.jpeg)"
          reverse="true"
          color="#20ade4"
          header="Frühbehandlung:"
          text="Es gibt keinen zu frühen Besuch in der Kieferorthopädie. Auch im Milchgebiss alter ist ratsam, 
          die Gebissentwicklung kontrollieren zu lassen, somit kann frühzeitige fehl Stellung festgestellt werden. 
          Zu kontrollieren sind Störfaktoren die z.B den Gebissentwicklung beeinträchtigen können. 
          Eine Frühbehandlung kann dies rechtzeitig beseitig und Spätfolgen vermeiden."
        />
      </section>
      <section className="kids-treatment-container">
        <TreatmentSection
          image="url(../../imgs/skelettale.png)"
          reverse="flase"
          color="#1f5ca2"
          header="Skeletale Verankerung (AVL):"
          text="Bei dieser Apparatur handelt es sich um eine komplexe Konstruktion in Kombination mit Mini-Implantaten, die dazu verwendet werden um Backenzähne nach hinten zu bewegen.
          Ähnlich wie mit einem Headgear, den man früher einsetzte, kann man hiermit, 
          allerdings „unsichtbar“ und ohne Patienten-Compliance, 
          die Zähne im Oberkiefer kontinuierlich nach hinten bewegen, um im vorderen Bereich, 
          z.B. für die Eckzähne, Platz zu schaffen, damit müssen bleibende Zähne nicht entfernt werden."
        />
      </section>
      <section className="kids-treatment-container">
        <TreatmentSection
          image="url(../../imgs/festenRetainer.png)"
          reverse="true"
          color="#20ade4"
          header="Feste Retainer:"
          text="Nach Abschluss der kieferorthopädischen Behandlung ist es notwendig, 
          das erreichte Behandlungsergebnis über einen bestimmten Zeitraum zu stabilisieren. 
          Zur optimalen Stabilisierung empfehlen wir einen festsitzenden Retainer. 
          Dieser bietet den besten Schutz vor Änderungen der Zahnstellungen. 
          Der Retainerdraht wird an die Innenseite der Frontzähne, von außen unsichtbar, 
          mit winzigen Klebestellen angebracht. Dort kann er über einen längeren Zeitraum belassen werden. 
          Eine Zahnreinigung wird dadurch nicht behindert. 
          In anfangs vierteljährlichen und später halbjährlichen Kontrollen wird der Retainer auf Funktionalität 
          überprüft."
        />
      </section>
      <section className="kids-eight-container">
        <Footer />
      </section>
    </div>
  );
};

export default Kids;
