// external
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Animated } from "react-animated-css";
// internal
import * as actions from 'state/main/actions';
import { AlertMsg, Loader, Logo, ProgressBar } from 'ui';
import { getStorageItem, saveResponseWorld } from 'shared/utils';
import Question from '../../components/question/Question';
import NextButton from '../../components/nextButton/NextButton';
import { AVATAR_QUESTIONS } from '../questions';
//style
import './Avatar.scss';

const Avatar = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.main.isLoading || false);
  const message = useSelector(state => state.main.message);
  
  const [selectedItem, setSelectedItem] = useState(-1);
  const [name, setName] = useState('');

  useEffect(() => {
    setName(getStorageItem('persona')['name']);
  }, [])

  function saveResponse() {
    const response = AVATAR_QUESTIONS.questions[0].responses[selectedItem];
    saveResponseWorld('profile', {
      question: AVATAR_QUESTIONS.questions[0],
      response
    });
    dispatch(actions.nextQuestion('/saude-fisico'));
  }

  return (
    <div className="avatar-container">
      { isLoading && ( <Loader /> )}
      { message.show && ( <AlertMsg show kind={message.type} message={message.msg}/> )}
      <Logo />
      <div className="name-avatar-container">
        <Question question={`${name.toUpperCase()}, ${AVATAR_QUESTIONS.questions[0].question}`} />
        <div className="container-select-avatar">
          {
            AVATAR_QUESTIONS.questions[0].responses.map((response, index) => (
              <Animated animationInDelay={(index + 1) * 250} animationInDuration={1000} animationIn="fadeInLeft" isVisible={true}>
                <div
                  className={index == 2 ? "avatar-item center" : "avatar-item"}
                  onClick={() => setSelectedItem(index)}
                >
                  <p className={selectedItem === index && 'selected'}>{response.title}</p>
                  <img src={response.img} />
                </div>
              </Animated>
            ))
          }
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

export default Avatar;