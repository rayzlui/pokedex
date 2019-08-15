import {
  changeDisplay,
  changePokedex,
  fetchDataError,
  fetchDataStart,
  fetchDataSuccess,
} from '../actions';
import {
  CHANGE_POKEDEX,
  FETCH_DATA_ERROR,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  CHANGE_DISPLAY_TO,
} from '../actionTypes';

describe('fetchDataSuccess', () => {
  it('should return an object', () => {
    const data = { some: 'data' };
    const success = fetchDataSuccess(data);
    expect(success).toEqual({ type: FETCH_DATA_SUCCESS, data: data });
  });
});

describe('fetchDataError', () => {
  it('should return an object', () => {
    const error = { some: 'error' };
    const failure = fetchDataError(error);
    expect(failure).toEqual({ type: FETCH_DATA_ERROR, error: error });
  });
});

describe('fetchDataStart', () => {
  it('should return an object', () => {
    const started = fetchDataStart();
    expect(started).toEqual({ type: FETCH_DATA_START });
  });
});

describe('changePokedex', () => {
  it('should return an object', () => {
    const region = 'kanto';
    const result = changePokedex(region);
    expect(result).toEqual({ type: CHANGE_POKEDEX, region: region });
  });
});

describe('changeDisplay', () => {
  it('should return an object', () => {
    const input = 'pokedex';
    const result = changeDisplay(input);
    expect(result).toEqual({ type: CHANGE_DISPLAY_TO, display: input });
  });
});
