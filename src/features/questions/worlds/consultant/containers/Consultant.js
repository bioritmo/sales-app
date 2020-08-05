// external
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Animated } from "react-animated-css";
// internal
import * as actions from 'state/main/actions';
import { AlertMsg, Loader, Logo, ProgressBar } from 'ui';
import { getStorageItem, saveResponseWorld } from 'shared/utils';
import NextButton from 'features/questions/components/nextButton/NextButton';
import { WorldName } from '../../components/';
import { CONSULT_QUESTIONS } from '../questions';
//style
import './Consultant.scss';
import CardResponse from '../components/cardResponse/CardResponse';
import ResponseCardWrapper from '../components/responseCardWrapper/ResponseCardWrapper';

const Consultant = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.main.isLoading || false);
  const message = useSelector(state => state.main.message);
  
  const [isConsultant, setIsConsultant] = useState(false);

  return (
    <div className="consultant-container">
      { isLoading && ( <Loader /> )}
      { message.show && ( <AlertMsg show kind={message.type} message={message.msg}/> )}
      <WorldName name="CONSULTOR" />
      <Logo />
      {
        !isConsultant ? (
          <div className="warning-consultant" onClick={() => setIsConsultant(true)}>
            <p>Agora vamos iniciar sua jornada presencial nos mundos da Bio Ritmo, por favor, entregue o table ao consultor.</p>
          </div>
        ) : (
          <>
            <div className="consult-questions">
              {
                CONSULT_QUESTIONS.questions.map(currentQuestions => (
                  <ResponseCardWrapper question={currentQuestions.question}>
                    {
                      currentQuestions.responses.map(response => (
                        <CardResponse text={response.text} />
                      ))
                    } 
                  </ResponseCardWrapper>
                ))
              }
            </div>
            <NextButton onClick={() => dispatch(actions.nextQuestion('/resultado-final'))} />
          </>
        )
      }
    </div>
  )
}

export default Consultant;