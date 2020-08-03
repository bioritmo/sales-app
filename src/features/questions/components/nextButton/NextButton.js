import React from 'react';
import { Animated } from 'react-animated-css';
// Style
import './NextButton.scss';

export default function NextButton({ onClick, delay = 700, label = 'Prosseguir >>' }) {
  return (
    <Animated animationInDelay={delay} animationInDuration={1000} animationIn="bounceIn" isVisible={true}>
      <div Style="margin-top: 70px;" onClick={onClick}>
          <div className="btn-next">
            <p className="btn-next-text">{label}</p>
          </div>
      </div>
    </Animated>
  );
}