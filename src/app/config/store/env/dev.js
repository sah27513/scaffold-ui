import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createEpicMiddleware } from 'redux-observable';

import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

// Local configurations
import { rootEpic, rootReducer } from 'app/store/root';
import { DevTools, loggerMiddleware } from 'app/config/store/middleware';

// Create the Epic Middleware
const epicMiddleware = createEpicMiddleware();

const enhancer = compose(
  applyMiddleware(thunkMiddleware, epicMiddleware, loggerMiddleware),
  DevTools.instrument()
);

export const configureStore = initialState => {
  // Create the store
  const store = createStore(rootReducer, initialState, enhancer);

  // Set the Root epic for HMR
  const epic$ = new BehaviorSubject(rootEpic);

  const hotReloadingEpic = (...args) => epic$.pipe(switchMap(epic => epic(...args)));

  epicMiddleware.run(hotReloadingEpic);

  if (module.hot) {
    module.hot.accept('app/store/root', () => {
      // Get the Next Root Epic
      const nextRootEpic = require('app/store/root').rootEpic;

      // Now setup the new one
      epic$.next(nextRootEpic);
    });
  }

  // Return the Created Store
  return store;
};
