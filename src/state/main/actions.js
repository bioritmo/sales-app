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