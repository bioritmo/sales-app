import React from 'react';
import { Link } from 'react-router-dom';
import { Animated } from 'react-animated-css';
// Style
import './NextButton.scss';

export default function NextButton({ onClick, delay = 700, label = 'Prosseguir >>' }) {
  return (
    <Animated animationInDelay={delay} animationInDuration={1000} animationIn="bounceIn" isVisible={true}>
      <div Style="margin-top: 70px;" onClick={onClick}>
        {/* <Link to={link} Style="text-decoration: none"> */}
          <div className="btn-next">
            <p className="btn-next-text">{label}</p>
          </div>
        {/* </Link> */}
      </div>
    </Animated>
  );
}