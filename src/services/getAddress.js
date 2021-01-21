import { apiViaCep } from './apis';

export const getAddress = (zipCode) => apiViaCep.get(`${zipCode}/json`);