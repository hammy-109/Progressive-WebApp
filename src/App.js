import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MapCmp from './map.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMap : true,
      mapUrl : null,
      imgSrc:null
    }
  };
  componentDidMount() {
    this.camera = document.getElementById('camera');
    this.frame = document.getElementById('frame');
    this.mapDiv = document.getElementById("static-map");
  };



  render() { 
    const self = this;
    const style = {
      'borderStyle': 'none',
      width: '95%',
      btn:{
        color:'white'
      }
    };
 
    return (
 
      <MapCmp />
    );
  }
}

export default App;
