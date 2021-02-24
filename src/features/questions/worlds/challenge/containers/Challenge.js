// external
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Animated } from "react-animated-css";
import { Redirect } from 'react-router';
// internal
import * as actions from 'state/main/actions';
import { AlertMsg, HomeButton, Loader, Logo, ProgressBar } from 'ui';
import NextButton from 'features/questions/components/nextButton/NextButton';
import Question from 'features/questions/components/question/Question';
import { saveResponseWorld, calculatePoints } from 'shared/utils';
import { WorldName } from '../../components/';
import { CHALLENGE_QUESTIONS } from '../questions';
//style
import './Challenge.scss';

const Challenge = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.main.isLoading || false);
  const message = useSelector(state => state.main.message);

  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedQtdItems, setSelectedQtdItems] = useState(0);
  const [currentItemText, setCurrentItemText] = useState('');
  const [currentItemPoints, setCurrentItemPoints] = useState('');
  const [operation, setOperation] = useState('');
  const responses =  CHALLENGE_QUESTIONS.questions[0].responses;

  function saveResponse() {
    saveResponseWorld('challenge', {
      question: CHALLENGE_QUESTIONS.questions[0],
      response: selectedItems
    });
    dispatch(actions.nextQuestion("/grupos-musculares"));
  };

  function findIndexItem(item){
    const response = responses.find(r => r.title === item);
    return selectedItems.findIndex(x => x === response.id);
  }

  useEffect(() => {
    const index = findIndexItem(currentItemText);
    if (operation === 'sum') {
      if (index === 0 ) return calculatePoints(currentItemPoints, true, 1.5);
      if (index === 1 ) return calculatePoints(currentItemPoints, true, 1.25);
      if (index === 2 ) return calculatePoints(currentItemPoints, true, 1.00);
    } else {
      if (index === 0 ) return calculatePoints(currentItemPoints, false, 1.5);
      if (index === 1 ) return calculatePoints(currentItemPoints, false, 1.25);
      if (index === 2 ) return calculatePoints(currentItemPoints, false, 1.00);
    }

  }, [selectedItems, currentItemText, currentItemPoints]);

  function onSelectItem(response) {
    const { id, title, points } = response;
    const item = selectedItems.find(i => i === id);
    if (!item && selectedQtdItems < 3) {
      setSelectedItems([...selectedItems, id]);
      setSelectedQtdItems(selectedQtdItems + 1);
      setOperation('sum');
      setCurrentItemText(title);
      setCurrentItemPoints(points);
    } else if (selectedQtdItems === 3 && !item)  {
      alert("Escolha apenas 3 opções.")
    } else {
      setSelectedItems(selectedItems.filter(i => i !== id));
      setSelectedQtdItems(selectedQtdItems - 1);
      setOperation('sub');
    }
  }

  return (
    <div className="challenge-container">
      <HomeButton />
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
                    className={!selectedItems.find(i => i === response.id) ? "text-card-challenge" : "text-card-challenge selected"}
                    onClick={() => onSelectItem(response)}
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
                      <p className="text-podium">{responses.find(r => r.id === selectedItems[1]).title}</p>
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
                    <p className="text-podium">{responses.find(r => r.id === selectedItems[0]).title}</p>
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
                      <p className="text-podium">{responses.find(r => r.id === selectedItems[2]).title}</p>
                    </div>
                  </div>
                </Animated>
              )
            }
          </div>
        </div>
        {
          selectedQtdItems === 3 && (
            <div className="btn-next-container">
              <NextButton onClick={() => saveResponse()} />
            </div>
          )
        }
      </div>
      <ProgressBar />
    </div>
  )
}

export default Challenge;
