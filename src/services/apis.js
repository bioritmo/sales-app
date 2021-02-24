import axios from 'axios';

export const apiViaCep = axios.create({
  baseURL: `https://viacep.com.br/ws/`
});

export const apiSendEmail = axios.create({
  baseURL: `https://lyc3ir1uke.execute-api.us-east-1.amazonaws.com/`
});

export const apiBioRitmo = axios.create({
  baseURL: process.env.REACT_APP_API_BIO,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'x-token': process.env.REACT_APP_TOKEN_API_BIO,
    'x-origin': process.env.REACT_APP_ORIGIN_API_BIO,
  },
});

export const apiWorkout = axios.create({
  baseURL: process.env.REACT_APP_API_WORKOUT_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Token token=${process.env.REACT_APP_WORKOUT_TOKEN}`,
    'x-origin': process.env.REACT_APP_WORKOUT_ORIGIN,
    'Accept-Language': 'pt-BR'
  }
})
