import React from "react";
import "../styles/pages/Home.scss";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

const Hole = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });
  if (!isLoaded) return <div>loading screen</div>;

  return <Map />;
};

function Map() {
  return (
    <GoogleMap
      zoom={11}
      center={{ lat: 52.50979, lng: 13.31442 }}
      mapContainerClassName="google-map"
    ></GoogleMap>
  );
}

export default Hole;
