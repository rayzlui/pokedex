import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
  FETCH_DATA_START,
} from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  data: null,
  error: null,
};

export function fetchDataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        data: null,
        error: action.error,
      });
    case FETCH_DATA_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data,
        error: null,
      });

    case FETCH_DATA_START:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
      });
    default:
      return state;
  }
}
