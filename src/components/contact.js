import React from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

const mapStyles = {
  width: "50%",
  height: "50%"
};

export class Contact extends React.Component {
  render() {
    return (
      <>
        <section className="contact">
          <h3>GET IN TOUCH!</h3>
          <div>
            <label>Email:</label>
            <a href="mailto:allysiamartinezlmt@gmail.com">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-envelope-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
                />
              </svg>
              allysiamartinezlmt@gmail.com
            </a>
            <br />
            <label>Phone:</label>
            <a href="tel:12108332331">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-telephone-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"
                />
              </svg>
              (m) 210.833.2331
            </a>
          </div>

          <Map
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={{
              lat: 29.472136,
              lng: -98.462477,
            }}
            className="map"
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
        </section>
      </>
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
  apiKey: "AIzaSyDImgHnUhX0xs3H_Guc1LyjCP5UOQ6tAlE",
})(Contact);
