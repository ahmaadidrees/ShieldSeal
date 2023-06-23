import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

function GoogleMap(props) {
  const mapStyles = {
    width: '100%',
    height: '400px'
  };

  const { google } = props;

  return (
    <Map
      google={google}
      zoom={10}
      style={mapStyles}
     
      initialCenter={{ lat:  37.8260372, lng:  -122.0057941 }}
      mapId="DEMO_MAP_ID"
    >
      <Marker position={{ lat: 37.8260372, lng:  -122.0057941 }} title="Uluru" />
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCRA4E6bRpvodbmQrr72rJg645_YVgKY4k'
})(GoogleMap);
