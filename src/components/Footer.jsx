import React from "react";
import "../styles/components/Footer.scss";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import Button from "./Button";
import GoogleMap from "./GoogleMap";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content-container">
        <div className="footer-content-top">
          <div className="footer-content-left">
            <div className="footer-left-details">
              <div className="details-name">
                <div className="name-icon logo-icon">
                  <img
                    src={require("../imgs/logo-rose.png")}
                    alt="rose"
                    className="rose"
                  />
                </div>
                <div className="name-txt name">Zahnspange Charlottenburg</div>
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
            <div className="content-right-title">Öffnungszeiten :</div>
            <div className="content-right-title2">
              <div className="day">Mo - Do :</div>
              <div className="time"> 09:00 - 12:00 & 13:00 - 18:00</div>
            </div>

            <div className="content-right-title2">
              <div className="day">Fr :</div>
              <div className="time"> Nach Vereinbarung</div>
            </div>
            <div className="empty-container">
              <div>&nbsp;</div>
            </div>
            <div className="footer-button-container">
              <Button bgColor="#fff" color="#1f5ca2" />
            </div>
          </div>
        </div>
        <div className="footer-content-middle">
          <span />
        </div>
        <div className="footer-content-bottom">
          <div className="footer-copy-right">
            &copy; 2022 by Zahnspange Charlottenburg.
          </div>
          <div className="footer-social-media">
            <a
              href="https://www.facebook.com/Zahnspangeberlin"
              target="_blank"
              rel="noreferrer noopener"
              className="social-icon-container fb"
            >
              <FacebookIcon className="social-icon" />
            </a>

            <a
              href="https://www.instagram.com/zahnspangeberlin"
              target="_blank"
              rel="noreferrer noopener"
              className="social-icon-container ig"
            >
              <InstagramIcon className="social-icon" />
            </a>
          </div>
          <div className="footer-impressum">
            <a href="/">Impressum</a>
            <a href="/">Datenschutzerklärung</a>
          </div>
        </div>
      </div>
      <div className="google-map-container">
        <GoogleMap />
      </div>
    </div>
  );
};

export default Footer;