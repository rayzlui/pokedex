import React from 'react';
import PropTypes from 'prop-types';
import { LargeHeader } from './StyledComponents';

export function BerryView(props) {
  const { data, displaying } = props;
  if (data === null || displaying !== 'berry' || data.count) return null;

  const {
    name,
    growth_time,
    firmness,
    max_harvest,
    size,
    smoothness,
    soil_dryness,
    flavors,
  } = data;

  return (
    <>
      <LargeHeader>{name.toUpperCase()}</LargeHeader>

      <p>Grow Time: {growth_time}</p>
      <p>Firmness: {firmness.name}</p>
      <p>Max Harvest: {max_harvest}</p>
      <p>Size: {size}</p>
      <p>Smoothness: {smoothness}</p>
      <p>Soil Dryness: {soil_dryness}</p>
      <p>Flavors: {flavors.map(flavor => flavor.flavor.name).join('  ')}</p>
    </>
  );
}

BerryView.propTypes = {
  data: PropTypes.object,
  displaying: PropTypes.string,
};
