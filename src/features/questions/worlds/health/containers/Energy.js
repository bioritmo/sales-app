// external
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Animated } from "react-animated-css";
import { Redirect } from 'react-router';
// internal
import * as actions from 'state/main/actions';
import { AlertMsg, Loader, Logo, InputSlider, ProgressBar } from 'ui';
import { saveResponseWorld, getStorageItem } from 'shared/utils';
import NextButton from 'features/questions/components/nextButton/NextButton';
import walking_m from 'assets/imgs/person_walking_m.png';
import walking_f from 'assets/imgs/person_walking_f.png';
import { WorldName } from '../../components/';
import { HEALTH_QUESTIONS } from '../questions';
//style
import './Energy.scss';

const HealthEnergy = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.main.isLoading || false);
  const message = useSelector(state => state.main.message);

  const [energy, setEnergy] = useState(0);
  const [physic, setPhysic] = useState(0);
  const [nextPage, setNextPage] = useState(false);

  function saveResponse() {
    saveResponseWorld('health', {
      question: HEALTH_QUESTIONS.questions[3],
      response: energy
    });

    saveResponseWorld('health', {
      question: HEALTH_QUESTIONS.questions[4],
      response: physic
    });
    dispatch(actions.nextQuestion());
    setNextPage(true);
  };

  return (
    <div className="health-container">
      { nextPage && <Redirect to="/saude-imc" />}
      { isLoading && ( <Loader /> )}
      { message.show && ( <AlertMsg show kind={message.type} message={message.msg}/> )}
      <WorldName name="MUNDO SAÚDE" />
      <Logo />
      <div className="question-text-container">
        <div className="response-container-energy">

          <Animated style={{width: '33%'}} animationInDelay={1000} animationInDuration={1000} animationIn="fadeInDownBig" isVisible={true}>
            <div className="response-item">
              <InputSlider
                label={HEALTH_QUESTIONS.questions[3].question}
                domain={HEALTH_QUESTIONS.questions[3].responses}
                onChange={(value) => setEnergy(value)}
                onUpdate={(value) => setEnergy(value)}
                currentValue={energy}
              />
            </div>
          </Animated>

          <Animated style={{width: '33%'}} animationInDelay={1500} animationInDuration={1000} animationIn="fadeInDownBig" isVisible={true}>
            <div className="response-item">
              <InputSlider
                label={HEALTH_QUESTIONS.questions[4].question}
                domain={HEALTH_QUESTIONS.questions[4].responses}
                onChange={(value) => setPhysic(value)}
                onUpdate={(value) => setPhysic(value)}
                currentValue={physic}
              />
            </div>
          </Animated>

          <Animated style={{width: '50%'}} animationInDelay={2000} animationInDuration={2000} animationIn="fadeIn" isVisible={true}>
            <div className="response-item img-right">
              <img src={getStorageItem('persona')['sex'] === 'sex-m' ? walking_m : walking_f} className="img-walking"/>
            </div>
          </Animated>
          
        </div>
          <NextButton onClick={() => saveResponse()} />
      </div>
      <ProgressBar />
    </div>
  )
}

export default HealthEnergy;