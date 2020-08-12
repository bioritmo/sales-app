// external
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Animated } from "react-animated-css";
import { Redirect } from 'react-router';
// internal
import * as actions from 'state/main/actions';
import { AlertMsg, Loader, Logo, ProgressBar } from 'ui';
import { getStorageItem, saveResponseWorld, saveResponseConsultant } from 'shared/utils';
import NextButton from 'features/questions/components/nextButton/NextButton';
import { WorldName } from '../../components/';
import { CONSULT_QUESTIONS } from '../questions';
//style
import './Consultant.scss';
import CardResponse from '../components/cardResponse/CardResponse';
import ResponseCardWrapper from '../components/responseCardWrapper/ResponseCardWrapper';

const Consultant = ({ match }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.main.isLoading || false);
  const message = useSelector(state => state.main.message);
  
  const [isConsultant, setIsConsultant] = useState(false);
  const [responsesList, setResponsesList] = useState([]);
  const [nextPage, setNextPage] = useState(false);
  const [urlParam, setUrlParam] = useState(match.params.questions);

  useEffect(() => {
    if(urlParam) {
      setIsConsultant(true)
    } 
  }, [])

  function saveResponse() {
    saveResponseConsultant(responsesList);
    dispatch(actions.nextQuestion("/resultado-final/resultados"));
    setNextPage(true);
  };

  function redirectConsultant() {
    dispatch(actions.nextQuestion("/resultado-final/consultor"));
  }

  function onSelectResponse(question, response) {
    const item = responsesList.find(i => i.question === question);
    if (!item) {
      setResponsesList([...responsesList, {
        question,
        response
      }]);
    } else {
      setResponsesList([...responsesList.filter(i => i.question !== question), {
        question,
        response
      }]);
    }
  }

  return (
    <div className={!isConsultant ? 'consultant-container' : 'consultant-container questions'}>
      { isLoading && ( <Loader /> )}
      { message.show && ( <AlertMsg show kind={message.type} message={message.msg}/> )}
      <WorldName name="CONSULTOR" />
      <Logo />
      {
        !isConsultant ? (
          <div className="warning-consultant" onClick={() => redirectConsultant()}>
            <p>Agora vamos iniciar sua jornada presencial nos mundos da Bio Ritmo, por favor, entregue o tablet ao consultor.</p>
          </div>
        ) : (
          <>
            <div className="consult-questions">
              {
                CONSULT_QUESTIONS.questions.map(currentQuestions => (
                  <ResponseCardWrapper question={currentQuestions.question}>
                    {
                      currentQuestions.responses.map((response, index) => (
                        <Animated animationInDelay={(index + 1) * 150} animationInDuration={1000} animationIn="zoomIn" isVisible={true}>
                          <CardResponse 
                            text={response.text}
                            onClick={() => onSelectResponse(currentQuestions.question, response.text)}
                            selected={responsesList.find(i => i.response === response.text)}
                          />
                        </Animated>
                        
                      ))
                    } 
                  </ResponseCardWrapper>
                ))
              }
            </div>
            <div Style="margin-bottom: 50px;">
              <NextButton onClick={() => saveResponse()} />
            </div>
          </>
        )
      }
    </div>
  )
}

export default Consultant;