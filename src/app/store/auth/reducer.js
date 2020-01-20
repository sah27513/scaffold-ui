import { validateAuth } from 'app/store/auth/action';

// Create the Initial State
const initialState = {
  token: '',
  user: {},
  isAuth: false,
  ...validateAuth()
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state
      };
    case 'LOGOUT':
    case 'LOGIN':
      return {
        ...state,
        user: action.payload.user,
        isAuth: action.payload.isAuth
      };
    default:
      return state;
  }
};
