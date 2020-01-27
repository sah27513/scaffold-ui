import { mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { SHARED_ACTIONS } from 'app/config/constants';
import { searching } from 'app/store/dispatchers';

// Extract Constants
const { START_SEARCH, SEARCH_REJECTED } = SHARED_ACTIONS;

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
