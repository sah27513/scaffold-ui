import { mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import * as actions from 'app/store/auth/action';
import { of } from 'rxjs';
import { AUTH_ACTIONS } from 'app/config/constants';

// Extract Constants
const { LOGIN, LOGIN_REJECTED, LOGOUT, SET_ORG } = AUTH_ACTIONS;

// Action Creators
export const login = credentials => dispatch =>
  dispatch({
    type: LOGIN,
    payload: actions.login(credentials, dispatch)
  });

export const setOrg = organization => dispatch =>
  dispatch({
    type: SET_ORG,
    payload: { organization }
  });

export const logout = () => dispatch =>
  dispatch({
    type: LOGOUT,
    payload: actions.logout(dispatch)
  });

export const loginEpic = action$ => {
  return action$.pipe(
    ofType(LOGIN),
    catchError(error =>
      of({
        type: LOGIN_REJECTED,
        payload: error,
        error: true
      })
    )
  );
};
