import { combineReducers } from 'redux';
import { displaying } from './changeDisplay';
import { pokedex } from './changePokedexReducers';
import { fetchDataReducer } from './fetchDataReducer';

export const rootReducer = combineReducers({
  requestPokemon: fetchDataReducer,
  pokedex,
  displaying,
});
