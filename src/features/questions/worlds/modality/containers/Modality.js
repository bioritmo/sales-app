// external
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Animated } from "react-animated-css";
import { Redirect } from 'react-router';
// internal
import * as actions from 'state/main/actions';
import { AlertMsg, Loader, Logo, ProgressBar, Effect } from 'ui';
import { saveResponseWorld, calculatePoints, getStorageItem } from 'shared/utils';
import NextButton from 'features/questions/components/nextButton/NextButton';
import Question from 'features/questions/components/question/Question';
import ImgEffects from 'features/questions/assets/imgs/effects_modality.png';
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
  const [currentItemText, setCurrentItemText] = useState('');
  const [currentItemPoints, setCurrentItemPoints] = useState([]);
  const [operation, setOperation] = useState('');

  function saveResponse() {
    saveResponseWorld('modality', {
      question: MODALITY_QUESTIONS.questions[0],
      response: selectedItems
    });
    dispatch(actions.nextQuestion("/desafios"));
  };

  function onSelectItem(title, points) {
    const item = selectedItems.find(i => i === title);
    if (!item && selectedQtdItems < 3) {
      setSelectedItems([...selectedItems, title]);
      setSelectedQtdItems(selectedQtdItems + 1);

      setOperation('sum');
      setCurrentItemText(title);
      setCurrentItemPoints(points);

    } else if (selectedQtdItems === 3 && !item)  {
      alert("Escolha apenas 3 opções.")
    } else {
      setSelectedItems(selectedItems.filter(i => i !== title));
      setSelectedQtdItems(selectedQtdItems - 1);
      setOperation('sub');
    }
  }

  useEffect(() => {
    if (operation === 'sum') {
      return calculatePoints(currentItemPoints, true);
    } else {
      return calculatePoints(currentItemPoints, false);
    }
  }, [currentItemText, currentItemPoints, operation]);

  return (
    <div className="modality-container">
      <Effect img={ImgEffects} />
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
                    img={response.img(getStorageItem('persona')['sex'])}
                    text={response.title}
                    onSelectItem={() => onSelectItem(response.title, response.points)}
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
