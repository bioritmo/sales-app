// External
import { all, fork } from 'redux-saga/effects';

// Internal
import mainSagas from './main/sagas';

export default function* rootSaga() {
  yield all(
    [
      fork(mainSagas),
    ],
  );
}
