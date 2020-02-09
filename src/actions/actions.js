import {
  FETCH_DATA_ERROR,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  CHANGE_POKEDEX,
  CHANGE_DISPLAY_TO,
  FETCH_POKEDEX_START,
  FETCH_POKEDEX_ERROR,
  FETCH_POKEDEX_SUCESS,
} from './actionTypes';

export function fetchData(info, type) {
  return async function requestPokemon(dispatch) {
    dispatch(fetchDataStart());
    const response = await fetch(`https://pokeapi.co/api/v2/${type}/${info}`);
    if (response.status === 200) {
      const data = await response.json();
      dispatch(changeDisplay(type));
      dispatch(fetchDataSuccess(data));
    } else {
      const { status, statusText, url } = response;
      const errorInfo = { status, statusText, url };
      dispatch(fetchDataError(errorInfo));
    }
  };
}

export function fetchPokedex(region) {
  return async function requestPokedex(dispatch) {
    dispatch(fetchPokedexStart());
    const response = await fetch(`https://pokeapi.co/api/v2/pokedex/${region}`);
    if (response.status === 200) {
      const data = await response.json();
      dispatch(fetchPokedexSuccess(data));
    } else {
      const { status, statusText, url } = response;
      const errorInfo = { status, statusText, url };
      dispatch(fetchPokedexError(errorInfo));
    }
  };
}

export function fetchUrl(url) {
  return async function requestUrl(dispatch) {
    dispatch(fetchDataStart());
    const response = await fetch(url);
    if (response.status === 200) {
      const data = await response.json();
      dispatch(fetchDataSuccess(data));
    } else {
      const { status, statusText, url } = response;
      const errorInfo = { status, statusText, url };
      dispatch(fetchDataError(errorInfo));
    }
  };
}

export function fetchDataSuccess(data) {
  return { type: FETCH_DATA_SUCCESS, data: data };
}

export function fetchPokedexSuccess(data) {
  return { type: FETCH_POKEDEX_SUCESS, data: data };
}

export function fetchDataError(error) {
  return { type: FETCH_DATA_ERROR, error: error };
}

export function fetchPokedexError(error) {
  return { type: FETCH_POKEDEX_ERROR, error: error };
}

export function fetchDataStart() {
  return { type: FETCH_DATA_START };
}

export function fetchPokedexStart() {
  return { type: FETCH_POKEDEX_START };
}

export function changePokedex(region) {
  return { type: CHANGE_POKEDEX, region: region };
}

export function changeDisplay(input) {
  return { type: CHANGE_DISPLAY_TO, display: input };
}
