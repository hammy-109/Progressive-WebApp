import './App.css';

import React, {Component} from 'react';

class CameraCmp extends Component {
	constructor(props) {
		super(props);
		console.log(this.props,"here");
		 this.state = {
      imgUrl : null,
    }
	}

  componentDidMount() {
    this.camera = document.getElementById('camera');
    this.frame = document.getElementById('frame');
  };

	captureButton(e){
		const file = e.target.files[0]; 
    // this.frame.src = URL.createObjectURL(file);
    this.setState({imgUrl : URL.createObjectURL(file)})
	};



	render() {
    const style = {
      'borderStyle': 'none',
      width: '95%',
      
    };
    const divHeight ={
      height: '423px',
    } 
		return 	(
			<div style={divHeight}>
		  	<input  type="file" className="cam-btn" accept="image/*" capture="camera" id="camera" onChange={this.captureButton.bind(this)} />	
          <img src={this.state.imgUrl} className="App-img" style={style} width='320'  role="presentation"/> 
      </div>
		);
	}
}
export default CameraCmp;


