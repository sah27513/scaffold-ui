import { mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import * as actions from 'app/store/shared/action';
import { SHARED_ACTIONS } from 'app/config/constants';

// Extract Constants
const { DRAWER_TOGGLE, CHANGE_THEME, MENU_TOGGLE, START_SEARCH, SEARCH_REJECTED, SEARCH } = SHARED_ACTIONS;

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

export const search = data => ({
  type: START_SEARCH,
  payload: actions.search(data)
});

export const searching = data => ({
  type: SEARCH,
  payload: actions.search(data)
});

export const searchEpic = action$ => {
  return action$.pipe(
    ofType(START_SEARCH),
    mergeMap(async action => await searching(action.payload)),
    catchError(error =>
      of({
        type: SEARCH_REJECTED,
        payload: error,
        error: true
      })
    )
  );
};
