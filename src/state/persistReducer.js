//external
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

export default reducers => {
  const persistedReducer = persistReducer({
    key: 'root',
    storage,
  }, reducers);

  return persistedReducer;
}
