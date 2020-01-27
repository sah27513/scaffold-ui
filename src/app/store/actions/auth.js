import jwt from 'jsonwebtoken';

export const login = data => {
  const { user, drives } = jwt.decode(data.token);
  localStorage.setItem('token', data.token);
  document.getElementById('token').innerHTML = data.token;
  document.getElementById('oauth').innerHTML = data.oauth;

  return { user, drives, token: data.token, isAuth: true };
};

export const logout = () => {
  localStorage.clear();
  return { isAuth: false };
};

export const validateAuth = () => {
  try {
    const token = localStorage.getItem('token');
    const { user, drives } = jwt.decode(token);
    const isAuth = user && true;

    // Return the Initial store state
    return { user, drives, token, isAuth };
  } catch (error) {
    return { isAuth: false };
  }
};
