import React from "react";
import { useState } from "react";
import "../../styles/pages/contact/Contact.scss";
const Index = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (event) => {
    // event.preventDefault();

    setMessage(`Thanks ${name}!`);
    setName("");
  };

  return (
    <section className="ContactContainer">
      <div className="contact-form-container">
        <form onSubmit={handleSubmit} className="contact-form">
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
                <option value="friends" defaultValue="friends">
                  Herr
                </option>
                <option value="search">Frau</option>
                <option value="ad">Herr Dr.</option>
                <option value="other">Frau Dr.</option>
                <option value="ad">Herr Dr. Dr.</option>
                <option value="other">Frau Dr. Dr.</option>
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
                placeholder="Your Name"
                required
                onChange={(event) => setName(event.target.value)}
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
                placeholder="Your Email"
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
                placeholder="Your phone number"
                required
              ></input>
            </div>
          </div>
          <div className="row-container">
            <div className="first">
              <label>Nachricht</label>
            </div>
            <div className="secound">
              <textarea
                className="input-name"
                name="message"
                placeholder="Ihr Nachricht"
              ></textarea>
            </div>
          </div>
          <div className="row-container">
            <div className="first">
              <label>&nbsp;</label>
            </div>
            <div className="secound">
              <input
                className="input-name-last"
                type="submit"
                value="Send it!"
              ></input>
            </div>
          </div>
          {message.length > 0 && (
            <div className="row-container">
              <div className="first">
                <label>&nbsp;</label>
              </div>
              <div className="secound">
                <div className="message-submit">
                  <h2>
                    {message} <br />
                    Wir haben Ihre Nachricht erhalten und werden uns so schnell
                    wie möglich bei Ihnen melden!
                  </h2>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Index;
