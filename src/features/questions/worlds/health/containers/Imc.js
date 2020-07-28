// external
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Animated } from "react-animated-css";

// internal
import * as actions from '../../../../../state/main/actions';
import { AlertMsg, Loader, Logo, InputSlider, ProgressBar } from '../../../../../ui';
import NextButton from '../../../components/nextButton/NextButton';
import { WorldName } from '../../components/';
import { HEALTH_QUESTIONS } from '../questions';
import walking from '../../../../../assets/imgs/person_walking.png';

//style
import './Imc.scss';
import { saveResponseWorld } from '../../../../../shared/utils';

const HealthImc = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.main.isLoading || false);
  const message = useSelector(state => state.main.message);

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  function saveResponse() {
    saveResponseWorld('health', {
      question: HEALTH_QUESTIONS.questions[1],
      response: weight
    });

    saveResponseWorld('health', {
      question: HEALTH_QUESTIONS.questions[2],
      response: height
    });

    dispatch(actions.nextQuestion('/saude-nivel-de-energia'));
  };

  return (
    <div className="health-container">
      { isLoading && ( <Loader /> )}
      { message.show && ( <AlertMsg show kind={message.type} message={message.msg}/> )}
      <WorldName name="MUNDO SAÚDE" />
      <Logo />
      <div className="question-text-container">
        <div className="response-container">

          <Animated style={{width: '33%'}} animationInDelay={700} animationInDuration={1000} animationIn="fadeInDownBig" isVisible={true}>
            <div className="response-item">
              <InputSlider
                label={HEALTH_QUESTIONS.questions[1].question}
                domain={HEALTH_QUESTIONS.questions[1].responses}
                onChange={(value) => setWeight(value)}
                onUpdate={(value) => setWeight(value)}
                currentValue={`${weight} cm`}
              />
            </div>
          </Animated>

          <Animated style={{width: '33%'}} animationInDelay={1000} animationInDuration={1000} animationIn="fadeInDownBig" isVisible={true}>
            <div className="response-item">
              <InputSlider
                label={HEALTH_QUESTIONS.questions[2].question}
                domain={HEALTH_QUESTIONS.questions[2].responses}
                onChange={(value) => setHeight(value)}
                onUpdate={(value) => setHeight(value)}
                currentValue={`${height} kg`}
              />
            </div>
          </Animated>

          <Animated style={{width: '33%'}} animationInDelay={2000} animationInDuration={2000} animationIn="fadeIn" isVisible={true}>
            <div className="response-item img-left">
              <img src={walking} Style="width: 33em;"/>
            </div>
          </Animated>
          
        </div>
        <NextButton onClick={() => saveResponse()} />
      </div>
      <ProgressBar />
    </div>
  )
}

export default HealthImc;