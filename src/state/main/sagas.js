//external
import { takeLatest, all } from 'redux-saga/effects';

//internal
import * as types from './constants';

export function* workerStartGame() {
 alert("Start game");
}

export default function* authSagas() {
  yield all([
    yield takeLatest(types.START_GAME, workerStartGame),
  ]);
}