// External Dependencies
import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// Reducers
import { auth, shared, item } from 'app/store/reducers';
import { searchEpic, loginEpic, getItemsEpic } from 'app/store/epics';

// Combine the Reducers to create the Store
export const rootEpic = combineEpics(searchEpic, loginEpic, getItemsEpic);

// Combine the Reducers to create the Store
export const rootReducer = combineReducers({
  form: formReducer,
  item,
  shared,
  auth
});
