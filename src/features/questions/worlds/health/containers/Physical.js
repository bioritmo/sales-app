// external
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Animated } from "react-animated-css";
import { Redirect } from 'react-router';
// internal
import * as actions from 'state/main/actions';
import { AlertMsg, Loader, Logo, ProgressBar } from 'ui';
import Question from 'features/questions/components/question/Question';
import NextButton from 'features/questions/components/nextButton/NextButton';
import { saveResponseWorld, calculatePoints, getStorageItem } from 'shared/utils';
import { WorldName } from '../../components/';
import { CardSelectItem, SelectItemLine } from '../components';
import { HEALTH_QUESTIONS } from '../questions';
//style
import './Physical.scss';

const HealthPhysical = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.main.isLoading || false);
  const message = useSelector(state => state.main.message);

  const [selectedItem, setSelectedItem] = useState(-1);
  const [nextPage, setNextPage] = useState(false);

  function saveResponse() {
    const response = HEALTH_QUESTIONS.questions[0].responses[selectedItem];
    saveResponseWorld('health', {
      question: HEALTH_QUESTIONS.questions[0],
      response
    });
    calculatePoints(HEALTH_QUESTIONS.questions[0].responses[selectedItem].points, true);
    dispatch(actions.nextQuestion());
    setNextPage(true);
  }

  return (
    <div className="health-container">
      { nextPage && <Redirect to="/saude-nivel-de-energia" />}
      { isLoading && ( <Loader /> )}
      { message.show && ( <AlertMsg show kind={message.type} message={message.msg}/> )}
      <WorldName name="MUNDO SAÚDE" />
      <Logo />
      <div className="question-text-container">
        <Question question={HEALTH_QUESTIONS.questions[0].question} />
        
        <div className="response-container">
          <SelectItemLine>
            {
              HEALTH_QUESTIONS.questions[0].responses.map((response, index) => (
                <Animated animationInDelay={(index + 1) * 250} animationInDuration={1000} animationIn="zoomIn" isVisible={true}>
                  <CardSelectItem 
                    text={response.title}
                    icon=''
                    isSelected={selectedItem === index}
                    onSelectItem={() => setSelectedItem(index)}
                    imgSrc={response.img(getStorageItem('persona')['sex'])}
                  />
                </Animated>
              ))
            }          
          </SelectItemLine>
        </div>
        {
          selectedItem > -1 && (
            <NextButton onClick={() => saveResponse()} />
          )
        }
      </div>
      <ProgressBar />
    </div>
  )
}

export default HealthPhysical;
