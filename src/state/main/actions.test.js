//internal
import * as actions from './actions';
import * as types from './constants';

describe('state/main/actions/', () => {
  it('should create action for `startGame`', () => {
    const payload = {
      message: {
        show: false,
        type: '',
        msg: '',
      },
      isLoading: false
    };

    expect(actions.startGame()).toEqual({
      type: types.START_GAME,
      payload,
    });
  });
});
