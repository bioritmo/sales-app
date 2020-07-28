// external
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Animated } from "react-animated-css";
// internal
import * as actions from '../../../state/main/actions';
import { AlertMsg, Loader, Logo, ProgressBar } from '../../../ui';
import Question from '../../questions/components/question/Question';
import NextButton from '../../questions/components/nextButton/NextButton';
// import { savePersona } from '../../../../shared/utils';
//style
import './FinishRegister.scss';
import { savePersona } from '../../../shared/utils';

const FinishRegister = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.main.isLoading || false);
  const message = useSelector(state => state.main.message);

  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [document, setDocument] = useState('');

  function onSavePersona() {
    const persona = {
      email,
      mobile,
      document,
    };
    savePersona(persona);
    dispatch(actions.nextQuestion('/fim-de-jogo'));
  }

  return (
    <div className="persona-container">
      { isLoading && ( <Loader /> )}
      { message.show && ( <AlertMsg show kind={message.type} message={message.msg}/> )}
      <Logo />
      <div className="name-avatar">
        <Question question="Estamos quase finalizando, só precisamos do seus dados de contato." />
        
        <div className="form-container">
          <Animated animationInDelay="500" animationInDuration={1000} animationIn="fadeIn" isVisible={true}>
            <div className="complet-input-container">
              <div className="label-container">
                <Question question="Email" /> 
              </div>
              <div className="input-container">
                <input 
                  className="input-name"
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
            </div>

            <div className="complet-input-container">
              <div className="label-container">
                <Question question="Telefone/Celular" /> 
              </div>
              <div className="input-container">
                <input 
                  className="input-name"
                  type="text"
                  onChange={(e) => setMobile(e.target.value)}
                  value={mobile}
                />
              </div>
            </div>

            <div className="complet-input-container">
              <div className="label-container">
                <Question question="CPF" />
              </div>
              <div className="input-container">
                <input 
                  className="input-name"
                  type="text"
                  onChange={(e) => setDocument(e.target.value)}
                  value={document}
                />
              </div>
            </div>
          </Animated>
        </div>
        <NextButton onClick={() => onSavePersona()} />
      </div>
      <ProgressBar />
    </div>
  )
}

export default FinishRegister;