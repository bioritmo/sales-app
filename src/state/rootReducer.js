// External
import { combineReducers } from 'redux';

// Internal
import mainReducer from './main/reducer';
import { connectRouter } from 'connected-react-router';
import history from 'routes/history';

const rootReducer = combineReducers({
  router: connectRouter(history),
  main: mainReducer,
});

export default rootReducer;