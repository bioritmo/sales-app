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