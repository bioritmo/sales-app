import React, { Component } from 'react';
// Style
import logo from 'assets/imgs/logo.png';
import './Logo.scss';

export default class Logo extends Component {
  render() {
    return (
      <img src={logo} className='logo'/>
    );
  }
}