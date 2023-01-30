import React, { useState } from "react";
import "../styles/components/Header.scss";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
export const Header = () => {
  const [phoneSelected, setPhoneSelected] = useState(false);
  let location = useLocation();
  return (
    <div
      className="header-container"
      style={{ opacity: location.pathname === "/" ? ".85" : "1" }}
    >
      <div className="logo-container">
        <div className="logo-wrapper">
          <Link to="/">
            <img src="../imgs/logo.webp" alt="logo" className="logo" />
          </Link>
        </div>
      </div>
      <div className={"social-container"}>
        <div className="social-wrapper">
          <div className="icons-container">
            <a href="mailto:info@zahnspange-charlottenburg.de">
              <EmailIcon className="icon" />
            </a>
          </div>
          <div className="icons-container">
            <a
              href="https://goo.gl/maps/DHKyNRQ9tzcoiURw8"
              target="_blank"
              rel="noreferrer noopener"
            >
              <PlaceIcon className="icon" />
            </a>
          </div>
          <div className="icons-container">
            <a
              data-testid="linkElement"
              href="https://www.doctolib.de/praxis/berlin/kieferorthopaedie-dr-nawras-darkazanly/booking/new-patient?profile_skipped=true&amp;specialityId=1325"
              target="_blank"
              rel="noreferrer noopener"
            >
              <CalendarMonthIcon className="icon" />
            </a>
          </div>
          <div className="phone-icon-container">
            <PhoneIcon
              className="icon"
              onClick={() => setPhoneSelected(!phoneSelected)}
              style={{
                color: phoneSelected && "#20ade4",
              }}
            />

            <span
              className="header-phone-number"
              style={{
                display: phoneSelected && "block",
              }}
            >
              030 - 3414 060
            </span>
          </div>
        </div>
      </div>
      <div className="navi-fake-container"></div>
    </div>
  );
};
export default Header;
