import React, { Component } from 'react';
// Material-UI
import Spinner from 'react-spinkit';
// Style
import './Loader.scss';

export default class Loader extends Component {
  render() {
    return (
      <div id="loader" className="div_loader">
        <Spinner name="ball-clip-rotate-multiple" />
      </div>
    );
  }
}