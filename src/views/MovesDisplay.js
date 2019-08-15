import React from 'react';
import PropTypes from 'prop-types';
import { Button, LargeHeader } from './StyledComponents';

export function MoveDisplay(props) {
  const { data, displaying, requestData } = props;
  if (data === null || displaying !== 'move' || data.count) return null;
  const { accuracy, effect_entries, name, power, pp, type } = data;
  const accuracyDisplay = accuracy ? accuracy : 'Does not apply';
  const effectDisplay =
    effect_entries.length === 0
      ? 'Move has no description'
      : effect_entries[0].effect;
  const powerDisplay = power ? power : 'Does not apply';

  return (
    <>
      <LargeHeader>{name.toUpperCase()}</LargeHeader>
      <h6>Type: </h6>
      <Button onClick={() => requestData(type.name, 'type')}>
        {type.name}
      </Button>
      <p>{effectDisplay}</p>

      <p>Accuracy: {accuracyDisplay}</p>
      <p>PP: {pp}</p>
      <p>Power: {powerDisplay}</p>
    </>
  );
}

MoveDisplay.propTypes = {
  data: PropTypes.object,
  displaying: PropTypes.string,
  requestData: PropTypes.func,
};
