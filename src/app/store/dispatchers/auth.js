import { AUTH_ACTIONS } from 'app/config/constants';
import * as actions from 'app/store/actions';

// Extract Constants
const { LOGIN, LOGIN_SUCCESS, LOGOUT, SET_ORG } = AUTH_ACTIONS;

// Action Creators
export const login = credentials => ({
  type: LOGIN,
  payload: { uid: credentials.email }
});

export const loginComplete = credentials => ({
  type: LOGIN_SUCCESS,
  payload: actions.login(credentials)
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
