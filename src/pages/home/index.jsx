import React from "react";
import "../../styles/pages/Home.scss";
// import Image from "react-image-webp";
import Slider from "../../components/Slider";
import GoogleMap from "../../components/GoogleMap";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";

const index = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <Slider />
      </section>
      <section className="hero-section2">
        <div className="welcome-title-container">
          <h1 className="welcome-title">
            Willkommen in unserer kieferorthopädischen Facharztpraxis in
            Berlin-Charlottenburg.
          </h1>
        </div>
        <div className="welcome-waves"></div>
        <div className="welcome-content-container">
          <p className="welcome-content">
            Mit hochmodernen diagnostischen und therapeutischen Technologien, in
            freundlicher und professioneller Umgebung, möchten wir Ihnen bzw.
            ihrem Kind zu einem gesunden, schönen Lächeln verhelfen. Hier können
            Sie sich einen Überblick über unsere Praxis, unser Team und unser
            Behandlungsspektrum verschafften. Vereinbaren Sie gerne einen Termin
            bei uns und wir freuen uns darauf, Sie in unserer Praxis begrüßen zu
            dürfen.
          </p>
          <p className="welcome-owner-txt">
            Ihr Praxisteam
            <span className="welcome-owner"> Dr. Nawras Darkazanly</span> &
            Partner
          </p>
          <div className="termin-button">
            <a href="#3" className="ayah-button">
              Beratungstermin buchen!
            </a>
          </div>
        </div>
      </section>
      <section className="hero-section3" id="3">
        <div className="last-section-container">
          <div className="footer-container">
            <div className="footer-waves">
              <div className="wave" id="wave-1"></div>
              <div className="wave" id="wave-2"></div>
              <div className="wave" id="wave-3"></div>
              <div className="wave" id="wave-4"></div>
            </div>
            <div className="footer-content-container">
              <div className="footer-content-top">
                <div className="footer-content-left">
                  <div className="footer-left-details">
                    <div className="details-name">
                      <div className="name-icon logo-icon">
                        <img
                          src={require("../../imgs/logo-rose.png")}
                          alt="rose"
                          className="rose"
                        />
                      </div>
                      <div className="name-txt name">
                        Zahnspange Charlottenburg
                      </div>
                    </div>

                    <div className="details-name">
                      <div className="name-icon">
                        <PlaceIcon />{" "}
                      </div>
                      <div className="name-txt">
                        Richard-Wagner-Platz 3 <br /> 10585 Berlin
                      </div>
                    </div>

                    <div className="details-name">
                      <div className="name-icon">
                        <PhoneIcon />{" "}
                      </div>
                      <div className="name-txt">030 - 3414 060</div>
                    </div>

                    <div className="details-name">
                      <div className="name-icon">
                        <LocalPrintshopIcon />{" "}
                      </div>
                      <div className="name-txt">030 - 3419 787</div>
                    </div>

                    <div className="details-name">
                      <div className="name-icon">
                        <EmailIcon />{" "}
                      </div>
                      <div className="name-txt">
                        info@zahnspange-charlottenburg.de
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footer-content-right">
                  <div className="content-right-title">Öffnungszeiten</div>
                  <div className="content-right-title2">
                    <div className="day">Mo - Do :</div>
                    <div className="time"> 09:00 - 12:00 & 13:00 - 18:00</div>
                  </div>
                  <div className="content-right-title2">
                    <div className="day">Fr :</div>
                    <div className="time"> Nach Vereinbarung</div>
                  </div>
                </div>
              </div>
              <div className="footer-content-middle"></div>
              <div className="footer-content-bottom"></div>
            </div>
          </div>

          <div className="google-map-container">
            <GoogleMap />
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
