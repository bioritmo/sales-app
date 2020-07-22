// external
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Animated } from "react-animated-css";
// material
import RaisedButton from 'material-ui/RaisedButton';
import { logo } from '../../../../assets/imgs/logo.png'
import { AlertMsg, Loader } from '../../../../ui';

// internal
import * as actions from '../../../../state/main/actions';
//style
import './SelectAvatar.scss';

const SelectAvatar = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.main.isLoading || false);
  const message = useSelector(state => state.main.message);

  return (
    <div className="select-avatar-container">
      { isLoading && ( <Loader /> )}
      { message.show && ( <AlertMsg show kind={message.type} message={message.msg}/> )}

      <div className="name-avatar-container">
        <img src={logo} />
        <p className="second-question">Selecione a imagem melhor te descreve</p>
        <div Style="width: 100%; height: 100%; margin-top: 120px;">
          <Animated animationInDuration="1000" animationIn="fadeInLeft" isVisible={true}>
            <div className="item-avatar-musc"></div>
          </Animated>

          <Animated animationInDelay="400" animationInDuration="1000" animationIn="fadeInLeft" isVisible={true}>
            <div className="item-avatar-race"></div>
          </Animated>

          <Animated animationInDelay="600" animationInDuration="1000" animationIn="fadeInLeft" isVisible={true}>
            <div className="item-avatar-squad"></div>
          </Animated>

          <Animated animationInDelay="800" animationInDuration="1000" animationIn="fadeInLeft" isVisible={true}>
            <div className="item-avatar-vidya"></div>
          </Animated>
        </div>
      </div>
    </div>
  )
}

export default SelectAvatar;