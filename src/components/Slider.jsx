import React, { useState, useEffect, useRef } from "react";
import "../styles/components/Slider.scss";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import Image from "react-image-webp";
const Slider = (props) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [delay, setDelay] = useState(7000);

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
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 0);
      setDelay(50000);
    } else {
      setSlideIndex(slideIndex < props.count ? slideIndex + 1 : props.count);
      setDelay(50000);
    }
  };
  useInterval(() => {
    if (slideIndex < props.count) {
      setSlideIndex(slideIndex + 1);
    } else {
      setSlideIndex(0);
    }
  }, delay);
  // console.log(props);
  return (
    <div className="slider-container">
      <div className="arrow arrow-left" onClick={() => handleClick("left")}>
        <ArrowBackIosNewIcon className="arrow-icon" />
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
              : slideIndex === 4
              ? "translateX(-400vw)"
              : slideIndex === 5
              ? "translateX(-500vw)"
              : slideIndex === 6
              ? "translateX(-600vw)"
              : "translateX(0)",
        }}
      >
        <div className="image-container">
          <div className="hero-image">
            <div
              // src={require(`../imgs/${props.hero2}${props.type}`)}
              // webp={require(`../imgs/${props.hero2}.webp`)}
              className={props.hero2Cn}
            />
          </div>
        </div>

        <div className="image-container">
          <div className="hero-image">
            <div
              // src={require(`../imgs/${props.hero1}${props.type}`)}
              // webp={require(`../imgs/${props.hero1}.webp`)}
              className={props.hero1Cn}
            />
          </div>
        </div>

        <div className="image-container">
          <div className="hero-image">
            <div className={props.hero3Cn}/>
          </div>
        </div>
        <div className="image-container">
          <div className="hero-image">
          <div className={props.hero4Cn}/>
          </div>
        </div>
        <div className="image-container">
          <div className="hero-image">
          <div className={props.hero5Cn}/>
          </div>
        </div>
        <div className="image-container">
          <div className="hero-image">
          <div className={props.hero6Cn}/>
          </div>
        </div>
        <div className="image-container">
          <div className="hero-image">
          <div className={props.hero7Cn}/>
          </div>
        </div>
        
      </div>
      <div className="arrow arrow-right" onClick={() => handleClick("right")}>
        <ArrowForwardIosIcon className="arrow-icon" />
      </div>
    </div>
  );
};

export default Slider;
