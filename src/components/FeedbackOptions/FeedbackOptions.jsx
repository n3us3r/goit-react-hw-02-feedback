import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const temp = Object.keys(options);
  return (
    <ul>
      {temp.map(el => (
        <li key={el}>
          <button type="button" onClick={() => onLeaveFeedback(el)}>
            {el}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
