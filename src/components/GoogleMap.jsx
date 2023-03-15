import React, { useState } from "react";
import "../styles/pages/Home.scss";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import AltRouteIcon from "@mui/icons-material/AltRoute";
const Hole = () => {
  const [userPermession, setUserPermession] = useState(false);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });
  if (!isLoaded) return <div>loading screen</div>;
  if (!userPermession)
    return (
      <div className="map-before-loading">
        <div className="gmap-div-container">
          <div className="gmap-content">
            <div className="gmap-name">
              Zahnspange Charlottenburg / <br />
              Dr.Nawras Darkazanli
            </div>
            <div className="name-txt">
              Richard-Wagner-Platz 3 <br /> 10585 Berlin
            </div>
            <div className="bewertung">
              <span>4,3</span>
              <StarIcon className="full-star" />
              <StarIcon className="full-star" />
              <StarIcon className="full-star" />
              <StarIcon className="full-star" />
              <StarHalfIcon className="half-star" />
              <span>(45)</span>
            </div>
          </div>
          <div className="gmap-direction">
            <div className="route-icon-container">
              <AltRouteIcon className="route-icon" />
            </div>
            <a
              href="https://goo.gl/maps/DHKyNRQ9tzcoiURw8"
              target="_blank"
              rel="noreferrer noopener"
            >
              Routenplaner
            </a>
          </div>
        </div>
        <button
          className="map-before-btn"
          onClick={() => setUserPermession(true)}
        >
          Aktuelle Karte anzeigen
        </button>
      </div>
    );
  return <Map />;
};

function Map() {
  const [markerOpen, setMarkerOpen] = useState(false);
  const onMarkerClick = () => {
    setMarkerOpen(!markerOpen);
  };
  return (
    <GoogleMap
      zoom={11.55}
      center={{ lat: 52.50979, lng: 13.31442 }}
      mapContainerClassName="google-map"
      options={{
        mapTypeControl: false,
        zoomControl: false,
        fullscreenControl: true,
      }}
    >
      <Marker
        position={{ lat: 52.51712, lng: 13.30591 }}
        onClick={onMarkerClick}
        // label={{
        //   text: "zahnspange charlottenburg",
        //   fontSize: "14px",
        //   labelColor: "red",
        // }}
      />
      {markerOpen && (
        <div className="gmap-div-container">
          <div className="gmap-content">
            <div className="gmap-name">
              Zahnspange Charlottenburg / <br />
              Dr.Nawras Darkazanli
            </div>
            <div className="name-txt">
              Richard-Wagner-Platz 3 <br /> 10585 Berlin
            </div>
            <div className="bewertung">
              <span>4,3</span>
              <StarIcon className="full-star" />
              <StarIcon className="full-star" />
              <StarIcon className="full-star" />
              <StarIcon className="full-star" />
              <StarHalfIcon className="half-star" />
              <span>(45)</span>
            </div>
          </div>
          <div className="gmap-direction">
            <div className="route-icon-container">
              <AltRouteIcon className="route-icon" />
            </div>
            <a
              href="https://goo.gl/maps/DHKyNRQ9tzcoiURw8"
              target="_blank"
              rel="noreferrer noopener"
            >
              Routenplaner
            </a>
          </div>
        </div>
      )}
    </GoogleMap>
  );
}

export default Hole;
