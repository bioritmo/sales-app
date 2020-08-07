// external
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Animated } from "react-animated-css";
import { Redirect } from 'react-router';
// internal
import * as actions from 'state/main/actions';
import { AlertMsg, Loader, Logo, ProgressBar } from 'ui';
import Question from '../../questions/components/question/Question';
import NextButton from '../../questions/components/nextButton/NextButton';
import { savePersona, isCPF } from 'shared/utils';
//style
import './FinishRegister.scss';

const FinishRegister = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.main.isLoading || false);
  const message = useSelector(state => state.main.message);

  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [document, setDocument] = useState('');
  const [nextPage, setNextPage] = useState(false);
  
  function onSavePersona() {
    if (email !== '' && mobile !== '' && document !== ''){
      const persona = {
        email,
        mobile,
        document,
      };

      if (isCPF(document)) {
        savePersona(persona);
        dispatch(actions.nextQuestion());
        setNextPage(true);
      } else {
        alert('CPF inválido')
      }
      
    } else {
      alert('Por favor, preencha todos os campos.')
    }
    
  }

  return (
    <div className="persona-container">
      {nextPage ? <Redirect to="/fim-de-jogo" /> : null}
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
                  type="tel"
                  onChange={(e) => setMobile(e.target.value)}
                  value={mobile}
                  maxLength={11}
                  placeholder="(DDD)XXXXX-XXXX"
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
                  type="tel"
                  onChange={(e) => setDocument(e.target.value)}
                  value={document}
                  maxLength={11}
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