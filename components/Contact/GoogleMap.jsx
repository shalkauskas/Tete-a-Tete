import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const containerStyle = {
  width: "669px",
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
    <div className="w-full mx-auto">
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_googleMapsApiKey}>
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexFlow: "row nowrap",
            justifyContent: "center",
            padding: 0,
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
        </div>
      </LoadScript>
    </div>
  );
}
