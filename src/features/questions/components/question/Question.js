import React from 'react';
import { Animated } from 'react-animated-css';
// Style
import './Question.scss';

export default function Question({ question }) {
  return (
    <Animated animationInDelay={500} animationInDuration={1000} animationIn="fadeIn" isVisible={true}>
      <div className="question-container">
        <div className="pipe-question"/>
        <p className="question-text">
          {question}
        </p>
      </div>
    </Animated>
  );
}