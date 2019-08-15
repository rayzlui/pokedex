import React from 'react';
import PropTypes from 'prop-types';
import { LargeHeader, Image, Section } from './StyledComponents';
import styled from 'styled-components';

export const LargerImage = styled(Image)`
  height: 200px;
  width: 200px;
  border: 0px;
`;

const FetchSection = styled(Section)`
  display: block;
  text-align: center;
`;

export const SPINNING_POKEBALL =
  'https://media1.tenor.com/images/c59e7bfa31590e3f9eb4925639ddeb88/tenor.gif?itemid=7283217';

export function FetchingDisplay(props) {
  const { isFetching } = props;

  if (!isFetching) return null;

  return (
    <FetchSection>
      <LargeHeader>Searching</LargeHeader>
      <LargerImage
        className="spinning-pokeball"
        src={SPINNING_POKEBALL}
        alt="SPINNING POKEBALL"
      />
    </FetchSection>
  );
}

FetchingDisplay.propTypes = {
  isFetching: PropTypes.bool,
};
