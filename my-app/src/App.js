import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  InfoWindow,
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyAZlCCYOnQAZqv6EvGt7Ghtvx4NuXpV0WY");

class App extends React.Component {

  state = {
    address: "",
    city: "",
    area: "",
    state: "",
    zoom: 15,
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

  getCity = (addressArr) => {
    let city = '';
    for (let i = 0; i < addressArr.length; i++) {
      if (addressArr[i].types[0] && 'administrative_area_level_2' === addressArr[i].types[0]) {
        city = addressArr[i].long_name;
        return city;
      }
    }
  }

  getArea = (addressArr) => {
    let area = '';
    for (let i = 0; i < addressArr.length; i++) {
      if (addressArr[i].types[0]) {
        for (let j = 0; j < addressArr.length; j++) {
          if (addressArr[i].types[j] === 'sublocality_level_1' || 'locality' === addressArr[i].types[j]) {
            area = addressArr[i].long_name;
            return area;
          }
        }
      }
    }
  }

  getState = (addressArr) => {
    let state = '';
    for (let i = 0; i < addressArr.length; i++) {
      for (let i = 0; i < addressArr.length; i++) {
        if (addressArr[i].types[0] && 'administrative_area_level_1' === addressArr[i].types[0]) {
          state = addressArr[i].long_name;
          return state;
        }
      }
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
      }, () => {
        Geocode.fromLatLng(position.coords.latitude, position.coords.longitude)
          .then(response => {

            const address = response.results[0].formatted_address,
              addressArr = response.results[0].address_components,
              city = this.getCity(addressArr),
              area = this.getArea(addressArr),
              state = this.getState(addressArr);
            console.log('response', response);
            console.log('city', city, area, state);
            this.setState({
              address: (address) ? address : '',
              area: (area) ? area : '',
              city: (city) ? city : '',
              state: (state) ? state : ''
            })
          })
      })
    })
  }

  onMarkerDragEnd = (event) => {
    let newLat = event.latLng.lat();
    let newLng = event.latLng.lng();

    Geocode.fromLatLng(newLat, newLng)
      .then(response => {

        const address = response.results[0].formatted_address,
          addressArr = response.results[0].address_components,
          city = this.getCity(addressArr),
          area = this.getArea(addressArr),
          state = this.getState(addressArr);
        console.log('response', response);
        console.log('city', city, area, state);
        this.setState({
          address: (address) ? address : '',
          area: (area) ? area : '',
          city: (city) ? city : '',
          state: (state) ? state : '',
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
        defaultZoom={15}
        defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
      >
        <Marker
          position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
          draggable={true}
          onDragEnd={this.onMarkerDragEnd}
        >
          <InfoWindow>
            <div>
              text
          </div>
          </InfoWindow>
        </Marker>
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
