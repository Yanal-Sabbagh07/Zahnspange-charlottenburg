import React from "react";
import Footer from "../../components/Footer";
import "../../styles/pages/message/Message.scss";
import { useLocation } from "react-router-dom";
const Message = () => {
  const location = useLocation();

  const title = location.state.title;
  const name = location.state.name;

  return (
    <div className="message-page-container">
      <section className="message-container">
        <p className="message-content">
          Liebe(r){" "}
          <span>
            {title.title} {name.name}
          </span>
          , <br />
          <br />
          Vielen Dank für Ihre Anfrage. Wir werden uns schnellst möglich bei
          Ihnen melden.
          <br />
          <br /> Herzliche Grüße,
          <br /> das Team der ZahnSpange-Charlottenburg|Dr.Nawras Darkazanly
        </p>
      </section>
      <section className="message-footer">
        <Footer />
      </section>
    </div>
  );
};

export default Message;
