import './App.css';
import React, {Component} from 'react';
import QrReader from 'react-qr-reader';

class CameraCmp extends Component {

	constructor(props) {
		super(props);
		 this.state = {
      imgUrl : null,
      delay: 100,
      result: 'No result',
      facingMode: 'rear',
      screenTypeScan: true,
    }
	}

  handleScan = (data) => {
    this.setState({
      result: data,
      screenTypeScan: false,
    })
  };

  handleError = (err) => {
    console.log(err)
  };

  toggleScan = () => {
    this.setState({ screenTypeScan: !this.state.screenTypeScan });
  };

	render() {
    const style = {
      camera :{
      width :'fill',
      height:400,
      marginLeft:'auto',
      marginRight:'auto',
      },
      heading:{
        textAlign:'center',
      }
    }

    const screenTypeScan = this.state.screenTypeScan;
    
    const scanner = (<div>
      <h1 style={style.heading}>Scan QR code</h1>
      <QrReader
        maxImageSize={500}
        delay={this.state.delay}
        onError={this.handleError}
        onScan={this.handleScan}
        facingMode={this.state.facingMode}
        style={style.camera}
      />
      <p>{this.state.result}</p>
    </div>);
    
    const output = (<div>
      <p>{this.state.result}</p>
      <input type="button" value="Re-scan" onClick={this.toggleScan}/>
    </div>);

    if (screenTypeScan) {
      return scanner;
    }
    return output;	
  }
}
export default CameraCmp;
