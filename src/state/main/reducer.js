// Internal
import * as types from './constants';

export const initialState = {
  message: {
    show: false,
    type: '',
    msg: '',
  },
  isLoading: false
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default mainReducer;
