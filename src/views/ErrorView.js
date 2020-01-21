import React from 'react';
import PropTypes from 'prop-types';
import { LargeHeader } from './StyledComponents';

export function ErrorView(props) {
  const { error } = props;
  if (!error) return null;
  let errorInfo = 'Unknown Rrror';
  if (error.status === 404) {
    errorInfo = 'Unable to find search, please try another one';
  }
  return (
    <>
      <LargeHeader>Error: {error.status}</LargeHeader>
      <p>{errorInfo}</p>
    </>
  );
}

ErrorView.propTypes = {
  error: PropTypes.object,
};
