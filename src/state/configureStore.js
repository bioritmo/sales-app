// External
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist'
import persistReducers from './persistReducer';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import history from '../routes/history';

// Internal
import reducers from './rootReducer';
import allSagas from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const rootSaga = allSagas;

let middleware = [sagaMiddleware,  routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({
    collapsed: (getState, action) => action.type.includes('@@redux-form'),
  });
  middleware = [...middleware, logger];
}

const composeEnhancers = composeWithDevTools({});
const store = createStore(connectRouter(history)(persistReducers(reducers)), composeEnhancers(applyMiddleware(...middleware)));
const persistor = persistStore(store)

sagaMiddleware.run(rootSaga);

export { store, persistor };

