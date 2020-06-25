import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import reducers from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['auth'],
  blacklist: [],
};

const enhancer = compose(applyMiddleware(thunk));

const persistedReducer = persistReducer(persistConfig, reducers);
export const store = createStore(
  persistedReducer,
  composeWithDevTools(enhancer),
);
export const persistor = persistStore(store);
