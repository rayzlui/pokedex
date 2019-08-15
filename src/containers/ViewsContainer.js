import { connect } from 'react-redux';
import { fetchData } from '../actions/actions';

function mapStateToProps(state) {
  return {
    data: state.requestPokemon.data,
    displaying: state.displaying,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    requestData: (input, type) => {
      dispatch(fetchData(input, type));
    },
  };
}

export const ViewsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
);
