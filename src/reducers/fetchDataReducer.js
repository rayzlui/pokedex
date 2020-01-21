import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
  FETCH_DATA_START,
} from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  data: null,
  listData: null,
  error: null,
};
const pokedexi = {
  kanto: true,
  'original-johto': true,
  hoenn: true,
  'original-sinnoh': true,
  'original-unova': true,
  'kalos-central': true,
  'kalos-coastal': true,
  'kalos-mountain': true,
};
export function fetchDataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        data: null,
        listData: null,
        error: action.error,
      });
    case FETCH_DATA_SUCCESS:
      if (pokedexi[action.data.name]) {
        return Object.assign({}, state, {
          isFetching: false,
          listData: action.data,
          data: state.data,
          error: null,
        });
      } else {
        return Object.assign({}, state, {
          isFetching: false,
          listData: state.listData,
          data: action.data,
          error: null,
        });
      }
    case FETCH_DATA_START:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
      });
    default:
      return state;
  }
}
