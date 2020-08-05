// external
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Animated } from "react-animated-css";
import Chart from 'chart.js';
// internal
import * as actions from 'state/main/actions';
import { AlertMsg, Loader, Logo, ProgressBar } from 'ui';
import { getStorageItem, saveResponseWorld } from 'shared/utils';
import NextButton from 'features/questions/components/nextButton/NextButton';
import { WorldName } from 'features/questions/worlds/components/';
//style
import './Result.scss';

const data = {
  datasets: [{
    data: [10, 20, 30, 15, 25],
    fill: true,
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
    ],
  }],
  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
    'Musculação',
    'Torq',
    'Hit',
    'Yoga',
    'Burn',
  ]
};

const Result = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.main.isLoading || false);
  const message = useSelector(state => state.main.message);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef && canvasRef.current){
      const myPieChart = new Chart(canvasRef.current, {
        type: 'doughnut',
        data: data,
        options: {
          legend: {
              position: 'right',
              display: true,
              labels: {
                  fontColor: 'rgb(255, 99, 132)',
                  fontSize: 30,
                  padding: 20,
              }
          }
      }
      });
    }
    
  }, [canvasRef])

  return (
    <div className="consultant-container">
      { isLoading && ( <Loader /> )}
      { message.show && ( <AlertMsg show kind={message.type} message={message.msg}/> )}
      <WorldName name="RESULTADO" />
      <Logo />
      <div Style="width: 800px; margin: 10em auto;">
        <canvas ref={canvasRef} width="300px" height="300px"></canvas>
      </div>
      <NextButton onClick={() => dispatch(actions.nextQuestion('/'))} label="Finalizar" />
    </div>
  )
}

export default Result;