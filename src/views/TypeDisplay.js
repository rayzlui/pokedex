import React from 'react';
import PropTypes from 'prop-types';
import { CreateButtonsFromInfo } from './PokemonDisplay';
import { LargeHeader } from './StyledComponents';

export function TypeDisplay(props) {
  const { data, displaying, requestData } = props;
  if (data === null || displaying !== 'type' || data.count) return null;
  const { name, pokemon, damage_relations, moves } = data;
  const {
    double_damage_from,
    double_damage_to,
    half_damage_from,
    half_damage_to,
    no_damage_from,
    no_damage_to,
  } = damage_relations;

  return (
    <>
      <LargeHeader>{name.toUpperCase()}</LargeHeader>
      <h4>Double Damage To:</h4>
      <CreateButtonsFromInfo
        array={double_damage_to}
        type={'type'}
        requestData={requestData}
      />
      <h4>Half Damage From:</h4>
      <CreateButtonsFromInfo
        array={half_damage_from}
        type={'type'}
        requestData={requestData}
      />
      <h4>No Damage From:</h4>
      <CreateButtonsFromInfo
        array={no_damage_from}
        type={'type'}
        requestData={requestData}
      />
      <h4>Double Damage From:</h4>
      <CreateButtonsFromInfo
        array={double_damage_from}
        type={'type'}
        requestData={requestData}
      />
      <h4>Half Damage To:</h4>
      <CreateButtonsFromInfo
        array={half_damage_to}
        type={'type'}
        requestData={requestData}
      />
      <h4>No Damage To:</h4>
      <CreateButtonsFromInfo
        array={no_damage_to}
        type={'type'}
        requestData={requestData}
      />
      <h3>Pokemon</h3>
      <CreateButtonsFromInfo
        array={pokemon}
        type={'pokemon'}
        requestData={requestData}
      />
      <h3>Moves</h3>
      <CreateButtonsFromInfo
        array={moves}
        type={'move'}
        requestData={requestData}
      />
    </>
  );
}

TypeDisplay.propTypes = {
  data: PropTypes.object,
  displaying: PropTypes.string,
  requestData: PropTypes.func,
};
