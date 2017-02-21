import React, { Component } from 'react';
import './App.css';
import CameraCmp from './CameraCmp.jsx';
import MapCmp from './mapCmp.jsx';
import Tabs from 'react-tabs-navigation';
import SwipeableViews from 'react-swipeable-views';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swapIndex : 0
    }
  };

  onTabChange(index){
    console.log("swapped",index);
    this.setState({swapIndex : index})
  }


  render() { 

    const styles = {
      slide: {
        padding: 15,
        minHeight: 100,
        color: '#fff',
      },
      slide1: {
        background: '#FEA900',
      },
      slide2: {
        background: '#B3DC4A',
      },
      slide3: {
        background: '#6AC0FF',
      },
    };

    const tabStyle ={
      "backgroundColor":"rgba(69, 164, 219, 0.0980392)"
    }

    return (
      <div>

      <Tabs onTabChange={this.onTabChange.bind(this)}  selected={this.state.swapIndex} color="rgba(69, 164, 219, 0.0980392)"
      tabs={[
        {
          children: () => (
            <div>

            </div>
            ),
          displayName: 'Camera'
          },
          {
            children: () => (
            <div>

            </div>
            ),
            displayName: 'Map'
          }
          ]
        }
          />


          <SwipeableViews index = {this.state.swapIndex} onChangeIndex={this.onTabChange.bind(this)}> 
            <div >
              <CameraCmp />
            </div>
            <div>
              <MapCmp />
            </div>
          </SwipeableViews>
          </div>
          );
        }
      }

      export default App;
