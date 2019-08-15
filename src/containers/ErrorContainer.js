import { ErrorView } from '../views/ErrorView';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    error: state.requestPokemon.error,
  };
}

export const ErrorContainer = connect(
  mapStateToProps,
  null,
)(ErrorView);
