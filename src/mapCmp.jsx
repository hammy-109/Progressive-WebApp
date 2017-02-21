import './App.css';

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
		console.log("in initGeolocation ");
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
		console.log("in successCallback ")
		console.log(position.coords.latitude);
		console.log(position.coords.longitude);
		const mapUrl = "http://maps.google.com/maps/api/staticmap?center=" + position.coords.latitude + ',' + position.coords.longitude + '&zoom=15&size=512x512&maptype=roadmap&sensor=false';
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
				<div className="App-map">
					<img className="map-img"  src={this.state.mapUrl} role="presentation" /> 
				</div>
			  <div className="App-show-result1">
          <span > latitude:  </span> <span id="demo1"></span> <br />
          <span  > longitude:  </span> <span id="demo2"></span>
        </div>
			</div>
			)
	}

}

export default MapCmp