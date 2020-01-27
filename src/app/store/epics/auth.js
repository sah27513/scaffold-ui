import { mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AUTH_ACTIONS } from 'app/config/constants';
import { ajax } from 'rxjs/ajax';
import { loginComplete } from 'app/store/dispatchers';

// Extract Constants
const { LOGIN, LOGIN_REJECTED } = AUTH_ACTIONS;

export const loginEpic = action$ => {
  return action$.pipe(
    ofType(LOGIN),
    mergeMap(action =>
      ajax.getJSON('http://localhost:3000/cdx', { uid: action.payload.uid }).pipe(map(response => loginComplete(response)))
    ),
    catchError(error =>
      of({
        type: LOGIN_REJECTED,
        payload: error,
        error: true
      })
    )
  );
};
