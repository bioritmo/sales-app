// Internal
import * as types from './constants';

export const initialState = {
  totalQuestions: 9,
  currentQuestion: 1,
  progress: '0%',
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
      };
    default:
      return state;
  }
};

export default mainReducer;
