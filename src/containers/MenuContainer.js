import { connect } from 'react-redux';
import { ToggleMenu } from '../views/Menu';
import { changePokedex, fetchData } from '../actions/actions';

function mapStateToProps(state) {
  return {
    pokedex: state.pokedex,
    data: state.requestPokemon.data,
    displaying: state.displaying,
    isFetching: state.requestPokemon.isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changePokedex: (input, display, type) => {
      dispatch(changePokedex(input));
      dispatch(fetchData(input, display, type));
    },

    requestData: (input, parameter) => {
      dispatch(fetchData(input, parameter));
    },
  };
}

export const MenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToggleMenu);
