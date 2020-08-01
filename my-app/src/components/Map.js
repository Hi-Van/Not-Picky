import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyAZlCCYOnQAZqv6EvGt7Ghtvx4NuXpV0WY");

class gMap extends React.Component {

  state = {
    height: 400,
    mapPosition: {
      lat: 0,
      lng: 0,
    },
    markerPosition: {
      lat: 0,
      lng: 0,
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        mapPosition: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
        markerPosition: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }
      })
    })
  }

  onMarkerDragEnd = (event) => {
    let newLat = event.latLng.lat();
    let newLng = event.latLng.lng();

    Geocode.fromLatLng(newLat, newLng)
      .then(response => {
        console.log('response', response);
        console.log( newLat, newLng);
        this.setState({
          markerPosition: {
            lat: newLat,
            lng: newLng
          },
          mapPosition: {
            lat: newLat,
            lng: newLng
          }
        })
      })

    console.log('newlat', newLat, 'newLng', newLng);
  }

  render() {

    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
      <GoogleMap
        defaultZoom={17}
        defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
      >
        <Marker
          position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
          draggable={true}
          onDragEnd={this.onMarkerDragEnd}
          icon={{
            url: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/209/man-standing_1f9cd-200d-2642-fe0f.png',
            scaledSize: new window.google.maps.Size(30, 30)
          }}
        />
      </GoogleMap>
    ));


    return (
      <div style={{ padding: '1rem', margin: '1rem auto 3rem', maxWidth: 1200 , }}>
        <MapWithAMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAZlCCYOnQAZqv6EvGt7Ghtvx4NuXpV0WY&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `600px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default gMap;