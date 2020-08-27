import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const ContactMap1 = props => {
  return (
    <GoogleMap defaultZoom={12} defaultCenter={{ lat: 50.6429395, lng: 3.014202  }}>
      {props.isMarkerShown && (
        <Marker position={{ lat: 50.6429395, lng: 3.014202 }} />
      )}91.8739
    </GoogleMap>
  );
};

export default withScriptjs(withGoogleMap(ContactMap1));
