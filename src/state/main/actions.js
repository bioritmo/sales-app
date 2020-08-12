//internal
import * as types from './constants';

export const startGame = () => ({
  type: types.START_GAME,
  payload: {
    message: {
      show: false,
      type: '',
      msg: '',
    },
    isLoading: false
  }
});

export const nextQuestion = (page) => ({
  type: types.NEXT_QUESTION,
  payload: {
    page,
    message: {
      show: false,
      type: '',
      msg: '',
    },
    isLoading: false
  }
});

export const nextQuestionSuccess = (progress) => ({
  type: types.NEXT_QUESTION_SUCCESS,
  payload: {
    progress,
    message: {
      show: false,
      type: '',
      msg: '',
    },
    isLoading: false
  }
});

export const updateProgress = (progress) => ({
  type: types.UPDATE_PROGRESS,
  payload: {
    progress,
    message: {
      show: false,
      type: '',
      msg: '',
    },
    isLoading: false
  }
});

export const updateProgressSuccess = (newProgress) => ({
  type: types.UPDATE_PROGRESS_SUCCESS,
  payload: {
    progress: newProgress,
    message: {
      show: false,
      type: '',
      msg: '',
    },
    isLoading: false
  }
});

export const saveResponse = (question, response) => ({
  type: types.SAVE_RESPONSE,
  payload: {
    question,
    response,
    message: {
      show: false,
      type: '',
      msg: '',
    },
    isLoading: false
  }
});

export const getAddress = (zipCode) => ({
  type: types.GET_ADDRESS,
  payload: {
    zipCode,
    message: {
      show: false,
      type: '',
      msg: '',
    },
    isLoading: true,
    messageIsLoading: 'Buscando dados, aguarde ...',
  }
});

export const getAddressSuccess = (address) => ({
  type: types.GET_ADDRESS_SUCCESS,
  payload: {
    address,
    message: {
      show: false,
      type: '',
      msg: '',
    },
    isLoading: false
  }
});

export const getAddressFailure = (error) => ({
  type: types.GET_ADDRESS_FAILURE,
  payload: {
    message: {
      show: true,
      type: 'error',
      msg: '',
    },
    isLoading: true
  }
});

export const registerPerson = (data) => ({
  type: types.SAVE_PERSON_API,
  payload: {
    data,
    message: {
      show: false,
      type: '',
      msg: '',
    },
    isLoading: true,
    messageIsLoading: 'Salvando dados, aguarde ...',
  }
});

export const registerPersonSuccess = (person) => ({
  type: types.SAVE_PERSON_API_SUCCESS,
  payload: {
    person,
    message: {
      show: false,
      type: '',
      msg: '',
    },
    isLoading: false
  }
});

export const registerPersonFailure = () => ({
  type: types.SAVE_PERSON_API_FAILURE,
  payload: {
    message: {
      show: true,
      type: 'error',
      msg: '',
    },
    isLoading: false
  }
});

export const sendEmail = (data) => ({
  type: types.SEND_EMAIL,
  payload: {
    data,
    message: {
      show: false,
      type: '',
      msg: '',
    },
    isLoading: true,
    messageIsLoading: 'Salvando dados, aguarde ...',
  }
});

export const sendEmailSuccess = () => ({
  type: types.SEND_EMAIL_SUCCESS,
  payload: {
    message: {
      show: false,
      type: '',
      msg: '',
    },
    isLoading: false
  }
});

export const sendEmailFailure = () => ({
  type: types.SEND_EMAIL_FAILURE,
  payload: {
    message: {
      show: true,
      type: 'error',
      msg: '',
    },
    isLoading: true
  }
});