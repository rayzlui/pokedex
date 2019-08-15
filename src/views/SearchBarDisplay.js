import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from './StyledComponents';
import { PokedexDiv } from './PokedexDisplay';
import styled from 'styled-components';

const ENTER_KEY = 13;

const Input = styled.input`
  margin: 0 auto;
  width: 235px;
`;

export function ChangeSearchByButtons(props) {
  const { parameters, changeParameter } = props;
  const buttons = parameters.map(parameter => {
    return (
      <Button
        key={`${parameter} button`}
        onClick={() => changeParameter(parameter)}
      >
        {parameter.toUpperCase()}
      </Button>
    );
  });

  return <>{buttons}</>;
}

ChangeSearchByButtons.propTypes = {
  parameters: PropTypes.array,
  changeParameter: PropTypes.func,
};

export function SearchBar(props) {
  const { requestData } = props;
  const [parameter, changeParameter] = useState('pokemon');
  const parameters = [
    'ability',
    'pokemon',
    'type',
    'move',
    'berry',
    'pokemon-color',
  ];

  return (
    <PokedexDiv>
      <ChangeSearchByButtons
        parameters={parameters}
        changeParameter={changeParameter}
      />
      <h4>SEARCH BY: {parameter.toUpperCase()}</h4>
      <Input
        type="search"
        onKeyDown={event => {
          if (event.keyCode === ENTER_KEY) {
            requestData(event.target.value, parameter);
            event.target.value = '';
          }
        }}
      />
    </PokedexDiv>
  );
}

SearchBar.propTypes = {
  requestData: PropTypes.func,
};
