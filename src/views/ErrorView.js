import React from 'react';
import PropTypes from 'prop-types';
import { LargeHeader } from './StyledComponents';

export function ErrorView(props) {
  const { error } = props;
  if (!error) return null;
  return (
    <>
      <LargeHeader>Error: {error.status}</LargeHeader>
      <p>{error.statusText}</p>
    </>
  );
}

ErrorView.propTypes = {
  error: PropTypes.object,
};
