// External
import { combineReducers } from 'redux';

// Internal
import mainReducer from './main/reducer';

const rootReducer = combineReducers({
  main: mainReducer,
});

export default rootReducer;