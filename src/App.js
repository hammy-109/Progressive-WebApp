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
        backgroundColor : 'white',
        color : 'rgba(0,173,255,.54)',
        focus: {
          backgroundColor : 'white',
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
        <Tabs 
          onTabChange={this.onTabChange}
          selected={this.state.tabIndex} 
          lineStyle={style.linestyle}
          tabsStyle={style.tabsStyle}
          tabs={
            [
              {
                children: () => (
                  <div></div>
                ),
                displayName: 'QR reader'
              },
              {
                children: () => (
                <div></div>
                ),
                displayName: 'Location'
              }
            ]
          }
        />
        <SwipeableViews 
          index={this.state.tabIndex} 
          onChangeIndex={this.onTabChange}> 
          <div>
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
