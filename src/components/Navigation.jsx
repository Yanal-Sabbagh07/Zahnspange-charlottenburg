import React, { useState } from "react";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../styles/components/navigation.scss";
const Navigation = () => {
  const [navOpen, setnavOpen] = useState(false);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="navigation">
      <div
        className="navigation__button"
        onClick={() => setnavOpen(!navOpen)}
        style={{ backgroundColor: navOpen ? "white" : "#1f5ca2" }}
      >
        <span className={!navOpen ? "navigation__icon" : "navigation__openHam"}>
          &nbsp;
        </span>
      </div>

      <div
        className="navigation__background"
        style={{ transform: navOpen ? "scale(130)" : "scale(1)" }}
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
              Home
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              to="/about"
              className="navigation__link"
              onClick={() => setnavOpen(false)}
            >
              Über uns
            </Link>
          </li>
          {/* <li className="navigation__item">
            <Link
              to="/treatment"
              className="navigation__link"
              onClick={() => setnavOpen(false)}
            >
              Leistungen
            </Link>
          </li> */}
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            style={{
              backgroundColor: "transparent",
              boxShadow: "none",
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              // backgroundColor: "red",
              marginLeft: "-16px",
              marginTop: "-16px",
              marginBottom: "-16px",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  className="ex-icon"
                  style={{ fontSize: "xx-large", color: "white" }}
                />
              }
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <li className="navigation__item">
                <Link
                  to="/treatment"
                  className="navigation__link "
                  onClick={() => setnavOpen(false)}
                >
                  Leistungen
                </Link>
              </li>
            </AccordionSummary>
            <AccordionDetails
              style={{
                marginLeft: "16px",
              }}
            >
              <li className="navigation__item">
                <Link
                  to="/treatment/kids"
                  className="navigation__link navigation__special"
                  onClick={() => setnavOpen(false)}
                >
                  kinder/Jugendliche
                </Link>
              </li>
            </AccordionDetails>
            <AccordionDetails style={{ marginLeft: "16px" }}>
              <li className="navigation__item">
                <Link
                  to="/treatment/adults"
                  className="navigation__link navigation__special"
                  onClick={() => setnavOpen(false)}
                >
                  Erwachsene
                </Link>
              </li>
            </AccordionDetails>
          </Accordion>
          <li className="navigation__item">
            <Link
              to="/contact"
              className="navigation__link"
              onClick={() => setnavOpen(false)}
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
