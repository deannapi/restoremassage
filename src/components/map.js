import React from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
require("dotenv").config();

const mapStyles = {
  width: "80%",
  height: "70%",
};

const containerStyle = {
  position: 'absolute',  
  width: '100%',
  height: '100%',
};

export class Maps extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 29.472136,
          lng: -98.462477,
        }}
        className="map"
        containerStyle={containerStyle}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={"Restore Massage & Bodywork"}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAP_API,
})(Maps);
