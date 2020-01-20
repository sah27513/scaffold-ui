import { compact } from 'lodash';
import { toggleTheme, toggleMenu } from 'app/store/shared/epic';
import jwt from 'jsonwebtoken';

export const login = ({ email, password }, dispatch) => {
  // throw new Error('Something went wrong...');

  dispatch(toggleTheme(user.settings.theme));

  const token = jwt.sign({ user }, 'secret');
  localStorage.setItem('token', token);

  return { user, token, isAuth: true };
};

export const logout = dispatch => {
  localStorage.clear();

  dispatch(toggleTheme('light'));
  dispatch(toggleMenu('profile', { open: false }));

  return { isAuth: false };
};

export const validateAuth = () => {
  try {
    const token = localStorage.getItem('token');
    const { user } = jwt.decode(token);

    // Get the Currently selected User Organization
    const parts = window.location.hash.split('/').filter(part => part !== '#');

    // Return the Initial store state
    return { user, theme: user.settings.theme, isAuth: true };
  } catch (error) {
    return {};
  }
};
