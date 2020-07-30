import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

class App extends React.Component {
  render() {

    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
      >
        <Marker
          position={{ lat: -34.397, lng: 150.644 }}
        />
      </GoogleMap>
    ));


    return (
      <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAZlCCYOnQAZqv6EvGt7Ghtvx4NuXpV0WY&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}

export default App;
