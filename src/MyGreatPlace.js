import React from 'react';
import { greatPlaceStyle } from './mapStyle.js';

import './App.css';

export default class MyGreatPlace extends React.Component {
  constructor(props) {
    super(props);

  };

  render() {


    let img = 'http://iconshow.me/media/images/Mixed/small-n-flat-icon/png2/256/-map-marker.png';

    return (
      <div className="box" >
{this.props.lat} ,
{this.props.lng}
      </div>
    );
  }
}
