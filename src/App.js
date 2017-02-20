import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMap : true,
      mapUrl : null,
      imgSrc:null
    }
    this.captureButton = this.captureButton.bind(this);
    this.initGeolocation();
  };
  componentDidMount() {
    this.camera = document.getElementById('camera');
    this.frame = document.getElementById('frame');
    this.mapDiv = document.getElementById("static-map");
  };
  captureButton(e){
   const file = e.target.files[0]; 
    // this.frame.src = URL.createObjectURL(file);
    this.setState({imgSrc:URL.createObjectURL(file)})
    this.setState({showMap : false});

  }
  initGeolocation() {
  this.setState({showMap : true});
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
    var mapUrl = "http://maps.google.com/maps/api/staticmap?center=";
    mapUrl = mapUrl + position.coords.latitude + ',' + position.coords.longitude;
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    mapUrl = mapUrl + '&zoom=15&size=512x512&maptype=roadmap&sensor=false';
    console.log(mapUrl);
    this.setState({mapUrl : mapUrl})
    var x = position.coords.latitude;
    document.getElementById("demo1").innerHTML = x;
    var x = position.coords.latitude;
    document.getElementById("demo2").innerHTML = x;
  }
  render() { 
    const self = this;
    const style = {
      'borderStyle': 'none',
      width: '95%',
      btn:{
        color:'white'
      }
    };
      let divMapCamera ;
      console.log("here show map statue",self.state.showMap);
    if(self.state.showMap === false){
          divMapCamera = (
                            <div>
                              <img src={this.state.imgSrc} style={style} width='320' height='500' role="presentation"/> 
                            </div>
                         )
          }else{
             divMapCamera = ( 
                              <div className="App-map">
                                <img  src={this.state.mapUrl} role="presentation" /> 
                              </div>
                            )
           } 
    return (
      <div className="App" > 
        <br/>
        <input  style={style.btn} type="file" accept="image/*" capture="camera" id="camera" onChange={this.captureButton}/>
        <span>
            <button id="butLocation"  className="headerButton" onClick={() => { this.initGeolocation() }}>
            Where AM I ? </button>
            </span>



        {divMapCamera}
        <div className="App-show-result1">
          <span > latitude:  </span> <span id="demo1"></span> 
          <span  > longitude:  </span> <span id="demo2"></span>
        </div>



      </div>
    );
  }
}

export default App;
