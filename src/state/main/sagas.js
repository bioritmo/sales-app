//external
import { takeLatest, all, put, select, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';

//internal
import * as types from './constants';
import * as actions from './actions';
import { getAddress } from 'services/getAddress';
import { normalizePersonToAPI, getStorageItem } from 'shared/utils';
import { savePersonApi, createVisit, saveQuestions } from 'services/bioRitmo';
import { sendEmail } from 'services/sendEmail';

export function* workerStartGame() {
 alert("Start game");
}

export function* workerNextQuestion(action) {
  const { page } = action.payload;

  yield put(actions.updateProgress());
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

export function* workerGetAddress(action) {
  const { zipCode } = action.payload;
  try {
    const address = yield call(getAddress, zipCode);
    yield put(actions.getAddressSuccess(address.data));
  } catch (error) {
    console.error(error);
    yield put(actions.getAddressFailure({
      bairro: "",
      cep: "",
      complemento: "",
      gia: "",
      ibge: "",
      localidade: "",
      logradouro: "",
      uf: "",
      unidade: "",
    }));
  }
}

export function* workerSavePersonApi(action) {
  const { data } = action.payload;
  try {
    const response = yield call(savePersonApi, normalizePersonToAPI(data));
    yield put(actions.registerPersonSuccess(response.data));
    // yield call(workerCreateVisit, response.data)
    yield put(actions.nextQuestion("/fim-de-jogo"));
  } catch (error) {
    console.error(error);
    yield put(actions.registerPersonFailure({}));
    alert("Erro ao cadastrar, tente novamente.");
  }
}

export function* workerCreateVisit(action) {
  const { personId, name } = action.payload;
  try {
    yield call(createVisit, personId, name);
    yield put(actions.createVisitSuccess());
    yield put(actions.nextQuestion("/resultado-final/resultados"));
  } catch (error) {
    yield put(actions.createVisitFailure());
    console.error(error);
  }
}

export function* workerSaveQuestions() {
  try {
    const people = getStorageItem('persona');
    const bodyFormData = new FormData();
    bodyFormData.append('person[document_number]', people.document);
    bodyFormData.append('person[document_kind]', 'cpf');
    bodyFormData.append('person[questionnaire_response]', localStorage.getItem('@bioData'));

    yield call(saveQuestions, bodyFormData);
    yield put(actions.nextQuestion("/fim-de-jogo"));
  } catch (error) {
    console.error(error);
  }
}

export function* workerSendEmail(action) {
  const { data } = action.payload;
  try {
    yield call(sendEmail, data);
  } catch (error) {
    console.error(error);
    yield put(actions.sendEmailFailure({}));
  }
}

export default function* authSagas() {
  yield all([
    yield takeLatest(types.START_GAME, workerStartGame),
    yield takeLatest(types.NEXT_QUESTION, workerNextQuestion),
    yield takeLatest(types.UPDATE_PROGRESS, workerUpdateProgress),
    yield takeLatest(types.GET_ADDRESS, workerGetAddress),
    yield takeLatest(types.SAVE_PERSON_API, workerSavePersonApi),
    yield takeLatest(types.SEND_EMAIL, workerSendEmail),
    yield takeLatest(types.SAVE_QUESTIONNAIRE, workerSaveQuestions),
    yield takeLatest(types.CREATE_VISIT, workerCreateVisit),
  ]);
}