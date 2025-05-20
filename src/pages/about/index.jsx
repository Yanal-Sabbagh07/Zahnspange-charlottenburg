import React from "react";
import "../../styles/pages/about/About.scss";
// import { useLocation } from "react-router-dom";
import Slider from "../../components/Slider";
import Collapsable from "../../components/Collapsable";
import NurseCard from "../../components/NurseCard";
import nurses from "../../helpers/nurses";
import Footer from "../../components/Footer";
import { aboutSlider } from "../../helpers/aboutSlider";

const About = () => {
  return (
    <div className="aboutus-page-container">
      <section className="about-slider-contianer">
        <Slider sliderData={aboutSlider} count={6}/>
        {/* <div className="about-hero-img"></div> */}
      </section>
      <section className="team-section-container">
        <div className="title-container">
          <h1 className="title">Unser Praxisteam</h1>
        </div>
        <div className="Dr-N-container" id="/about">
          <div className="Dr-N-img-container">
            <div className="Dr-N-img"></div>
          </div>
          <div className="Dr-N-cv-container">
            <div className="dr-name">
              <h3>Dr. Nawras Darkazanly</h3>
            </div>
            <div className="dr-job">
              <p>Fachzahnarzt für Kieferorthopädie</p>
            </div>

            <Collapsable className="dr-cv"/>
          </div>
        </div>
        <div className="Dr-P-container" id="/about">
          <div className="Dr-P-cv-container">
            <div className="dr-name">
              <h3>Dr. Senem Kaya</h3>
            </div>
            <div className="dr-job">
              <p>Fachzahnarzt für Kieferorthopädie</p>
            </div>
          </div>
          <div className="Dr-P-img-container">
            <div className="Dr-P-img"></div>
          </div>
        </div>
        <div className="Nurses-container">
          <div className="Nurses-wrapper">
            {nurses.map((nurse, index) => {
              return (
                <NurseCard
                  name={nurses[index].name}
                  job={nurses[index].job}
                  img={nurses[index].img}
                />
              )
            })}
          </div>
        </div>
      </section>

      <div className="about-footer">
        <Footer/>
      </div>
    </div>
  );
};

export default About;
