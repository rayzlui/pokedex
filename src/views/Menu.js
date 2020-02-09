import { PokedexDisplay } from './PokedexDisplay';
import { SearchBar } from './SearchBarDisplay';
import React, { useState } from 'react';
import { Button } from './StyledComponents';
import styled from 'styled-components';
import { FetchingContainer } from '../containers/FetchingContainer';
import { PropTypes } from 'prop-types';

export const MenuSection = styled.section`
  background-color: white;
  text-align: center;
  display: block;
`;

export const ActiveButton = styled(Button)`
  ${props => {
    if (props.active) {
      return `background-color: silver;
          border-bottom: 1px solid black;`;
    }
  }}
`;

export const Nav = styled.section`
  display: inline-block;
  text-align: center;
  width: 100%;
`;

export function ToggleMenu(props) {
  const { isFetching } = props;

  const [view, changeView] = useState('pokedex');
  if (isFetching) {
    return <FetchingContainer />;
  }

  let display;
  switch (view) {
    case 'pokedex':
      display = (
        <MenuSection>
          <PokedexDisplay {...props} />
        </MenuSection>
      );
      break;
    default:
      display = (
        <MenuSection>
          <SearchBar {...props} />
        </MenuSection>
      );
      break;
  }

  return (
    <Nav>
      <ActiveButton
        active={view === 'search'}
        onClick={() => {
          changeView('pokedex');
        }}
      >
        Pokedex
      </ActiveButton>
      <ActiveButton
        active={view === 'pokedex'}
        onClick={() => {
          changeView('search');
        }}
      >
        Search Bar
      </ActiveButton>

      {display}
    </Nav>
  );
}

ToggleMenu.propTypes = {
  isFetching: PropTypes.bool,
};
