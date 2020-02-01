import { SHARED_ACTIONS } from 'app/config/constants';
import * as actions from 'app/store/actions';

// Extract Constants
const { EXPAND_DRIVE, DRAWER_TOGGLE, CHANGE_THEME, MENU_TOGGLE, START_SEARCH, CHANGE_TAB, SEARCH } = SHARED_ACTIONS;

export const toggleMenu = (type, data) => ({
  type: MENU_TOGGLE,
  payload: { type, data }
});

export const toggleDrawer = (type, data) => ({
  type: DRAWER_TOGGLE,
  payload: { type, data }
});

export const toggleTheme = type => ({
  type: CHANGE_THEME,
  payload: type
});

export const changeTab = tab => ({
  type: CHANGE_TAB,
  payload: { value: tab }
});

export const setExpanded = drive => ({
  type: EXPAND_DRIVE,
  payload: drive
});

export const search = data => ({
  type: START_SEARCH,
  payload: actions.search(data)
});

export const searching = data => ({
  type: SEARCH,
  payload: actions.search(data)
});
