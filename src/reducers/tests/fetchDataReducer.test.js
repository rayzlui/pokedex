import { fetchDataReducer } from '../fetchDataReducer';
import {
  FETCH_DATA_ERROR,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
} from '../../actions/actionTypes';

const state = undefined;

describe('fetchDataReducer', () => {
  it('should handle the initial state by default', () => {
    const action = { type: 'not_fetch', data: 'info' };
    const result = fetchDataReducer(state, action);
    expect(result).toEqual({ data: null, error: null, isFetching: false });
  });

  it('should handle the FETCH_DATA_ERROR action', () => {
    const error = 'oh no there was error : (';
    const action = { type: FETCH_DATA_ERROR, error: error };
    const result = fetchDataReducer(state, action);
    expect(result).toEqual({
      ...state,
      isFetching: false,
      data: null,
      error: error,
    });
  });

  it('should handle the FETCH_DATA_SUCCESS action', () => {
    const data = { moves: 'attk!', type: 'slow' };
    const action = { type: FETCH_DATA_SUCCESS, data: data };
    const result = fetchDataReducer(state, action);
    expect(result).toEqual({
      isFetching: false,
      data: data,
      error: null,
    });
  });

  it('should handle the FETCH_DATA_START action', () => {
    const action = { type: FETCH_DATA_START };
    const result = fetchDataReducer(state, action);
    expect(result).toEqual({
      isFetching: true,
      data: null,
      error: null,
    });
  });
});
