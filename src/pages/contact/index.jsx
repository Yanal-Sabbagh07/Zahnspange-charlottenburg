import React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import "../../styles/pages/contact/Contact.scss";
const Index = () => {
  let navigate = useNavigate();
  const ref = useRef();
  const [success, setSucces] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_API_SERVICE_ID,
        process.env.REACT_APP_API_TEMPLATE_ID,
        ref.current,
        process.env.REACT_APP_API_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setSucces(true);
        },
        (error) => {
          console.log(error.text);
          setSucces(false);
        }
      );
  };

  return (
    <section className="ContactContainer">
      <div className="contact-form-container">
        <form ref={ref} onSubmit={handleSubmit} className="contact-form">
          <div className="row-container">
            <div className="first">
              <h1 className="contact-header">Kontaktformular:</h1>
            </div>
          </div>
          <div className="row-container">
            <div className="first">
              <label htmlFor="titel">Titel</label>
            </div>
            <div className="secound">
              <select
                name="titel"
                id="titel"
                className="input-name-opt"
                type="text"
              >
                <option value="Herr" defaultValue="Herr">
                  Herr
                </option>
                <option value="Frau">Frau</option>
                <option value="Herr Dr.">Herr Dr.</option>
                <option value="Frau Dr.">Frau Dr.</option>
                <option value="Herr Dr. Dr.">Herr Dr. Dr.</option>
                <option value="Frau Dr. Dr.">Frau Dr. Dr.</option>
              </select>
            </div>
          </div>
          <div className="row-container">
            <div className="first">
              <label htmlFor="name">Name</label>
            </div>
            <div className="secound">
              <input
                className="input-name"
                type="text"
                name="name"
                id="name"
                placeholder="Ihr Name"
                required
                // onChange={(event) => setName(event.target.value)}
              ></input>
            </div>
          </div>
          <div className="row-container">
            <div className="first">
              <label htmlFor="email">Email</label>
            </div>
            <div className="secound">
              <input
                className="input-name"
                type="email"
                name="email"
                id="email"
                placeholder="Ihr Email addresse"
                required
              ></input>
            </div>
          </div>
          <div className="row-container">
            <div className="first">
              <label htmlFor="phone">Phone</label>
            </div>
            <div className="secound">
              <input
                className="input-name"
                type="number"
                name="phone"
                id="phone"
                placeholder="Ihr Telefonnummer"
                required
              ></input>
            </div>
          </div>
          <div className="row-container">
            <div className="first">
              <label htmlFor="request">Nachricht</label>
            </div>
            <div className="secound">
              <textarea
                className="input-name"
                name="request"
                id="request"
                placeholder="Ihr Nachricht"
              ></textarea>
            </div>
          </div>
          <div className="row-container">
            <div className="first">
              <label>&nbsp;</label>
            </div>
            <div className="secound">
              <button className="input-name-last" type="submit">
                Senden
              </button>
            </div>
          </div>
          {success &&
            // <div className="row-container">
            //   <div className="first">
            //     <label>&nbsp;</label>
            //   </div>
            //   <div className="secound">
            //     <div className="message-submit">
            //       <h2>
            //         Wir haben Ihre Nachricht erhalten und werden uns so schnell
            //         wie möglich bei Ihnen melden!
            //       </h2>
            //     </div>
            //   </div>
            // </div>
            navigate("/")}
        </form>
      </div>
    </section>
  );
};

export default Index;
