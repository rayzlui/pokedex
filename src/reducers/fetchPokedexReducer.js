import {
  FETCH_POKEDEX_SUCESS,
  FETCH_POKEDEX_ERROR,
  FETCH_POKEDEX_START,
} from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  listData: null,
  error: null,
};

export function fetchPokedexReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POKEDEX_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        listData: null,
        error: action.error,
      });
    case FETCH_POKEDEX_SUCESS:
      return Object.assign({}, state, {
        isFetching: false,
        listData: action.data,
        error: null,
      });
    case FETCH_POKEDEX_START:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
      });
    default:
      return state;
  }
}
