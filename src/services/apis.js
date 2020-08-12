import axios from 'axios';

export const apiViaCep = axios.create({
  baseURL: `https://viacep.com.br/ws/`
});

export const apiSendEmail = axios.create({
  baseURL: `https://v1k2ylxf8l.execute-api.us-east-1.amazonaws.com/`
});

export const apiBioRitmo = axios.create({
  baseURL: process.env.REACT_APP_API_BIO,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'x-token': process.env.REACT_APP_TOKEN_API_BIO,
    'x-origin': 'game-sales',
  },
});