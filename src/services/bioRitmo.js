import { apiBioRitmo } from './apis';

export const savePersonApi = (data) => apiBioRitmo.post('people', data);