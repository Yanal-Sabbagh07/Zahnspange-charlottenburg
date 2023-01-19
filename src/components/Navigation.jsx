import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/components/navigation.scss";
const Navigation = () => {
  const [navOpen, setnavOpen] = useState(false);
  return (
    <div className="navigation">
      <div
        className="navigation__button"
        onClick={() => setnavOpen(!navOpen)}
        style={{ backgroundColor: navOpen ? "white" : "#0969da" }}
      >
        <span className={!navOpen ? "navigation__icon" : "navigation__openHam"}>
          &nbsp;
        </span>
      </div>

      <div
        className="navigation__background"
        style={{ transform: navOpen ? "scale(100)" : "scale(1)" }}
      >
        &nbsp;
      </div>

      <nav
        className="navigation__nav"
        style={{
          opacity: navOpen && "1",
          left: navOpen && "0px",
          width: navOpen ? "100%" : "-100vw",
        }}
      >
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link
              to="/"
              className="navigation__link"
              onClick={() => setnavOpen(false)}
            >
              <span>01</span> Home
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/about" className="navigation__link">
              <span>02</span> Über uns
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/treatment" className="navigation__link">
              <span>03</span> Leistungen
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/contact" className="navigation__link">
              <span>04</span> Ablauf einer Behandlung
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/services" className="navigation__link">
              <span>05</span> Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
