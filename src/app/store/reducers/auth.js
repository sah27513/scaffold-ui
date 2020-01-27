import { validateAuth } from 'app/store/actions';

// Create the Initial State
const initialState = {
  token: '',
  user: {},
  drives: [],
  ...validateAuth()
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGOUT':
      return {
        ...state,
        loading: false,
        isAuth: action.payload.isAuth
      };
    case 'LOGIN':
      return {
        ...state,
        loading: true,
        isAuth: action.payload.isAuth
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        drives: action.payload.drives,
        isAuth: action.payload.isAuth
      };
    default:
      return state;
  }
};
