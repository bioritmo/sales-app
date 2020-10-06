// Internal
import * as types from './constants';

export const initialState = {
  person: {},
  totalQuestions: 9,
  currentQuestion: 1,
  progress: '0%',
  address: {
    bairro: "",
    cep: "",
    complemento: "",
    gia: "",
    ibge: "",
    localidade: "",
    logradouro: "",
    uf: "",
    unidade: "",
  },
  message: {
    show: false,
    type: '',
    msg: '',
  },
  isLoading: false
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_PROGRESS_SUCCESS:
      return {
        ...state,
        progress: action.payload.progress,
        isLoading: false,
        message: action.payload.message,
      };
    case types.GET_ADDRESS:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        messageIsLoading: action.payload.messageIsLoading,
        message: action.payload.message,
      };
    case types.GET_ADDRESS_SUCCESS:
      return {
        ...state,
        address: action.payload.address,
        isLoading: action.payload.isLoading,
        messageIsLoading: "",
        message: action.payload.message,
      };
    case types.GET_ADDRESS_FAILURE:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        address: action.payload.isLoading,
        messageIsLoading: "",
        message: action.payload.message,
      };
    case types.SAVE_PERSON_API:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        messageIsLoading: action.payload.messageIsLoading,
        message: action.payload.message,
      };
    case types.SAVE_PERSON_API_SUCCESS:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        person: action.payload.person,
        messageIsLoading: "",
        message: action.payload.message,
      };
    case types.SAVE_PERSON_API_FAILURE:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        person: {},
        messageIsLoading: "",
        message: action.payload.message,
      };
    case types.SAVE_QUESTIONNAIRE:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        messageIsLoading: action.payload.messageIsLoading,
        message: action.payload.message,
      };
    case types.SAVE_QUESTIONNAIRE_SUCCESS:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        messageIsLoading: "",
        message: action.payload.message,
      };
    case types.SAVE_QUESTIONNAIRE_FAILURE:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        messageIsLoading: "",
        message: action.payload.message,
      };
    default:
      return state;
  }
};

export default mainReducer;
