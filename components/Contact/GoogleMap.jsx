import React from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import Button from "../Button";
const containerStyle = {
  maxWidth: "669px",
  width: "100vw",
  height: "431px",
};

const center = {
  lat: 42.330612,
  lng: -71.192118,
};
const divStyle = {
  background: `white`,
};
export default function Map() {
  const [map, setMap] = React.useState(null);
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  return (
    <div className="md:w-max w-full ml-auto">
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_googleMapsApiKey}>
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexFlow: "column nowrap",
            padding: 0,
            gap: "2rem",
          }}
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
            // onLoad={onLoad}
            onUnmount={onUnmount}
          >
            <Marker position={center}>
              <InfoWindow position={center}>
                <div style={divStyle}>
                  <h1 className="text-2xl bold" style={{ color: "#895B4A" }}>
                    <a href="https://www.google.com/maps/dir//Tete+A+Tete+Salon,+Beacon+Street,+Newton,+MA/@42.3306046,-71.2623209,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89e37882776a3071:0xb80e093582119c54!2m2!1d-71.192109!2d42.330626?hl=en">
                      "Tête-à-Tête"
                    </a>
                  </h1>
                </div>
              </InfoWindow>
            </Marker>
          </GoogleMap>
          <a
            className="contents"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/maps/dir//Tete+A+Tete+Salon,+Beacon+Street,+Newton,+MA/@42.3306046,-71.2623209,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89e37882776a3071:0xb80e093582119c54!2m2!1d-71.192109!2d42.330626?hl=en"
          >
            <Button className="ml-auto">Get directions</Button>
          </a>
        </div>
      </LoadScript>
    </div>
  );
}
