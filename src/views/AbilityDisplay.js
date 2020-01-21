import PropTypes from 'prop-types';
import React from 'react';
import { CreateButtonsFromInfo } from './PokemonDisplay';
import { LargeHeader } from './StyledComponents';

export function AbilityDisplay(props) {
  const { data, displaying, requestData, isFetching } = props;
  if (!data || displaying !== 'ability' || isFetching) return null;

  const { name, pokemon, effect_entries } = data;
  const firstEffect = effect_entries[0].effect;
  return (
    <>
      <LargeHeader>{name.toUpperCase()}</LargeHeader>
      <h3>Effect</h3>
      <p>{firstEffect}</p>
      <h3>Pokemon with {name}</h3>
      <CreateButtonsFromInfo
        array={pokemon}
        type={'pokemon'}
        requestData={requestData}
      />
    </>
  );
}

AbilityDisplay.propTypes = {
  data: PropTypes.object,
  displaying: PropTypes.string,
  requestData: PropTypes.func,
  isFetching: PropTypes.bool,
};
