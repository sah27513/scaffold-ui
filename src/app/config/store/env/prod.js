import { createStore, applyMiddleware } from 'redux';
import { rootReducer, rootEpic } from 'app/store/root';
import thunkMiddleware from 'redux-thunk';
import { createEpicMiddleware } from 'redux-observable';

// Create the Epic Middleware
const epicMiddleware = createEpicMiddleware();

// Middleware you want to use in production:
const enhancer = applyMiddleware(thunkMiddleware, epicMiddleware);

export const configureStore = initialState => {
  const store = createStore(rootReducer, initialState, enhancer);

  epicMiddleware.run(rootEpic);

  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  return store;
};
