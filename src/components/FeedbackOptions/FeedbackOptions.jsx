import React from 'react';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(statName => {
    return (
      <button
        key={statName}
        type="button"
        className={s.button}
        onClick={() => onLeaveFeedback(statName)}
      >
        {statName}
      </button>
    );
  });
}

export default FeedbackOptions;
