//external
import { takeLatest, all, put, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';

//internal
import * as types from './constants';
import * as actions from './actions';

export function* workerStartGame() {
 alert("Start game");
}

export function* workerNextQuestion(action) {
  const { page } = action.payload;

  yield put(actions.updateProgress())
  yield put(push(page));
}

export function* workerUpdateProgress(action) {
  const { progress } = action.payload;

  if (progress) {
    yield put(actions.updateProgressSuccess(progress))
  } else {
    const mainSelect = state => state.main;
    const { progress, totalQuestions } = yield select(mainSelect);
    const percent = progress.replace(/[^0-9]/g,'');

    const nextPercent = parseInt((100 / parseInt(totalQuestions)));
    const nextProgress = (parseInt(percent) + nextPercent);
    yield put(actions.updateProgressSuccess(`${nextProgress}%`))
  }
  
}

export default function* authSagas() {
  yield all([
    yield takeLatest(types.START_GAME, workerStartGame),
    yield takeLatest(types.NEXT_QUESTION, workerNextQuestion),
    yield takeLatest(types.UPDATE_PROGRESS, workerUpdateProgress),
  ]);
}