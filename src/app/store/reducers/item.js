import { validateAuth } from 'app/store/actions';

// Create the Initial State
const initialState = {
  loading: false,
  files: [],
  folders: [],
  list: []
};

export const item = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ITEMS':
      return {
        ...state,
        loading: true
      };
    case 'GET_ITEMS_COMPLETE':
      return {
        ...state,
        loading: false,
        list: action.payload.list,
        files: action.payload.files,
        folders: action.payload.folders
      };
    default:
      return state;
  }
};
