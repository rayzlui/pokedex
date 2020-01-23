import { combineReducers } from 'redux';
import { displaying } from './changeDisplay';
import { pokedex } from './changePokedexReducers';
import { fetchDataReducer } from './fetchDataReducer';
import { fetchPokedexReducer } from './fetchPokedexReducer';

export const rootReducer = combineReducers({
  requestPokemon: fetchDataReducer,
  requestPokedex: fetchPokedexReducer,
  pokedex,
  displaying,
});
