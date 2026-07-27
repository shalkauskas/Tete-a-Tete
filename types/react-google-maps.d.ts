import type { ReactNode } from "react";

// @react-google-maps/api v1's prop types predate React 18/19, where `children`
// is no longer implicit. Add it back to the components used in this app.
declare module "@react-google-maps/api/dist/LoadScript" {
  interface LoadScriptProps {
    children?: ReactNode;
  }
}

declare module "@react-google-maps/api/dist/GoogleMap" {
  interface GoogleMapProps {
    children?: ReactNode;
  }
}

declare module "@react-google-maps/api/dist/components/drawing/Marker" {
  interface MarkerProps {
    children?: ReactNode;
  }
}

declare module "@react-google-maps/api/dist/components/drawing/InfoWindow" {
  interface InfoWindowProps {
    children?: ReactNode;
  }
}
