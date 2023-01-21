import React from "react";
import "../styles/pages/Home.scss";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
const Hole = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBQP1RyhTjaE0LNdUiAXrKKBG4bv4xOqcA",
  });
  if (!isLoaded) return <div>loading screen</div>;
  return <Map />;
};

function Map() {
  return (
    <GoogleMap
      zoom={12}
      center={{ lat: 52.50979, lng: 13.31442 }}
      mapContainerClassName="google-map"
    >
      hi
    </GoogleMap>
  );
}

export default Hole;
