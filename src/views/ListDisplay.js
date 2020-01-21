import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './StyledComponents';

export function ListDisplay(props) {
  const { data, requestData, displaying, fetchUrl } = props;
  if (!data || !data.count) return null;
  const { previous, next, results } = data;

  const previousButton = previous ? (
    <Button
      key="previous-button"
      className="previous-button"
      onClick={() => fetchUrl(previous)}
    >
      Previous
    </Button>
  ) : null;

  const nextButton = next ? (
    <Button
      key="next-button"
      className="next-button"
      onClick={() => fetchUrl(next)}
    >
      Next
    </Button>
  ) : null;

  return (
    <>
      {results.map(info => {
        return (
          <section key={`${info.name}`}>
            <p key={`${info.name}-list-par`}>{info.name}</p>
            <Button
              key={`${info.name}-list-button`}
              className="view-pokemon-button"
              onClick={() => requestData(info.name, displaying)}
            >
              View
            </Button>
          </section>
        );
      })}
      {previousButton}
      {nextButton}
    </>
  );
}

ListDisplay.propTypes = {
  data: PropTypes.object,
  requestData: PropTypes.func,
  displaying: PropTypes.string,
  fetchUrl: PropTypes.func,
};
