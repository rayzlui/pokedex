import { PokedexDisplay } from './PokedexDisplay';
import { SearchBar } from './SearchBarDisplay';
import React, { useState } from 'react';
import { Button } from './StyledComponents';
import styled from 'styled-components';

export const ExpandingDiv = styled.div`
  height: ${props => {
    return props.active ? '130px' : '30px';
  }};
`;
export const MenuSection = styled.section`
  background-color: white;
  width: 250px;
`;

export const ActiveButton = styled(Button)`
  ${props => {
    if (props.active) {
      return `background-color: silver;
          border-bottom: 1px solid black;`;
    }
  }}
`;

export function ToggleMenu(props) {
  const [menu, expandMenu] = useState(true);
  const [view, changeView] = useState('pokedex');

  let display;
  switch (view) {
    case 'pokedex':
      display = <PokedexDisplay {...props} />;
      break;
    default:
      display = <SearchBar {...props} />;
      break;
  }

  if (menu === false) {
    display = null;
  }

  return (
    <ExpandingDiv
      onMouseEnter={() => expandMenu(true)}
      onMouseLeave={() => expandMenu(false)}
      active={menu}
    >
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

      <MenuSection>{display}</MenuSection>
    </ExpandingDiv>
  );
}
