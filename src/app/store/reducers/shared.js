import { SHARED_ACTIONS, HELP } from 'app/config/constants';
import { theme } from 'app/config/theme';
import { getDrive, validateAuth } from 'app/store/actions';

// Extract Constants
const { EXPAND_DRIVE, CHANGE_TAB, DRAWER_TOGGLE, CHANGE_THEME, MENU_TOGGLE } = SHARED_ACTIONS;

// Create the Initial State
const initialState = {
  theme: validateAuth().theme ? theme(validateAuth().theme) : theme('light'),
  notifications: [],
  help: HELP,
  drawers: {
    fullscreen: { open: false, component: {} },
    left: { visible: true, open: true },
    right: { open: false }
  },
  tabs: {
    value: 0
  },
  drivePanel: getDrive(),
  menus: {
    profile: { open: false },
    search: { open: false }
  }
};

export const shared = (state = initialState, action) => {
  switch (action.type) {
    case MENU_TOGGLE:
      return {
        ...state,
        menus: {
          ...state.menus,
          [action.payload.type]: action.payload.data
        }
      };
    case DRAWER_TOGGLE:
      return {
        ...state,
        drawers: {
          ...state.drawers,
          [action.payload.type]: action.payload.data
        }
      };
    case CHANGE_THEME:
      return {
        ...state,
        theme: theme(action.payload)
      };
    case CHANGE_TAB:
      return {
        ...state,
        tabs: action.payload
      };
    case EXPAND_DRIVE:
      return {
        ...state,
        drivePanel: action.payload
      };
    default:
      return state;
  }
};
