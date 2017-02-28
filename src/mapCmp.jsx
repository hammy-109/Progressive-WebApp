import './App.css';
import GoogleMap from 'google-map-react';
import MyGreatPlace from './MyGreatPlace'
import React, {Component} from 'react';

class MapCmp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      zoom: 17,
      latitude:0,
      longitude:0,
      center:[0, 0],
    };

    let map = null;
    let maps = null;
    let marker = null;

  }

  initGeolocation = () => {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.watchPosition(this.successCallback, this.errorCallback);
    } else {
      console.log('Geolocation is not supported');
    }
  }

  errorCallback = () => {
    console.log("in errorCallback ");
  }

  successCallback = (position) => {

    const x= position.coords.latitude.toFixed(5);
    const y=position.coords.longitude.toFixed(5);
    if (this.state.latitude !== Number(x) && this.state.longitude !== Number(y)) {
      this.setState({
        latitude:Number(x),
        longitude:Number(y),
        center:[Number(x), Number(y)],
      });
    }


}
componentDidUpdate(prevProps, prevState) {
  this.initMap(this.map, this.maps);
}

initMap(map, maps) {
         if (!this.marker || this.marker=== null) {
        this.marker = new maps.Marker({
          position: {lat:this.state.latitude, lng: this.state.longitude},
          map: map
        });
        } else {
        const myLatlng = new maps.LatLng(this.state.latitude,this.state.longitude);
        console.log(myLatlng);
        this.marker.setPosition(myLatlng)
        }
      }

  render(){
    console.log("Render");
    const self=this;
    const mapStyle = {heigth: "30px", overflow: 'hidden' };

    function createMapOptions(maps) {
      return {
        zoomControlOptions: {
          position: maps.ControlPosition.RIGHT_CENTER,
          style: maps.ZoomControlStyle.SMALL,
        },
        mapTypeControlOptions: {
          position: maps.ControlPosition.TOP_RIGHT,
        },
        mapTypeControl: false,
      };
    }

    return (
        <div className="row">
            <div className="col-xs-offset-1 col-xs-10 fixer">
            <div>{this.state.latitude},{this.state.longitude}</div>
              <GoogleMap
                options={createMapOptions}
                style={mapStyle}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => {
                  this.map = map;
                  this.maps = maps;
                  this.initGeolocation();
                  }}

                bootstrapURLKeys={{ key: 'AIzaSyClrg6TsqAGm4zfUTBcZGXMxdG2Sg3LnfM' }}
                zoom={this.state.zoom}
                center={this.state.center}

              >
                <MyGreatPlace

                  lat={this.state.latitude}
                  lng={this.state.longitude}

                 />
              </GoogleMap>
            </div>

        </div>
    )
  }
}

export default MapCmp
