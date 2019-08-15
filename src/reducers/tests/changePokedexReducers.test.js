import { pokedex } from '../changePokedexReducers';
import { FETCH_POKEMON_ERROR, CHANGE_POKEDEX } from '../../actions/actionTypes';

describe('pokedex', () => {
  const state = { pokemon: 'charizard' };

  it('should handle action', () => {
    const action = { type: FETCH_POKEMON_ERROR, region: 'banana' };
    const result = pokedex(state, action);
    expect(result).toEqual(state);
  });

  it('should handle action', () => {
    const action = { type: CHANGE_POKEDEX, region: 'kanto' };
    const result = pokedex(state, action);
    expect(result).toEqual('kanto');
  });
});
