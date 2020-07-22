// external
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Animated } from "react-animated-css";
// material
import RaisedButton from 'material-ui/RaisedButton';
import logo from '../../../assets/imgs/logo.png'
import { AlertMsg, Loader } from '../../../ui';

// internal

//style
import './Home.scss';

const Home = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.main.isLoading || false);
  const message = useSelector(state => state.main.message);

  return (
    <div>
      { isLoading && ( <Loader /> )}
      { message.show && ( <AlertMsg show kind={message.type} message={message.msg}/> )}
      <img src={logo} className="logo-bio"/>
      <div>
        <div Style="width: 80%;height: 100%;margin-top: 10px;margin: auto;">
          <div>
            <Animated animationInDuration="1000" animationIn="fadeInLeft" isVisible={true}>
              <div className="item-avatar-musc2"></div>
            </Animated>
          </div>
          
          <div className="container-item">
            <Animated animationInDelay="600" animationInDuration="1000" animationIn="fadeInRight" isVisible={true}>
              <div className="item-avatar-race2"></div>
            </Animated>
          </div>

          <div>
            <Animated animationInDelay="600" animationInDuration="1000" animationIn="fadeInLeft" isVisible={true}>
              <div className="item-avatar-squad2"></div>
            </Animated>
          </div>
          
          <div className="container-item">
            <Animated animationInDelay="1000" animationInDuration="1000" animationIn="fadeInRight" isVisible={true}>
              <div className="item-avatar-vidya2"></div>
            </Animated>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Home;