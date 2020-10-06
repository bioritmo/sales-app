import { apiBioRitmo, apiSales } from './apis';

export const savePersonApi = (data) => apiBioRitmo.post('people', data);

export const createVisit = (peopleId) => apiBioRitmo.post(`people/${peopleId}/create_visit`);

export const saveQuestions = (data) => apiSales.post(`people`, data, {
  headers: {
    'content-type': 'multipart/form-data'
  }
});