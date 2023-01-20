import React, { useState, useEffect, useRef } from "react";
import "../styles/components/Slider.scss";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "react-image-webp";
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      let id = setInterval(() => {
        savedCallback.current();
      }, delay);
      return () => clearInterval(id);
    }, [delay]);
  }

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 4);
    } else {
      setSlideIndex(slideIndex < 4 ? slideIndex + 1 : 0);
    }
  };
  useInterval(() => {
    if (slideIndex < 4) {
      setSlideIndex(slideIndex + 1);
    } else {
      setSlideIndex(0);
    }
  }, 3500);

  return (
    <div className="slider-container">
      <div className="arrow arrow-left" onClick={() => handleClick("left")}>
        <ArrowBackIosNewIcon />
      </div>
      <div
        className="images-wrapper"
        style={{
          transform:
            slideIndex === 1
              ? "translateX(-100vw)"
              : slideIndex === 2
              ? "translateX(-200vw)"
              : slideIndex === 3
              ? "translateX(-300vw)"
              : "translateX(0)",
        }}
      >
        <div className="image-container">
          <div className="hero-image">
            <Image
              src={require("../imgs/hero2.jpg")}
              webp={require("../imgs/hero2.webp")}
              className="image1"
            />
          </div>
        </div>
        <div className="image-container">
          <div className="hero-image">
            <Image
              src={require("../imgs/hero1.jpg")}
              webp={require("../imgs/hero1.webp")}
              className="image2"
            />
          </div>
        </div>
        <div className="image-container">
          <div className="hero-image">
            <Image
              src={require("../imgs/hero2.jpg")}
              webp={require("../imgs/hero2.webp")}
              className="image3"
            />
          </div>
        </div>
        <div className="image-container">
          <div className="hero-image">
            <Image
              src={require("../imgs/hero1.jpg")}
              webp={require("../imgs/hero1.webp")}
              className="image4"
            />
          </div>
        </div>
      </div>
      <div className="arrow arrow-right" onClick={() => handleClick("right")}>
        <ArrowForwardIosIcon />
      </div>
    </div>
  );
};

export default Slider;
