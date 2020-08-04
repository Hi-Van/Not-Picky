import React from 'react';
import Geocode from "react-geocode";
import GoogleMapReact from 'google-map-react';
import Buttons from "./Buttons";

Geocode.setApiKey("AIzaSyAZlCCYOnQAZqv6EvGt7Ghtvx4NuXpV0WY");

const Marker = () => (
  <div style={{
    textAlign: 'center',
    fontSize: 'xx-large',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'inline-flex',
    transform: 'translate(-50%, -50%)'
  }}>
    <span role="img" aria-label="current position">🧍‍♂️</span></div>
);

class MapDisplay extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      constraints: [{ name: '', time: 0 }],
      searchResults: [],
      mapsLoaded: false,
      markers: [],
      map: {},
      mapsApi: {},

      placesService: {},
      geoCoderService: {},
      directionService: {},
      mapPosition: {
        lat: 0,
        lng: 0,
      }
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        mapPosition: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }
      })
    })
  }

  apiHasLoaded = ((map, maps) => {
    this.setState({
      mapsLoaded: true,
      map,
      maps,
      placesService: new maps.places.PlacesService(map),
      geoCoderService: new maps.Geocoder(),
      directionService: new maps.DirectionsService(),
    });
  });

  handleSearch = (() => {
    const { mapsApi, placesService } = this.state;
    const filteredResults = [];

    const placesRequest = {
      location: new mapsApi.LatLng(this.state.mapPosition.lat, this.state.mapPosition.lng),
      type: ['restaurant', 'cafe', 'bakery', 'meal_takeaway', 'meal_delivery'],
      query: this.props.searchText,
      rankBy: mapsApi.places.RankBy.DISTANCE,
    };

    placesService.textSearch(placesRequest, ((response) => {
      for (let i = 0; i < response.length; i++) {
        const result = response[i];
        const { name } = result;
        const address = result.formatted_address;
        filteredResults.push(name);
      }
    }))

    this.setState({ searchResults: filteredResults })
  });

  render() {
    return (
      <div className="container" style={{ maxWidth: '95%', height: '750px', margin: 'auto', padding: '2rem' }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyAZlCCYOnQAZqv6EvGt7Ghtvx4NuXpV0WY',
            libraries: ['places']
          }}
          defaultZoom={16}
          defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
          yesIWantToUseGoogleMapApiInternals={true}
          onGoogleApiLoaded={({ map, maps }) => this.apiHasLoaded(map, maps)}
        >
          <Marker
            lat={this.state.mapPosition.lat}
            lng={this.state.mapPosition.lng} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapDisplay;