import { displaying } from '../changeDisplay';
import { FETCH_DATA_START, CHANGE_DISPLAY_TO } from '../../actions/actionTypes';

describe('displaying', () => {
  const intitialState = {};

  it('should handle action', () => {
    const action = { type: FETCH_DATA_START, display: 'pokedex' };
    const display = displaying(intitialState, action);
    expect(display).toEqual(intitialState);
  });

  it('should handle action', () => {
    const action = { type: CHANGE_DISPLAY_TO, display: 'pokemon' };
    const display = displaying(intitialState, action);
    expect(display).toEqual('pokemon');
  });
});
