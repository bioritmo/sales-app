// external
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Animated } from "react-animated-css";
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
// internal
import * as actions from 'state/main/actions';
import { AlertMsg, Loader, Logo, ProgressBar } from 'ui';
import Question from '../../questions/components/question/Question';
import NextButton from '../../questions/components/nextButton/NextButton';
import { savePersona, isCPF, getStorageItem } from 'shared/utils';
//style
import './FinishRegister.scss';
import { listUnity, LIST_UNITY_SORTED } from 'shared/constants';

const FinishRegister = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.main.isLoading || false);
  const message = useSelector(state => state.main.message);
  const fullAddress = useSelector(state => state.main.address);
  const messageIsLoading = useSelector(state => state.main.messageIsLoading);

  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [document, setDocument] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [number, setNumber] = useState('');
  const [unity, setUnity] = useState('');

  function onInsertPerson() {
    dispatch(actions.registerPerson(getStorageItem('persona')))
  }
  
  function onSavePersona() {
    if (email !== '' && mobile !== '' && document !== ''){
      if (fullAddress.cep !== '') {
        const persona = {
          email,
          mobile,
          document,
          unity,
          address: fullAddress,
          address_number: number,
        };
  
        if (isCPF(document)) {
          savePersona(persona);
          onInsertPerson();
        } else {
          alert('CPF inválido');
        }
      } else {
        alert('CEP inválido');
      }
    } else {
      alert('Por favor, preencha todos os campos.')
    }
  }

  function onGetAddress() {
    dispatch(actions.getAddress(zipCode));
  }

  return (
    <div className="finish-container-register">
      { isLoading && ( <Loader /> )}
      { message.show && ( <AlertMsg show kind={message.type} message={message.msg}/> )}
      <Logo />
      <div className="form-register">
        <Question question="Estamos quase finalizando, só precisamos dos seus dados de contato." />
        
        <div className="form-container">
          <Animated animationInDelay="500" animationInDuration={1000} animationIn="fadeIn" isVisible={true}>
            <div className="complet-input-container">
              <div className="label-container">
                <Question question="Unidade" /> 
              </div>
              <div className="input-container select-input">
                <SelectField
                  value={unity}
                  onChange={(event, index, value) => setUnity(value)}
                  fullWidth
                  labelStyle={{
                    color: 'white',
                    fontSize: 30
                  }}
                  menuItemStyle={{
                    fontSize: 25
                  }}
                >
                  {
                    LIST_UNITY_SORTED.map(unity => (
                      <MenuItem value={unity.acronym} primaryText={unity.description} style={{margin: 15}}/>
                    ))
                  }
                </SelectField>
              </div>
            </div>

            <div className="complet-input-container">
              <div className="label-container">
                <Question question="Email" /> 
              </div>
              <div className="input-container">
                <input 
                  className="input-text"
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
                  className="input-text"
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
                  className="input-text"
                  type="tel"
                  onChange={(e) => setDocument(e.target.value)}
                  value={document}
                  maxLength={11}
                />
              </div>
            </div>

            <div className="complet-input-container">
              <div className="label-container">
                <Question question="CEP" />
              </div>
              <div className="input-container">
                <input 
                  className="input-text"
                  type="tel"
                  onChange={(e) => setZipCode(e.target.value)}
                  value={zipCode}
                  maxLength={8}
                  onBlur={onGetAddress}
                />
              </div>
            </div>

            <div className="complet-input-container">
              <div className="label-container">
                <Question question="Número" />
              </div>
              <div className="input-container">
                <input 
                  className="input-text"
                  type="tel"
                  onChange={(e) => setNumber(e.target.value)}
                  value={number}
                  maxLength={11}
                />
              </div>
            </div>
          </Animated>
        </div>
        {
          isLoading ? <p className="is-loading">{messageIsLoading}</p> : <NextButton onClick={() => onSavePersona()} />
        }
      </div>
      <ProgressBar />
    </div>
  )
}

export default FinishRegister;