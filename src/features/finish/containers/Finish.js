// external
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Animated } from "react-animated-css";
import { Redirect } from 'react-router';
import sgMail from '@sendgrid/mail';
// internal
import * as actions from 'state/main/actions';
import { AlertMsg, Loader, Logo, ProgressBar } from 'ui';
import NextButton from 'features/questions/components/nextButton/NextButton';
import Question from 'features/questions/components/question/Question';
import trophy from 'assets/imgs/trofeu.png';
import { getStorageItem } from 'shared/utils';
//style
import './Finish.scss';

const Finish = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.main.isLoading || false);
  const message = useSelector(state => state.main.message);

  const [name, setName] = useState('');
  const [nextPage, setNextPage] = useState(false);

  useEffect(() => {
    setName(getStorageItem('persona')['name']);
  }, [])

  return (
    <div className="finish-container">
      {nextPage ? <Redirect to="/consultor" /> : null}
      { isLoading && ( <Loader /> )}
      { message.show && ( <AlertMsg show kind={message.type} message={message.msg}/> )}
      <Logo />
      <div className="name-avatar-container">
        <div className="container-select-avatar">
          <Animated animationInDelay={300} animationInDuration={1500} animationIn="fadeInLeft" isVisible={true}>
            <img src={trophy} className="trophy" />
          </Animated>
          <Animated animationInDelay={1500} animationInDuration={1000} animationIn="fadeIn" isVisible={true}>
            <Question question={`Pronto, ${name.toUpperCase()}!\n Suas respostas serão utilizadas para selecionarmos as melhores salas, treinos e opções para você e seus objetivos!`} />
          </Animated>
        </div>
        <NextButton label='Finalizar' delay={1900} onClick={() => setNextPage(true)} />
      </div>
      {/* <ProgressBar />   */}
    </div>
  )
}

export default Finish;
