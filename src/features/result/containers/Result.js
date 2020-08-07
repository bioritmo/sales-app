// external
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Animated } from "react-animated-css";
import Chart from 'chart.js';
import { Redirect } from 'react-router';
// internal
import * as actions from 'state/main/actions';
import { AlertMsg, Loader, Logo, ProgressBar } from 'ui';
import { getStorageItem, saveResponseWorld } from 'shared/utils';
import NextButton from 'features/questions/components/nextButton/NextButton';
import { WorldName } from 'features/questions/worlds/components/';
import { MICRO_GYM } from 'features/algorithm/algorithm';
//style
import './Result.scss';

const Result = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.main.isLoading || false);
  const message = useSelector(state => state.main.message);
  const canvasRef = useRef(null);
  const microGymRef = useRef(null);
  const fitnessRef = useRef(null);
  
  const [datasets, setDatasets] = useState([]);
  const [datasetsMicroGym, setDatasetsMicroGym] = useState([]);
  const [datasetsFitness, setDatasetsFitness] = useState([]);
  const [imc, setImc] = useState(0);
  const [modality, setModality] = useState(getStorageItem('modality'));
  const [challenge, setChallenge] = useState(getStorageItem('challenge'));
  const [nextPage, setNextPage] = useState(false);

  function calculateTotalPercent(chart) {
    let total = 0;
    const keys = Object.keys(chart['values']);
    keys.map(current => {
      const totalCurrent = chart['values'][current] * 10;
      total = total + totalCurrent;
    });
    return total;
  };

  function generateRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r} , ${g} , ${b})`;;
  }

  function makeObjectToChart(chart) {
    const totalBodyBuildind = calculateTotalPercent(chart);
    const keys = Object.keys(chart['values']);
    const values = keys.map((current, index) => {
      const totalCurrent = chart['values'][current] * 10;
      const percent = (totalCurrent * 100) / totalBodyBuildind;
      return {
        barPercentage: 0.5,
        label: current,
        backgroundColor: generateRandomColor(),
        data: [percent.toFixed(2)],
      }
    });
    return values;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    const health = getStorageItem('health');

    const height = health.findIndex(item => item.question.question === 'Altura');
    const weight = health.findIndex(item => item.question.question === 'Peso');

    const weightCalc = health[weight].response[0] * 100;
    const heightCalc = health[height].response[0]
    setImc((weightCalc / (heightCalc * heightCalc) * 100).toFixed(2));
  }, [])

  useEffect(() => {
    const points = getStorageItem('points');
    const BODYBUILDING_PROGRAMS = points[0];
    const MICRO_GYM = points[1];
    const FITNESS = points[2];
    setDatasets(makeObjectToChart(BODYBUILDING_PROGRAMS))
    setDatasetsMicroGym(makeObjectToChart(MICRO_GYM))
    setDatasetsFitness(makeObjectToChart(FITNESS))
  }, [])

  useEffect(() => {
    if (canvasRef && canvasRef.current){
      const myPieChart = new Chart(canvasRef.current, {
        type: 'bar',
        data: {
          datasets
        },
        options: {
          legend: {
            position: 'bottom',
            display: true,
            labels: {
                fontColor: 'white',
                fontSize: 25,
                padding: 20,
            }
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
        }
      }
      });
    }

    if (microGymRef && microGymRef.current){
      const myPieChart1 = new Chart(microGymRef.current, {
        type: 'bar',
        data: {
          datasets: datasetsMicroGym,
        },
        options: {
          legend: {
            position: 'bottom',
            display: true,
            labels: {
                fontColor: 'white',
                fontSize: 25,
                padding: 20,
            }
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
        }
      }
      });
    }
    if (fitnessRef && fitnessRef.current){
      const myPieChart1 = new Chart(fitnessRef.current, {
        type: 'bar',
        data: {
          datasets: datasetsFitness,
        },
        options: {
          legend: {
            position: 'bottom',
            display: true,
            labels: {
                fontColor: 'white',
                fontSize: 25,
                padding: 20,
            }
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
        }
      }
      });
    }
  }, [canvasRef, datasets, microGymRef, fitnessRef]);

  return (
    <div className="result-container">
      {nextPage ? <Redirect to="/" /> : null}
      { isLoading && ( <Loader /> )}
      { message.show && ( <AlertMsg show kind={message.type} message={message.msg}/> )}
      <WorldName name="RESULTADO" />
      <Logo />
      <div className="charts-container">
        <div className="response-result-container">
          <div id="questions" Style="margin: 0px;width: 80%;">
            <div>
              <p className="title-question-result">{modality[0].question.question}</p>
              <p className="response-question-result">{modality[0].response.join(', ')}</p>
            </div>
            <div>
              <p className="title-question-result">{challenge[0].question.question}</p>
              <p className="response-question-result">{challenge[0].response.join(', ')}</p>
            </div>
          </div>
          <div>
            <p className="title-question-result">IMC</p>
            <p className="response-question-result number">{imc}</p>
            </div>
        </div>

        <canvas ref={microGymRef} width="900px" height="500px"></canvas><br /><br /><br />
        <canvas ref={canvasRef} width="900px" height="500px"></canvas><br /><br /><br /><br />
        <canvas ref={fitnessRef} width="900px" height="500px"></canvas><br />
      </div>
      <div Style="margin-bottom: 50px;">
        <NextButton onClick={() => setNextPage(true)} label="Finalizar" />
      </div>
    </div>
  )
}

export default Result;