import React from 'react';
import { Link } from 'react-router-dom';
import { Animated } from 'react-animated-css';
// Style
import './NextButton.scss';

export default function NextButton({ link }) {
  return (
    <Animated animationInDelay="700" animationInDuration="1000" animationIn="bounceIn" isVisible={true}>
      <div Style="margin-top: 70px;">
        <Link to={link} Style="text-decoration: none">
          <div className="btn-next">
            <p className="btn-next-text">Prosseguir {'>>'}</p>
          </div>
        </Link>
      </div>
    </Animated>
  );
}