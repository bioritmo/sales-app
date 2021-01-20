import { apiBioRitmo, apiSales } from './apis';

export const savePersonApi = (data) => apiBioRitmo.post('people', data);

export const createVisit = (peopleId, name) => apiBioRitmo.post(`people/${peopleId}/create_visit`, {
  username: name
});

export const saveQuestions = (data) => apiSales.post(`people`, data);
