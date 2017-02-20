import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CameraCmp from './CameraCmp.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMap : true,
      mapUrl : null,
      imgSrc:null
    }
  };
 
 
  render() { 
    
    return (

      <CameraCmp />
    );
  }
}

export default App;
