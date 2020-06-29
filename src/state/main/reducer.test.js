//internal
import reducer, { initialState } from './reducer';

describe('state/main/reducer', () => {
  it('should return initial state', () => {
    expect(reducer(initialState, reducer(undefined, {})))
      .toEqual(initialState);
  });
});