import React from 'react';
import PropTypes from 'prop-types';
import { Button, LargeHeader } from './StyledComponents';

export function ColorView(props) {
  const { data, displaying, requestData, isFetching } = props;
  if (data === null || displaying !== 'pokemon-color' || isFetching)
    return null;
  const { name, pokemon_species } = data;

  return (
    <>
      <LargeHeader>{name.toUpperCase()} POKEMON</LargeHeader>
      {pokemon_species.map(info => {
        return (
          <section key={`${info.name}`}>
            <p key={`${info.name}-list-par`}>{info.name}</p>
            <Button
              key={`${info.name}-list-button`}
              className="view-pokemon-button"
              onClick={() => requestData(info.name, 'pokemon')}
            >
              View
            </Button>
          </section>
        );
      })}
      ;
    </>
  );
}

ColorView.propTypes = {
  data: PropTypes.object,
  displaying: PropTypes.string,
  requestData: PropTypes.func,
  isFetching: PropTypes.bool,
};
