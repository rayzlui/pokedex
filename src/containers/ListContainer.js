import { ListDisplay } from '../views/ListDisplay';
import { connect } from 'react-redux';
import { fetchUrl, fetchData } from '../actions/actions';

function mapStateToProps(state) {
  return {
    data: state.requestPokemon.data,
    displaying: state.displaying,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUrl: url => dispatch(fetchUrl(url)),
    requestData: (input, parameter) => dispatch(fetchData(input, parameter)),
  };
}

export const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListDisplay);
