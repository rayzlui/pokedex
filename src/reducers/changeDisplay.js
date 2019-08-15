import { CHANGE_DISPLAY_TO } from '../actions/actionTypes';

export function displaying(state = 'pokedex', action) {
  const type = action.type;
  switch (type) {
    case CHANGE_DISPLAY_TO:
      return action.display;
    default:
      return state;
  }
}
