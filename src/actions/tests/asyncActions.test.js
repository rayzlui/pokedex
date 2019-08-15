import { fetchData, fetchUrl } from '../actions';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
  CHANGE_DISPLAY_TO,
} from '../actionTypes';

const middlewear = [thunk];
const mockStore = configureMockStore(middlewear);

describe('fetchData', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe('fetch pokemon success', () => {
    it('should dispatch a fetchDataStart, a changeDisplay and a fetchDataSucess action', () => {
      const pokemonData = {
        pokemon: {
          name: 'charizard',
          type: 'fire',
          moves: ['fire-blast', 'fire-spin'],
        },
      };
      fetchMock.getOnce(
        `https://pokeapi.co/api/v2/pokemon/charizard`,
        pokemonData,
      );
      const expectedActions = [
        { type: FETCH_DATA_START },
        { type: CHANGE_DISPLAY_TO, display: 'pokemon' },
        { type: FETCH_DATA_SUCCESS, data: pokemonData },
      ];
      const store = mockStore();

      return store.dispatch(fetchData('charizard')).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('fetch pokedex success', () => {
    it('should dispatch a fetchDataStart, changeDisplay and a fetchDataSucess action', () => {
      const pokedexData = {
        pokemon: {
          name: 'charizard',
          type: 'fire',
          moves: ['fire-blast', 'fire-spin'],
        },
      };
      fetchMock.getOnce(`https://pokeapi.co/api/v2/pokedex/kanto`, pokedexData);
      const expectedActions = [
        { type: FETCH_DATA_START },
        { type: CHANGE_DISPLAY_TO, display: 'pokedex' },
        { type: FETCH_DATA_SUCCESS, data: pokedexData },
      ];
      const store = mockStore();

      return store.dispatch(fetchData('kanto', 'pokedex')).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('fetch data failure', () => {
    it('should dispatch a fetchDataStart and a fetchDataError action', () => {
      const mockErrorResponse = {
        url: 'https://pokeapi.co/api/v2/pokemon/pikachu',
        status: 404,
        statusText: 'Not Found',
      };
      fetchMock.getOnce(`https://pokeapi.co/api/v2/pokemon/pikachu`, 404);
      const store = mockStore();
      const expectedActions = [
        { type: FETCH_DATA_START },
        {
          type: FETCH_DATA_ERROR,
          error: mockErrorResponse,
        },
      ];
      return store.dispatch(fetchData('pikachu')).then(() => {
        const actions = store.getActions();
        expect(actions).toEqual(expectedActions);
      });
    });
  });
});

describe('fetchUrl', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe('fetch url success', () => {
    it('should dispatch a fetchDataStart and a fetchDataSucess action', () => {
      const pokemonData = {
        results: [
          { name: 'charizard' },
          { name: 'charmander' },
          { name: 'charmelon' },
        ],
        next: 'https://pokeapi.co/api/v2/pokemon/?%offset=20',
      };
      fetchMock.getOnce(`https://pokeapi.co/api/v2/pokemon/`, pokemonData);
      const expectedActions = [
        { type: FETCH_DATA_START },
        { type: FETCH_DATA_SUCCESS, data: pokemonData },
      ];
      const store = mockStore();

      return store
        .dispatch(fetchUrl(`https://pokeapi.co/api/v2/pokemon/`))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
  });

  describe('fetch url failure', () => {
    it('should dispatch a fetchDataStart and a fetchDataError action', () => {
      const mockErrorResponse = {
        url: 'https://pokeapi.co/api/v2/pokemon/',
        status: 404,
        statusText: 'Not Found',
      };
      fetchMock.getOnce(`https://pokeapi.co/api/v2/pokemon/`, 404);
      const store = mockStore();
      const expectedActions = [
        { type: FETCH_DATA_START },
        {
          type: FETCH_DATA_ERROR,
          error: mockErrorResponse,
        },
      ];
      return store
        .dispatch(fetchUrl(`https://pokeapi.co/api/v2/pokemon/`))
        .then(() => {
          const actions = store.getActions();
          expect(actions).toEqual(expectedActions);
        });
    });
  });
});
