import React from "react";
import "../styles/components/Header.scss";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <div className="logo-wrapper">
          <img src="../imgs/logo.webp" alt="logo" className="logo" />
        </div>
      </div>
      <div className={"social-container"}>
        <div className="social-wrapper">
          <div className="phone-container">
            <PhoneIcon className="icon" />
          </div>
          <div className="email-container">
            <EmailIcon className="icon" />
          </div>
          <div className="phone-container">
            <PlaceIcon className="icon" />
          </div>
          <div className="phone-container">
            <CalendarMonthIcon className="icon" />
          </div>
        </div>
      </div>
      <div className="navi-fake-container"></div>
    </div>
  );
};
export default Header;
