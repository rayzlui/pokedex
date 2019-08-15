import React from 'react';
import { AbilityContainer } from './AbilityContainer';
import { ErrorContainer } from './ErrorContainer';
import { FetchingContainer } from './FetchingContainer';
import { ListContainer } from './ListContainer';
import { MenuContainer } from './MenuContainer';
import { MoveContainer } from './MoveContainer';
import { PokemonContainer } from './PokemonContainer';
import { TypeContainer } from './TypeContainer';
import { PokedexContainer } from './PokedexContainer';
import { BerryContainer } from './BerryContainer';
import { ColorContainer } from './ColorContainer';
import styled from 'styled-components';

const DisplayDiv = styled.div`
  width: 450px;
  height: 550px;
  display: block;
  border-radius: 5px;
  border: 2px solid black;
  box-shadow: 3px 3px 5px black, 4px 4px 5px grey, 3px 3px 5px grey,
    4px 4px 5px grey;
  margin: 0 auto;
  overflow: scroll;
  background-color: white;
`;

const WrapperDiv = styled.div`
  text-align: left;
  background-image: linear-gradient(to bottom right, white, grey);
  padding: 75px 0px;
  height: 610px;
`;

const MenuDiv = styled.div`
  box-shadow: 1px 1px 1px grey;
  border-radius: 3px;
  width: 100%;
  margin: 0;
  background-color: white;
  display: inline-block;
  background-color: silver;
`;

export function RootContainer() {
  return (
    <>
      <MenuDiv>
        <MenuContainer />
      </MenuDiv>
      <WrapperDiv>
        <DisplayDiv>
          <ErrorContainer />
          <PokedexContainer />
          <FetchingContainer />
          <ListContainer />
          <PokemonContainer />
          <MoveContainer />
          <TypeContainer />
          <AbilityContainer />
          <BerryContainer />
          <ColorContainer />
        </DisplayDiv>
      </WrapperDiv>
    </>
  );
}
