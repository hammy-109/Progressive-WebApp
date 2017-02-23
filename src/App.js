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
        backgroundColor : '#281B5C',
        height  : '3px',
      },
      tabsStyle:{
        backgroundColor : '#003F87 ',
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
      <div>
        <div>
          <Tabs
            onTabChange={this.onTabChange}
            selected={this.state.tabIndex} 
            lineStyle={style.linestyle}
            tabsStyle={style.tabsStyle}
            tabs={
              [{
                displayName: 'QR reader'
              }, {
                displayName: 'Location'
              }]}
          />
       </div>
        
        <div className="row">
          <SwipeableViews 
            index={this.state.tabIndex} 
            onChangeIndex={this.onTabChange}> 
            <div className="col-xs-12 fixer">
              <CameraCmp />
            </div>
            <div className="col-xs-12 ">
              <MapCmp />
            </div>
          </SwipeableViews>
        </div>


      </div>
    );
  }
}
export default App;
