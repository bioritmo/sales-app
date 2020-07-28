// external
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Animated } from "react-animated-css";

// internal
import * as actions from '../../../../../state/main/actions';
import { AlertMsg, Loader, Logo, ProgressBar } from '../../../../../ui';
import NextButton from '../../../components/nextButton/NextButton';
import { WorldName } from '../../components/';
import muscleFront from '../../../../../assets/imgs/musculos_frontal.png'
import muscleBack from '../../../../../assets/imgs/musculos_costas.png'

//style
import './Muscle.scss';
import Question from '../../../components/question/Question';

const Muscle = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.main.isLoading || false);
  const message = useSelector(state => state.main.message);

  return (
    <div className="muscle-container">
      { isLoading && ( <Loader /> )}
      { message.show && ( <AlertMsg show kind={message.type} message={message.msg}/> )}
      <WorldName name="MUNDO MUSCULOS" />
      <Logo />
      <div className="question-text-container">
        <Question question="Selecione 3 grupos musculares que você mais quer desenvolver, em ordem de impotância."/>
        <div className="response-container-modality">
          <div className="select-question-modality">
            <div className="center-bg">
              <Animated animationInDelay={300} animationInDuration={1000} animationIn="flipInY" isVisible={true}>
                <img src={muscleFront} />
              </Animated>

              <Animated animationInDelay={1000} animationInDuration={1000} animationIn="flipInY" isVisible={true}>
                <img src={muscleBack} />
              </Animated>
            </div>
          </div>
        </div>
        <NextButton onClick={() => dispatch(actions.nextQuestion('/finaliza-cadastro'))} delay={1500}/>
      </div>
      <ProgressBar />
    </div>
  )
}

export default Muscle;