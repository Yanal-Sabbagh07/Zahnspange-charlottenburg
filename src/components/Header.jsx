import React, { useState } from "react";
import "../styles/components/Header.scss";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";
export const Header = () => {
  //   let location = useLocation("/");
  //   const [hoover, setHoover] = useState("");
  const [open, setOpen] = useState(false);
  return (
    <div className="header-container">
      <div className="logo-container">
        <div className="logo-wrapper">
          <img src="../imgs/logo.webp" alt="logo" className="logo" />
        </div>
      </div>
      <div className="social-container">
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

      <div className="nav-container">
        <nav className="mobile-navigator">
          <div
            onClick={() => setOpen(!open)}
            className={open ? "openHam" : "hamburger"}
          ></div>
          <ul
            className="linksContainterMobile"
            style={{ top: open ? "65px" : "-100vh" }}
            onClick={() => setOpen(false)}
          >
            <li className="listItemMobile">
              <Link to="/home" className="">
                Home
              </Link>
            </li>
            <li className="listItemMobile">
              <Link to="/about" className="">
                Über uns
              </Link>
            </li>
            <li className="listItemMobile">
              <Link to="/services" className="">
                Leistungen
              </Link>
            </li>
            <li className="listItemMobile">
              <Link to="/treatment" className="">
                Ablauf einer behandlung
              </Link>
            </li>
            <li className="listItemMobile">
              <Link to="/contact" className="">
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Header;
