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
  width: 46%;
  height: 80%;
  top: 12%;
  position: relative;
  display: inline-block;
  border-radius: 5px;
  box-shadow: 3px 3px 5px black, 4px 4px 5px grey, 3px 3px 5px grey,
    4px 4px 5px grey;
  margin: 2%;
  overflow: scroll;
  background-color: white;
`;

const WrapperDiv = styled.div`
  text-align: center;
  background-image: linear-gradient(to bottom right, white, red);
  height: 96vh;
  width: 100vw;
`;

export function RootContainer() {
  return (
    <>
      <WrapperDiv>
        <header>
          <h1>Pokedex</h1>
        </header>
        <DisplayDiv>
          <FetchingContainer />
          <PokemonContainer />
          <MoveContainer />
          <TypeContainer />
          <AbilityContainer />
          <BerryContainer />
          <ColorContainer />
        </DisplayDiv>
        <DisplayDiv>
          <MenuContainer />
          <ListContainer />
          <PokedexContainer />
          <ErrorContainer />
        </DisplayDiv>
      </WrapperDiv>
    </>
  );
}
