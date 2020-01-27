import { ITEM_ACTIONS } from 'app/config/constants';
import * as actions from 'app/store/actions';

// Extract Constants
const { GET_ITEMS, GET_ITEMS_COMPLETE } = ITEM_ACTIONS;

// Action Creators
export const requestItems = dir => ({
  type: GET_ITEMS,
  payload: actions.buildRequest(dir)
});

export const getItems = dir => ({
  type: GET_ITEMS_COMPLETE,
  payload: actions.getItems(dir)
});
