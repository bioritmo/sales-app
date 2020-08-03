// external
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Animated } from "react-animated-css";
// internal
import * as actions from 'state/main/actions';
import { AlertMsg, Loader, Logo, ProgressBar } from 'ui';
import { saveResponseWorld } from 'shared/utils';
import NextButton from 'features/questions/components/nextButton/NextButton';
import Question from 'features/questions/components/question/Question';
import { CardSelectModality } from '../components';
import { WorldName } from '../../components/';
import { MODALITY_QUESTIONS } from '../questions';
//style
import './Modality.scss';

const Modality = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.main.isLoading || false);
  const message = useSelector(state => state.main.message);

  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedQtdItems, setSelectedQtdItems] = useState(0);

  function saveResponse() {
    saveResponseWorld('modality', {
      question: MODALITY_QUESTIONS.questions[0],
      response: selectedItems
    });

    dispatch(actions.nextQuestion('/desafios'));
  };

  function onSelectItem(title) {
    const item = selectedItems.find(i => i === title);
    if (!item && selectedQtdItems < 3) {
      setSelectedItems([...selectedItems, title]);
      setSelectedQtdItems(selectedQtdItems + 1);
    } else if (selectedQtdItems === 3 && !item)  {
      alert("Escolha apenas 3 opções.")
    } else {
      setSelectedItems(selectedItems.filter(i => i !== title));
      setSelectedQtdItems(selectedQtdItems - 1);
    }
  }

  return (
    <div className="modality-container">
      { isLoading && ( <Loader /> )}
      { message.show && ( <AlertMsg show kind={message.type} message={message.msg}/> )}
      <WorldName name="MUNDO MODALIDADES" />
      <Logo />
      <div className="question-text-container">
        <Question question={MODALITY_QUESTIONS.questions[0].question} />
        <div className="response-container-modality">
          <div className="select-question-modality">
          {
              MODALITY_QUESTIONS.questions[0].responses.map((response, index) => (
                <Animated animationInDelay={(index + 1) * 250} animationInDuration={1000} animationIn="rotateIn" isVisible={true}>
                  <CardSelectModality
                    img={response.img}
                    text={response.title}
                    onSelectItem={() => onSelectItem(response.title)}
                    isSelected={selectedItems.find(i => i === response.title)}
                  />
                </Animated>
              ))
            }    
          </div>
        </div>
        {
          selectedQtdItems === 3 && (
            <NextButton onClick={() => saveResponse()} />
          )
        }  
      </div>
      <ProgressBar />
    </div>
  )
}

export default Modality;
