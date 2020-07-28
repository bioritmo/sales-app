// external
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Animated } from "react-animated-css";

// internal
import * as actions from '../../../../../state/main/actions';
import { AlertMsg, Loader, Logo, ProgressBar } from '../../../../../ui';
import NextButton from '../../../components/nextButton/NextButton';
import { WorldName } from '../../components/';
import { CHALLENGE_QUESTIONS } from '../questions';

//style
import './Challenge.scss';
import Question from '../../../components/question/Question';
import { saveResponseWorld } from '../../../../../shared/utils';

const Challenge = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.main.isLoading || false);
  const message = useSelector(state => state.main.message);

  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedQtdItems, setSelectedQtdItems] = useState(0);

  function saveResponse() {
    saveResponseWorld('challenge', {
      question: CHALLENGE_QUESTIONS.questions[0],
      response: selectedItems
    });

    dispatch(actions.nextQuestion('/grupos-musculares'));
  };

  function onSelectItem(index, text) {
    const item = selectedItems.find(i => i === text);
    if (!item && selectedQtdItems < 3) {
      setSelectedItems([...selectedItems, text]);
      setSelectedQtdItems(selectedQtdItems + 1);
    } else if (selectedQtdItems === 3 && !item)  {
      alert("Escolha apenas 3 opções.")
    } else {
      setSelectedItems(selectedItems.filter(i => i !== text));
      setSelectedQtdItems(selectedQtdItems - 1);
    }
  }

  return (
    <div className="challenge-container">
      { isLoading && ( <Loader /> )}
      { message.show && ( <AlertMsg show kind={message.type} message={message.msg}/> )}
      <WorldName name="MUNDO DESAFIOS" />
      <Logo />
      <div className="challenge-question-text-container">
        <Question question={CHALLENGE_QUESTIONS.questions[0].question} />
        <div className="response-container-challenge">

          <div className="responses-question-challenge">
            {
              CHALLENGE_QUESTIONS.questions[0].responses.map((response, index) => (
                <Animated key={index} animationInDelay={(index + 1) * 250} animationInDuration={1000} animationIn="fadeInLeft" isVisible={true}>
                  <p 
                    className={!selectedItems.find(i => i === response.title) ? "text-card-challenge" : "text-card-challenge selected"}
                    onClick={() => onSelectItem(index, response.title)}
                  >
                    {response.title}
                  </p>
                </Animated>
              ))
            }  
          </div>

          <div className="results-response-challenge">
            {
              selectedItems.length > 1 && (
                <Animated animationInDelay={300} animationInDuration={1000} animationIn="bounceIn" isVisible={true}>
                  <div className="podium-container">
                    <p className="index-podium second">2º</p>
                    <div className="podium-container-second">
                      <p className="text-podium">{selectedItems[1]}</p>
                    </div>
                  </div>
                </Animated>
              )
            }
            {
              selectedItems.length > 0 && (
                <Animated animationInDelay={300} animationInDuration={1000} animationIn="bounceIn" isVisible={true}>
                  <div className="podium-container">
                    <p className="index-podium">1º</p>
                    <div className="podium-container-first">
                    <p className="text-podium">{selectedItems[0]}</p>
                    </div>
                  </div>
                </Animated>
              )
            }
            {
              selectedItems.length > 2 && (
                <Animated animationInDelay={300} animationInDuration={1000} animationIn="bounceIn" isVisible={true}>
                  <div className="podium-container">
                    <p className="index-podium third">3º</p>
                    <div className="podium-container-third">
                      <p className="text-podium">{selectedItems[2]}</p>
                    </div>
                  </div>
                </Animated>
              )
            }
          </div>
        </div>
        {
          selectedQtdItems === 3 && (
            <NextButton onClick={() => saveResponse()} />
          )
        }
      </div>
      <ProgressBar />
    </div>
  )
}

export default Challenge;