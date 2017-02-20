import './App.css';

import React, {Component} from 'react';

class MapCmp extends Component {
	constructor(props) {
		super(props);
		console.log(this.props,"here");
		 this.state = {
      imgUrl : true,
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
    const self = this;
    const style = {
      'borderStyle': 'none',
      width: '95%',
      btn:{
        color:'white'
      }
    };
		return 	(
			<div>
		  	<input  style={style.btn} type="file" accept="image/*" capture="camera" id="camera" onChange={this.captureButton.bind(this)} />	
          <img src={this.state.imgUrl} style={style} width='320' height='500' role="presentation"/> 
      </div>
		);
	}
}
export default MapCmp;


