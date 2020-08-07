// external
import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Animated } from "react-animated-css";
// internal
import * as actions from 'state/main/actions';
import { AlertMsg, Loader, Logo, ProgressBar } from 'ui';
import { savePersona } from 'shared/utils';
import Question from '../../components/question/Question';
import NextButton from '../../components/nextButton/NextButton';
import FSymbol from '../../assets/imgs/f_symbol.png';
import MSymbol from '../../assets/imgs/m_symbol.png';
//style
import './Persona.scss';
import { Redirect } from 'react-router';

const Persona = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.main.isLoading || false);
  const message = useSelector(state => state.main.message);

  const [name, setName] = useState('');
  const [isSelectAvatar, setIsSelectAvatar] = useState(false);
  const [sex, setSex] = useState('');
  const [nextPage, setNextPage] = useState(false);

  function onSaveName() {
    if(name !== '') {
      setIsSelectAvatar(true);
    } else {
      alert('Por favor, preencha seu nome');
    }
  }

  function changeName(value){
    setName(value);
    if(name !== '' && sex !== '' ) {
      setIsSelectAvatar(true);
    }
  }

  function onSelectSex(event) {
    setSex(event.target.name);

    if(name !== '') {
      setIsSelectAvatar(true);
      localStorage.setItem('name', name);
    }
  }

  function onSavePersona() {
    const persona = {
      name,
      sex,
    };
    savePersona(persona);
    dispatch(actions.nextQuestion());
    setNextPage(true)
  }

  return (
    <div className="persona-container">
      {nextPage ? <Redirect to="/selecione-avatar" /> : null}
      { isLoading && ( <Loader /> )}
      { message.show && ( <AlertMsg show kind={message.type} message={message.msg}/> )}
      <Logo />
      <div className="name-avatar">
        <Question question="ENTRE COM O SEU NOME" />
        
        <div className="sex-container">
          <Animated style={{display: 'flex'}} animationInDelay="500" animationInDuration={1000} animationIn="fadeIn" isVisible={true}>
            <input 
              className="input-name"
              type="text"
              onChange={(e) => changeName(e.target.value)}
              value={name}
            />
          </Animated>

          <Animated animationInDelay="700" animationInDuration={1000} animationIn="bounceIn" isVisible={true}>
            <div className="select-sex-container">
              <div 
                onClick={(e) => onSelectSex(e)}
                name="sex-f"
                className={sex == 'sex-f' ? 'sex-item-active' : 'sex-item'}
              >
                <img name="sex-f" src={FSymbol} className="sex-img" />
              </div>
              <div
                onClick={(e) => onSelectSex(e)}
                name="sex-m"
                className={sex === 'sex-m' ? 'sex-item-active' : 'sex-item'}
              >
                <img name="sex-m" src={MSymbol} className="sex-img" />
              </div>
            </div>
          </Animated>
          </div>
          { isSelectAvatar && (
            <NextButton onClick={() => onSavePersona()} />
          )}
      </div>
      <ProgressBar />
    </div>
  )
}

export default Persona;