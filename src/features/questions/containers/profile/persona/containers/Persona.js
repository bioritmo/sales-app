// external
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Animated } from "react-animated-css";
// material
import { AlertMsg, Loader } from '../../../../../../ui';

// internal
import { Logo } from '../../../../../../ui'
import FSymbol from '../../assets/imgs/f_symbol.png'
import MSymbol from '../../assets/imgs/m_symbol.png'
//style
import './Persona.scss';
import Question from '../../../../components/question/Question';
import NextButton from '../../../../components/nextButton/NextButton';

const Persona = () => {
  const isLoading = useSelector(state => state.main.isLoading || false);
  const message = useSelector(state => state.main.message);

  const [name, setName] = useState('');
  const [isSelectAvatar, setIsSelectAvatar] = useState(false);
  const [sex, setSex] = useState('');

  function onSaveName() {
    if(name !== '') {
      setIsSelectAvatar(true);
    } else {
      alert('Por favor, preencha seu nome');
    }
  }

  function onSelectSex(event) {
    setSex(event.target.name);

    if(name !== '') {
      setIsSelectAvatar(true);
    }
  }

  return (
    <div className="select-avatar-container">
      { isLoading && ( <Loader /> )}
      { message.show && ( <AlertMsg show kind={message.type} message={message.msg}/> )}
      <Logo />
      <div className="name-avatar-container">
        <Question question="ENTRE COM O SEU NOME" />
        
        <div className="sex-container">
          <Animated style={{display: 'flex'}} animationInDelay="500" animationInDuration="1000" animationIn="fadeIn" isVisible={true}>
            <input 
              className="input-name"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </Animated>

          <Animated animationInDelay="700" animationInDuration="1000" animationIn="bounceIn" isVisible={true}>
            <div className="select-sex-container">
              <div 
                onClick={(e) => onSelectSex(e)}
                name="sex-f"
                className={sex == 'sex-f' ? 'sex-item-active' : 'sex-item'}
              >
                <img name="sex-f" src={FSymbol} width="200px" />
              </div>
              <div
                onClick={(e) => onSelectSex(e)}
                name="sex-m"
                className={sex === 'sex-m' ? 'sex-item-active' : 'sex-item'}
              >
                <img name="sex-m" src={MSymbol} width="200px" />
              </div>
            </div>
          </Animated>
          </div>
          { isSelectAvatar && (
            <NextButton link='/avatar' />
          )}
      </div>
    </div>
  )
}

export default Persona;