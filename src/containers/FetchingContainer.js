import { FetchingDisplay } from '../views/FetchingDisplay';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    isFetching: state.requestPokemon.isFetching,
  };
}

export const FetchingContainer = connect(
  mapStateToProps,
  null,
)(FetchingDisplay);
