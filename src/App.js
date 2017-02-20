import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.captureButton = this.captureButton.bind(this);
  };
  componentDidMount() {
    this.camera = document.getElementById('camera');
    this.frame = document.getElementById('frame');
  
  };
  captureButton(e){
   const file = e.target.files[0]; 
    this.frame.src = URL.createObjectURL(file);
  }
  initGeolocation() {
  console.log("in initGeolocation ");
  if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.successCallback, this.errorCallback);
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
    let mapUrl = "http://maps.google.com/maps/api/staticmap?center=" + position.coords.latitude + ',' 
    + position.coords.longitude + '&zoom=15&size=512x512&maptype=roadmap&sensor=false';
    const imgElement = document.getElementById("static-map");
    imgElement.src = mapUrl;
    const x = position.coords.latitude;
    document.getElementById("demo1").innerHTML = x;
    const y = position.coords.longitude;
    document.getElementById("demo2").innerHTML = y;
  }
  render() { 
    const style = {
      'border-style': 'none',
      width: '95%',
      btn:{
        color:'white'
      }
    };
    return (
      <div className="App" > 
        <br/>
        <input text='Camera' style={style.btn} type="file" accept="image/*" capture="camera" id="camera" onChange={this.captureButton}/>
        <span>
            <button id="butLocation"  class="headerButton" onClick={() => { this.initGeolocation() }}>
            change </button>
            </span>
        <div>
          <img id='frame' style={style} width='320' height='500' role="presentation"/> 
        </div>
        <div className="App-map">
          <img id="static-map" /> 
        </div>
        
        <div className="App-show-result1">
          <span > latitude:  </span> <span id="demo1"></span> 
          <span  > longitude:  </span> <span id="demo2"></span>
        </div>



      </div>
    );
  }
}

export default App;
