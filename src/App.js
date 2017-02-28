import React, { Component } from 'react';

import Tabs from 'react-tabs-navigation';
import SwipeableViews from 'react-swipeable-views';

import CameraCmp from './CameraCmp.jsx';
import MapCmp from './mapCmp.jsx';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex : 0
    }
  };

  onTabChange = (tabIndex) => {
    this.setState({ tabIndex });
  };

  render() { 
   const style ={
      linestyle:{
        backgroundColor : 'rgba(0,173,255,.54)',
        height  : '3px',
      },
      tabsStyle:{
        backgroundColor : '#ffffff ',
        color : 'rgba(0,173,255,.54)',

        focus: {
          backgroundColor : '#10336b',
          color : 'rgba(0,173,255,.54)',
        },
        hover :{
          backgroundColor : 'white',
          color : 'rgba(0,173,255,.54)',
        }
      },
    }
    return (
      <div className="tab-over">
        <div className="tab-over">
          <Tabs
            onTabChange={this.onTabChange}
            selected={this.state.tabIndex} 
            lineStyle={style.linestyle}
            tabsStyle={style.tabsStyle}
            tabs={
              [{
                displayName: 'Location'
              }, {
                displayName: 'QR reader'
              }]}
          />
       </div>
        
        <div className="row">
          <SwipeableViews 
            index={this.state.tabIndex} 
            onChangeIndex={this.onTabChange}> 
            <div className="col-xs-12 fixer tab-over" 
            >
              <MapCmp />
            </div>
            <div className="col-xs-12 fixer tab-over" 
            >
              <CameraCmp />
            </div>

          </SwipeableViews>
        </div>


      </div>
    );
  }
}
export default App;
