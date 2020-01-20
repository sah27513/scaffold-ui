import { SHARED_ACTIONS } from 'app/config/constants';
import { theme } from 'app/config/theme';
import { validateAuth } from 'app/store/auth/action';
// import { Loading } from 'app/components/shared';

// Extract Constants
const { DRAWER_TOGGLE, CHANGE_THEME, MENU_TOGGLE } = SHARED_ACTIONS;

// Create the Initial State
const initialState = {
  theme: validateAuth().theme ? theme(validateAuth().theme) : theme('light'),
  notifications: [],
  drawers: {
    fullscreen: { open: false, component: {} },
    left: { visible: true, open: true },
    right: { open: false }
  },
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
    default:
      return state;
  }
};
