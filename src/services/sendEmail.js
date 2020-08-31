import { apiSendEmail } from './apis';

export const sendEmail = (data) => apiSendEmail.post('prod', data);