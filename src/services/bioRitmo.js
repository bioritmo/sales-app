import { apiBioRitmo, apiWorkout } from './apis';

export const savePersonApi = (data) => apiBioRitmo.post('people', data);
export const savePersonWorkout = (data) => apiWorkout.put('people', data)

export const createVisit = (peopleId, name) => apiBioRitmo.post(`people/${peopleId}/create_visit`, {
  username: name
});

export const saveQuestions = (data) => apiWorkout.post('detached_questionnaire/responses', data);
