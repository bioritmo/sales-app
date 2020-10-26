// external
import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Animated } from "react-animated-css";
import { Redirect } from 'react-router';
// internal
import * as actions from 'state/main/actions';
import { AlertMsg, HomeButton, Loader, Logo, ProgressBar } from 'ui';
import NextButton from 'features/questions/components/nextButton/NextButton';
import Question from 'features/questions/components/question/Question';
import { WorldName } from '../../components/';
import { MUSCLE_QUESTIONS } from '../questions';
import { saveResponseWorld, getStorageItem } from 'shared/utils';
//imgs
//man
import muscleFront from 'assets/imgs/Personagem.png';
import breastMan from 'assets/imgs/breast.png'
import breastManSelected from 'assets/imgs/breast-selected.png'
import frontArmsMan from 'assets/imgs/front-arms.png';
import frontArmsManSelected from 'assets/imgs/front-arms-selected.png';
import backArmsMan from 'assets/imgs/back-arms.png';
import backArmsManSelected from 'assets/imgs/back-arms-selected.png';
import tummyMan from 'assets/imgs/tummy.png';
import tummyManSelected from 'assets/imgs/tummy-selected.png';
import frontLegsMan from 'assets/imgs/front-legs.png';
import frontLegsManSelected from 'assets/imgs/front-legs-selected.png';
import backLegsMan from 'assets/imgs/back-legs.png';
import backLegsManSelected from 'assets/imgs/back-legs-selected.png';
import backMan from 'assets/imgs/back.png';
import backManSelected from 'assets/imgs/back-selected.png';
//woman
import muscleWoman from 'assets/imgs/muscle-woman.png';
import breastWoman from 'assets/imgs/breast.png'
import breastWomanSelected from 'assets/imgs/breast-selected.png'
import frontArmsWoman from 'assets/imgs/front-arms-woman.png';
import frontArmsWomanSelected from 'assets/imgs/front-arms-woman-selected.png';
import backArmsWoman from 'assets/imgs/back-arms-woman.png';
import backArmsWomanSelected from 'assets/imgs/back-arms-woman-selected.png';
import tummyWoman from 'assets/imgs/tummy.png';
import tummyWomanSelected from 'assets/imgs/tummy-selected.png';
import frontLegsWoman from 'assets/imgs/front-legs-woman.png';
import frontLegsWomanSelected from 'assets/imgs/front-legs-woman-selected.png';
import backLegsWoman from 'assets/imgs/back-legs-woman.png';
import backLegsWomanSelected from 'assets/imgs/back-legs-woman-selected.png';
import backWoman from 'assets/imgs/back.png';
import backWomanSelected from 'assets/imgs/back-selected.png';

//style
import './Muscle.scss';

const Muscle = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.main.isLoading || false);
  const message = useSelector(state => state.main.message);
  
  const [groupSelected, setGroupSelected] = useState([]);
  const [selectedQtdItems, setSelectedQtdItems] = useState(0);
  const [selectSex, setSelectSex] = useState(getStorageItem('persona')['sex']);

  const [tummy, setTummy] = useState(selectSex === 'sex-m' ? tummyMan : tummyWoman);
  const [tummySelected, setTummySelected] = useState(selectSex === 'sex-m' ? tummyManSelected : tummyWomanSelected);

  const [breast, setBreast] = useState(selectSex === 'sex-m' ? breastMan : breastWoman);
  const [breastSelected, setBreastSelected] = useState(selectSex === 'sex-m' ? breastManSelected : breastWomanSelected);

  const [frontArms, setFrontArms] = useState(selectSex === 'sex-m' ? frontArmsMan : frontArmsWoman);
  const [frontArmsSelected, setFrontArmsSelected] = useState(selectSex === 'sex-m' ? frontArmsManSelected : frontArmsWomanSelected);

  const [backArms, setBackArms] = useState(selectSex === 'sex-m' ? backArmsMan : backArmsWoman);
  const [backArmsSelected, setBackArmsSelected] = useState(selectSex === 'sex-m' ? backArmsManSelected : backArmsWomanSelected);

  const [frontLegs, setFrontLegs] = useState(selectSex === 'sex-m' ? frontLegsMan : frontLegsWoman);
  const [frontLegsSelected, setFrontLegsSelected] = useState(selectSex === 'sex-m' ? frontLegsManSelected : frontLegsWomanSelected);

  const [backLegs, setBackLegs] = useState(selectSex === 'sex-m' ? backLegsMan : backLegsWoman);
  const [backLegsSelected, setBackLegsSelected] = useState(selectSex === 'sex-m' ? backLegsManSelected : backLegsWomanSelected);

  const [back, setBack] = useState(selectSex === 'sex-m' ? backMan : backWoman);
  const [backSelected, setBackSelected] = useState(selectSex === 'sex-m' ? backManSelected : backWomanSelected);

  function onSelectGroup(group) {
    const item = groupSelected.find(i => i === group);
    if (!item && selectedQtdItems < 3) {
      setGroupSelected([...groupSelected, group]);
      setSelectedQtdItems(selectedQtdItems + 1);
    } else if (selectedQtdItems === 3 && !item)  {
      alert("Escolha apenas 3 opções.")
    } else {
      setGroupSelected(groupSelected.filter(i => i !== group));
      setSelectedQtdItems(selectedQtdItems - 1);
    }
  };

  const isGroupSelected = useCallback((group) => {
    return groupSelected.find(i => i === group);
  }, [groupSelected]);

  function saveResponse() {
    saveResponseWorld('muscle', {
      question: MUSCLE_QUESTIONS.questions[0],
      response: groupSelected
    });
    dispatch(actions.nextQuestion("/finaliza-cadastro"));
  };

  return (
    <div className="muscle-container">
      <HomeButton />
      { isLoading && ( <Loader /> )}
      { message.show && ( <AlertMsg show kind={message.type} message={message.msg}/> )}
      <WorldName name="MUNDO MÚSCULOS" />
      <Logo />
      <div className="question-text-container">
        <Question question={MUSCLE_QUESTIONS.questions[0].question}/>
        <div className="response-container-muscle">
          <div className="select-question">
            <div className="center-bg">
              <Animated animationInDelay={300} animationInDuration={1000} animationIn="flipInY" isVisible={true}>
                <img src={selectSex === 'sex-m' ? muscleFront : muscleWoman} />
                <img className={`${selectSex === 'sex-m' ? 'man': 'woman'} breast`} onClick={() => onSelectGroup('breast')} src={isGroupSelected('breast')? breastSelected : breast} />
                <img className={`${selectSex === 'sex-m' ? 'man': 'woman'} front-arms`} onClick={() => {onSelectGroup('arms')}} src={isGroupSelected('arms') ? frontArmsSelected : frontArms} />
                <img className={`${selectSex === 'sex-m' ? 'man': 'woman'} tummy`} onClick={() => {onSelectGroup('tummy')}} src={isGroupSelected('tummy') ? tummySelected : tummy} />
                <img className={`${selectSex === 'sex-m' ? 'man': 'woman'} front-legs`} onClick={() => {onSelectGroup('legs')}} src={isGroupSelected('legs')? frontLegsSelected : frontLegs} />
              </Animated>

              <Animated animationInDelay={1000} animationInDuration={1000} animationIn="flipInY" isVisible={true}>
                <img src={selectSex === 'sex-m' ? muscleFront : muscleWoman} />
                <img className={`${selectSex === 'sex-m' ? 'man': 'woman'} back-arms`} onClick={() => {onSelectGroup('arms')}} src={isGroupSelected('arms') ? backArmsSelected : backArms} />
                <img className={`${selectSex === 'sex-m' ? 'man': 'woman'} back-legs`} onClick={() => {onSelectGroup('legs')}} src={isGroupSelected('legs') ? backLegsSelected : backLegs} />
                <img className={`${selectSex === 'sex-m' ? 'man': 'woman'} back`} onClick={() => {onSelectGroup('back')}} src={isGroupSelected('back') ? backSelected : back} />
              </Animated>
            </div>
          </div>
        </div>
        {
          selectedQtdItems == 3 && (
            <div className="container-next-button-muscle">
              <NextButton onClick={() => saveResponse()} delay={500}/>
            </div>
          )
        }
      </div>
      <ProgressBar />
    </div>
  )
}

export default Muscle;