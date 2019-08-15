import { CHANGE_POKEDEX } from '../actions/actionTypes';

export function pokedex(state = 'kanto', action) {
  switch (action.type) {
    case CHANGE_POKEDEX:
      return action.region;
    default:
      return state;
  }
}
