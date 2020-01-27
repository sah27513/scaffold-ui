import { mergeMap, catchError, mapTo } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { of, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { ITEM_ACTIONS } from 'app/config/constants';
import { ajax } from 'rxjs/ajax';
import { getItems } from 'app/store/dispatchers';
import * as actions from 'app/store/actions';

// Extract Constants
const { GET_ITEMS, GET_ITEMS_REJECTED } = ITEM_ACTIONS;

export const getItemsEpic = (action$, state$) => {
  return action$.pipe(
    ofType(GET_ITEMS),
    mapTo(actions.getUrls(state$.value.item)),
    map(urls =>
      urls.map(url =>
        ajax
          .getJSON(url, { uid: state$.value.auth.user.uid, 'x-ic-profile': state$.value.auth.token })
          .pipe(map(response => ({ [url]: response })))
      )
    ),
    mergeMap(reqs => forkJoin(reqs)),
    map(getItems),
    catchError(error =>
      of({
        type: GET_ITEMS_REJECTED,
        payload: error,
        error: true
      })
    )
  );
};
