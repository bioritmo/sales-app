// external
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Animated } from "react-animated-css";
// material
import RaisedButton from 'material-ui/RaisedButton';
import { AlertMsg, Loader } from '../../../../ui';

// internal
import * as actions from '../../../../state/main/actions';
import FSymbol from '../../../../assets/imgs/f_symbol.png'
import MSymbol from '../../../../assets/imgs/m_symbol.png'
//style
import './Persona.scss';
import { Link } from 'react-router-dom';

const Persona = () => {
  const dispatch = useDispatch();
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

      <div className="name-avatar-container">
        <Animated animationInDuration="1500" animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
          <p className="title">
            ENTRE COM SEU NOME
          </p>
        </Animated>
          <div className="name-container">
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
            <>
              <Animated animationInDelay="700" animationInDuration="1000" animationIn="bounceIn" isVisible={true}>
                <div Style="margin-top: 70px;">
                  <Link to="/seleciona-avatar">
                    <div className="btn-next">
                      <p className="btn-next-text">Prosseguir {'>>'}</p>
                    </div>
                  </Link>
                </div>
              </Animated>
            </>
          )}
      </div>
    </div>
  )
}

export default Persona;