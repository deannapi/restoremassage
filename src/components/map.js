import React from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

const mapStyles = {
  width: "90%",
  height: "70%",
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
            width="80%"
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
        )
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
    apiKey: "AIzaSyDImgHnUhX0xs3H_Guc1LyjCP5UOQ6tAlE",
  })(Maps);