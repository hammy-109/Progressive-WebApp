import React, { Component } from 'react';
//import logo from './logo.svg';
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
        <div>
          <img id='frame' style={style} width='320' height='500' role="presentation"/> 
        </div>
      </div>
    );
  }
}

export default App;
