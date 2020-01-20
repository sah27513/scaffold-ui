// External Dependencies
import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// Reducers
import { auth, loginEpic } from 'app/store/auth';
import { shared, searchEpic } from 'app/store/shared';
import { project } from 'app/store/project';

// Combine the Reducers to create the Store
export const rootEpic = combineEpics(searchEpic);

// Combine the Reducers to create the Store
export const rootReducer = combineReducers({
  form: formReducer,
  project,
  shared,
  auth
});
