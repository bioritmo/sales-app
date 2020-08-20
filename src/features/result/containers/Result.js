// external
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Animated } from "react-animated-css";
import Chart from 'chart.js';
import { Redirect } from 'react-router';
// internal
import * as actions from 'state/main/actions';
import { AlertMsg, Loader, Logo, ProgressBar } from 'ui';
import { getStorageItem, saveResponseWorld, translateMuscle } from 'shared/utils';
import NextButton from 'features/questions/components/nextButton/NextButton';
import { WorldName } from 'features/questions/worlds/components/';
import { MICRO_GYM } from 'features/algorithm/algorithm';
//style
import './Result.scss';
import html2canvas from 'html2canvas';

const Result = ({ match }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.main.isLoading || false);
  const message = useSelector(state => state.main.message);
  const person = useSelector(state => state.main.person);
  const canvasRef = useRef(null);
  const microGymRef = useRef(null);
  const fitnessRef = useRef(null);
  
  const [datasets, setDatasets] = useState([]);
  const [datasetsMicroGym, setDatasetsMicroGym] = useState([]);
  const [datasetsFitness, setDatasetsFitness] = useState([]);
  const [imc, setImc] = useState(0);
  const [imgNew, setImgNew] = useState('');
  const [isPriting, setIsPriting] = useState(false);
  const [isPritingPage, setIsPritingPage] = useState(false);
  const [isPritingScreen, setIsPritingScreen] = useState(false);
  const [descriptionsFitness, setDescriptionsFitness] = useState([]);

  const urlParam = match.params.finished;
  const muscle = getStorageItem('muscle');
  const consultName = getStorageItem('consultant')['consultName'];
  const energy = getStorageItem('health')[1]['response'][0];
  const physical = getStorageItem('health')[2]['response'][0];
  const modality = getStorageItem('modality');
  const challenge = getStorageItem('challenge');
  const activity = getStorageItem('health')[0];

  function calculateTotalPercent(chart) {
    let total = 0;
    const keys = Object.keys(chart['values']);
    keys.map(current => {
      const totalCurrent = chart['values'][current]['value'] * 10;
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

  function getColorMicroGym(microGym) {
    switch (microGym) {
      case 'burn':
        return '#e25822'
      case 'vidya':
        return '#dd7b2a'
      case 'torq':
        return '#0feb44'
      case 'skill_mill':
        return '#5f3007'
      case 'squad':
        return '#6619a9'
      case 'race':
        return '#c20606'
      default:
        generateRandomColor();
    }
  }

  function makeObjectToChart(chart) {
    const totalBodyBuildind = calculateTotalPercent(chart);
    const keys = Object.keys(chart['values']);
    const values = keys.map((current, index) => {
      const totalCurrent = chart['values'][current]['value'] * 10;
      const percent = (totalCurrent * 100) / totalBodyBuildind;
      return {
        label: `${percent.toFixed(0)}% ${chart['values'][current]['legend']}`,
        backgroundColor: chart.chart === 'MICRO_GYM' ? getColorMicroGym(current) : generateRandomColor(),
        data: [percent.toFixed(2)],
      }
    });
    return values;
  }

  function makeObjectToChartDoughnut(chart) {
    const totalBodyBuildind = calculateTotalPercent(chart);
    const keys = Object.keys(chart['values']);

    const values = keys.map((current, index) => {
      const totalCurrent = chart['values'][current]['value'] * 10;
      const percent = (totalCurrent * 100) / totalBodyBuildind;
      return percent.toFixed(2)
      }
    );

    const result = {
      data: values,
      backgroundColor: [generateRandomColor(), generateRandomColor(), generateRandomColor(), generateRandomColor()],
      labels: keys.map((key, index) => `${parseFloat(values[index]).toFixed(0)}% ${chart['values'][key]['legend']}`)
    }
    return result;
  }

  function makeDescriptionFitness(points) {
    const keys = Object.keys(points['values']);
    const descriptions = keys.map(key => (
      points['values'][key].description
    ));
    return descriptions;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    const health = getStorageItem('health');

    const height = health.findIndex(item => item.question.question === 'Altura');
    const weight = health.findIndex(item => item.question.question === 'Peso');

    const weightCalc = health[weight].response[0] * 100;
    const heightCalc = health[height].response[0]
    setImc((weightCalc / (heightCalc * heightCalc) * 100).toFixed(2));
  }, []);

  useEffect(() => {
    const points = getStorageItem('points');
    const BODYBUILDING_PROGRAMS = points[0];
    const MICRO_GYM = points[1];
    const FITNESS = points[2];
    setDatasets(makeObjectToChart(BODYBUILDING_PROGRAMS))
    setDatasetsMicroGym(makeObjectToChart(MICRO_GYM))
    setDatasetsFitness(makeObjectToChartDoughnut(FITNESS))
    setDescriptionsFitness(makeDescriptionFitness(FITNESS));
  }, []);

  useEffect(() => {
    if (canvasRef && canvasRef.current){
      const myPieChart = new Chart(canvasRef.current, {
        type: 'bar',
        data: {
          datasets
        },
        options: {
          legend: {
            position: 'right',
            display: true,
            labels: {
                fontColor: 'white',
                fontSize: 23,
                padding: 20,
            }
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                fontColor: 'white',
                fontSize: 14
              },
              gridLines:{
                color: 'white',
                lineWidth: 0.3,
                zeroLineColor :'white',
                zeroLineWidth : 1
              },
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
            position: 'right',
            display: true,
            labels: {
                fontColor: 'white',
                fontSize: 23,
                padding: 20,
            }
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                fontColor: 'white',
                fontSize: 14
              },
              gridLines:{
                color: 'white',
                lineWidth: 0.3,
                zeroLineColor :'white',
                zeroLineWidth : 1
              },
            }]
        }
      }
      });
    }
    if (fitnessRef && fitnessRef.current){
      const myPieChart1 = new Chart(fitnessRef.current, {
        type: 'doughnut',
        data: {
          labels: datasetsFitness.labels,
          datasets: [{
            data: datasetsFitness.data,
            backgroundColor: datasetsFitness.backgroundColor,
        }],
        },
        options: {
          legend: {
            position: 'right',
            display: true,
            labels: {
                fontColor: 'white',
                fontSize: 23,
                padding: 20,
            }
          },
      }
      });
    }
  }, [canvasRef, datasets, microGymRef, fitnessRef]);

  function printScreen() {
    if (urlParam === "resultados") {
      const printArea = document.getElementById("result-container");
      window.scrollTo(0,0);
      html2canvas(printArea, {
        letterRendering: 1,
        allowTaint: true,
        foreignObjectRendering: true,
      }).then(canvas => {
        let dataURL = canvas.toDataURL('image/jpeg');
        setImgNew(dataURL)
        dispatch(actions.sendEmail({
          email: person.email,
          name: person.name,
          img: dataURL,
        }))
        dispatch(actions.nextQuestion("/"));
      })
    } else {
      dispatch(actions.nextQuestion("/consultor/perguntas"));
    }
  }

  function contract() {
    printScreen();
    window.open(`https://app.bioritmo.com.br/people/${person.id}`, "_blank");
  }

  useEffect(() => {
    if(isPriting) {
      window.print();
      setIsPriting(false);
    } 
  }, [isPriting])

  useEffect(() => {
    if(isPritingScreen) {
      printScreen();
      setIsPritingScreen(false);
    } 
  }, [isPritingScreen])

  function print(){
    setIsPriting(true);
  }

  return (
    <div id="result-container" className="result-container">
      { isLoading && ( <Loader /> )}
      { message.show && ( <AlertMsg show kind={message.type} message={message.msg}/> )}
      <WorldName name="RESULTADO" />
      <Logo />
      <div className="charts-container">
        <div className="response-result-container">
          <div className="responses-user-container">
            <div>
              <p className="title-question-result">{modality[0].question.question_legend}</p>
              <p className="response-question-result">{modality[0].response.join(', ')}</p>
            </div>
            <div>
              <p className="title-question-result">{challenge[0].question.question_legend}</p>
              <p className="response-question-result">{challenge[0].response.join(', ')}</p>
            </div>
            <div>
              <p className="title-question-result">{activity.question.question_legend}</p>
              <p className="response-question-result">{activity.response.title}</p>
            </div>
            <div>
              <p className="title-question-result">{muscle[0].question.question_legend}</p>
              <p className="response-question-result">{translateMuscle(muscle[0].response).join(', ')}</p>
            </div>
            {
              urlParam === 'resultados' && (
                <div>
                  <p className="title-question-result">Consultor</p>
                  <p className="response-question-result">{consultName}</p>
                </div>
              )
            }
          </div>
          <div className="imc-container">
            <p className="title-question-result">IMC</p>
            <p className="response-question-result number">{imc}</p>
            <p className="title-question-result">Energia</p>
            <p className="response-question-result number">{energy}</p>
            <p className="title-question-result">Condição física</p>
            <p className="response-question-result number">{physical}</p>
          </div>
        </div>

        <div className="chart-content">
          <p className="title-charts">MICRO ACADEMIAS</p>
          <canvas ref={microGymRef} width="900px" height="500px"></canvas>
        </div>

        <div className="chart-content">
          <p className="title-charts">Programas de hipertrofia</p>
          <canvas ref={canvasRef} width="900px" height="500px"></canvas>
        </div>

        <div className="chart-content">
          <p className="title-charts">Programas de ginástica</p>
          <canvas ref={fitnessRef} width="800px" height="400px"></canvas>
          <div className="description-fitness-container">
            {
              descriptionsFitness.map(description => (
                <p className="description-fitness">{description}</p>
              ))
            }
          </div>
          
        </div>        
      </div>
      {
        !isPriting && !isPritingScreen ? (
          <>
            {
              urlParam === 'resultados' ? (
                <div Style="margin-bottom: 50px;">
                  <NextButton onClick={() => print()} label="Imprimir" />
                  <NextButton onClick={() => setIsPritingScreen(true)} label="Finalizar" />
                  <NextButton onClick={() => contract()} label="Finalizar e contratar" />
                </div>
              ) : (
                <div Style="margin-bottom: 50px;">
                  <NextButton onClick={() => setIsPritingScreen(true)} label="Finalizar" />
                </div>
              )
            }
          </>
        ) : isPriting && (
          <textarea className="annotations" rows="25" cols="33">
            Anotações
          </textarea>
        )
      }
    </div>
  )
}

export default Result;