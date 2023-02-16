import React from "react";
import "../styles/pages/Home.scss";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

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
      options={{
        mapTypeControl: false,
        zoomControl: false,
        fullscreenControl: true,
      }}
    >
      <Marker
        position={{ lat: 52.51712, lng: 13.30591 }}
        // label={{
        //   text: "zahnspange charlottenburg",
        //   fontSize: "14px",
        //   labelColor: "red",
        // }}
      />
    </GoogleMap>
  );
}

export default Hole;
