import './App.css';
// import GoogleMap from 'google-map-react';
import React, {Component} from 'react';

class MapCmp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapUrl : null,
    }
    console.log(this.props,"mapCmp");
    this.initGeolocation();
  }

  initGeolocation() {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.successCallback.bind(this), this.errorCallback);
    }
    else {
      console.log('Geolocation is not supported');
    }
  }

  errorCallback() {
    console.log("in errorCallback ");
  }

  successCallback(position) {
    const mapUrl = "https://maps.google.com/maps/api/staticmap?center=" + position.coords.latitude + ',' + position.coords.longitude + '&zoom=15&size=512x512&maptype=roadmap&sensor=false';
    console.log(mapUrl);
    this.setState({mapUrl : mapUrl})
    const x = position.coords.latitude;
    document.getElementById("demo1").innerHTML = x.toFixed(3);
    const y = position.coords.longitude;
    document.getElementById("demo2").innerHTML = y.toFixed(3);
}

  render(){

    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-1 col-xs-10 App-map">
           <img className="map-img"  src={this.state.mapUrl} role="presentation"  /> 
          </div>
        </div>

        <div className="row">
          <div className="col-xs-offset-4 col-xs-8 App-show-result1">
     		   <span > latitude:  </span> <span id="demo1"></span> <br />
     		   <span  > longitude:  </span> <span id="demo2"></span>
          </div>
        </div>
      </div>
    )
  }
}

export default MapCmp