import React from 'react';
import PropTypes from 'prop-types';
import { Button, LargeHeader } from './StyledComponents';
import styled from 'styled-components';

export const Select = styled.select`
  margin: 0 auto;
  width: 235px;
  height: 40px;
  background-color: black;
  color: white;
  font-size: 25px;
  border-radius: 2px;
  box-shadow: 1px 1px 1px silver;
`;

export const PokedexHeader = styled(LargeHeader)`
  border-bottom: 1px black solid;
  text-align: center;
`;

export const PokedexDiv = styled.div`
  background-color: white;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0 auto;
  padding: 5px 0;
`;

export function MultipleOptions(props) {
  const { options } = props;
  return options.map(option => {
    return (
      <option key={option} value={option}>
        {option.toUpperCase()}
      </option>
    );
  });
}

export function PokedexPokemonList(props) {
  const { data, pokedex, requestData } = props;
  if (!data) return null;
  const { pokemon_entries } = data;
  return (
    <>
      <PokedexHeader>{pokedex.toUpperCase()}</PokedexHeader>
      {pokemon_entries.map(pokemon => {
        const name = pokemon.pokemon_species.name;
        return (
          <Button key={`${name} button`} onClick={() => requestData(name, 'pokemon')}>
            {name}
          </Button>
        );
      })}
    </>
  );
}

PokedexPokemonList.propTypes = {
  pokedex: PropTypes.string,
  data: PropTypes.object,
  requestData: PropTypes.func,
  displaying: PropTypes.string,
};

export function PokedexDisplay(props) {
  const { changePokedex, displaying } = props;

  const regions = [
    'kanto',
    'original-johto',
    'hoenn',
    'original-sinnoh',
    'original-unova',
    'kalos-central',
    'kalos-coastal',
    'kalos-mountain',
  ];
  return (
    <PokedexDiv>
      <Select
        onChange={event =>
          changePokedex(event.target.value, displaying, 'pokedex')
        }
      >
        <MultipleOptions options={regions} />
      </Select>
    </PokedexDiv>
  );
}

PokedexDisplay.propTypes = {
  isFetching: PropTypes.bool,
  data: PropTypes.object,
  changePokedex: PropTypes.func,
  displaying: PropTypes.string,
};
