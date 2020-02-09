import { connect } from 'react-redux';
import { ToggleMenu } from '../views/Menu';
import { changePokedex, fetchData, fetchPokedex } from '../actions/actions';

function mapStateToProps(state) {
  return {
    pokedex: state.pokedex,
    isFetching: state.requestPokedex.isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changePokedex: region => {
      dispatch(changePokedex(region));
      dispatch(fetchPokedex(region));
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
