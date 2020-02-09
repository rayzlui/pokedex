import { PokedexPokemonList } from '../views/PokedexDisplay';
import { connect } from 'react-redux';
import { fetchData } from '../actions/actions';

function mapStateToProps(state) {
  return {
    pokedex: state.pokedex,
    data: state.requestPokedex.listData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    requestData: (input, parameter) => {
      dispatch(fetchData(input, parameter));
    },
  };
}

export const PokedexContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PokedexPokemonList);
