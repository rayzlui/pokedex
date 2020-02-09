import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { LargeHeader, Button, Image } from './StyledComponents';
import styled from 'styled-components';

export const MediumSection = styled.section`
  height: 15%;
  text-align: center;
  display: block;
  margin: 0 70px;
  padding: 30px;
`;

const BACKGROUND_COLORS = {
  fire: 'radial-gradient(white, rgb(255, 94, 0))',
  grass: 'radial-gradient(white, rgb(54, 168, 54))',
  water: 'radial-gradient(white, rgb(67, 142, 255))',
  flying: 'radial-gradient(silver, rgb(248, 255, 188))',
  poison: 'radial-gradient(green, rgb(112, 0, 97))',
  electric: 'radial-gradient(white, rgb(255, 232, 24))',
  psychic: 'radial-gradient(rgb(217, 92, 255), rgb(94, 54, 168))',
  ice: 'radial-gradient(silver, rgb(35, 38, 255))',
  fighting: 'radial-gradient(silver, brown)',
  ground: 'radial-gradient(black, brown)',
  rock: 'radial-gradient(brown, grey)',
  steel: 'radial-gradient(silver, grey)',
  normal: 'radial-gradient(white, tan)',
};

const DEFAULT_COLORS = 'radial-gradient(white, white)';

export const ImageSection = styled(MediumSection)`
  background-image: ${props => {
    return BACKGROUND_COLORS[props.type] || DEFAULT_COLORS;
  }};
  border: 2px solid black;
  border-radius: 4px;
  box-shadow: 1px 1px silver;
`;

export const SmallSection = styled.section`
  height: 10%;
  border-bottom: 1px solid silver;
`;

export const LargeSection = styled.section`
  height: 50%;
`;

export function CreateButtonsFromInfo(props) {
  const { array, type, requestData } = props;

  return (
    <>
      {array.map(object => {
        const name = object[type] ? object[type].name : object.name;
        return (
          <Button
            key={`${name} button`}
            onClick={() => requestData(name, type)}
          >
            {name}
          </Button>
        );
      })}
    </>
  );
}

CreateButtonsFromInfo.propTypes = {
  array: PropTypes.array,
  type: PropTypes.string,
  requestData: PropTypes.func,
};

export function ImageDisplay(props) {
  const forwardFacingSprite = 2;
  const [index, addIndex] = useState(forwardFacingSprite);
  const { sprites, name } = props;
  const spritesValues = Object.values(sprites).filter(
    sprite => sprite !== null,
  );
  const currentSprite = index % spritesValues.length;
  return (
    <Image
      src={spritesValues[currentSprite]}
      alt={name}
      onClick={() => addIndex(index + 1)}
    />
  );
}

ImageDisplay.propTypes = {
  sprites: PropTypes.object,
  name: PropTypes.string,
};

export function PokemonDisplay(props) {
  const { data, displaying, requestData, isFetching } = props;
  if (data === null && !isFetching) {
    requestData('charmander', 'pokemon');
    return null;
  }
  if (displaying !== 'pokemon' || data === null || isFetching) return null;

  const { name, types, moves, abilities, sprites } = data;
  const type = types[0].type.name;
  return (
    <div className={`pokemon-card`}>
      <MediumSection>
        <LargeHeader>{name.toUpperCase()}</LargeHeader>
      </MediumSection>
      <ImageSection type={type}>
        <ImageDisplay sprites={sprites} name={name} />
      </ImageSection>
      <SmallSection>
        <h4>Type</h4>
        <CreateButtonsFromInfo
          array={types}
          type={'type'}
          requestData={requestData}
        />
      </SmallSection>
      <SmallSection>
        <h4>Ability</h4>
        <CreateButtonsFromInfo
          array={abilities}
          type={'ability'}
          requestData={requestData}
        />
      </SmallSection>
      <LargeSection>
        <h4>Moves</h4>
        <CreateButtonsFromInfo
          array={moves}
          type={'move'}
          requestData={requestData}
        />
      </LargeSection>
    </div>
  );
}

PokemonDisplay.propTypes = {
  data: PropTypes.object,
  displaying: PropTypes.string,
  requestData: PropTypes.func,
  isFetching: PropTypes.bool,
};
