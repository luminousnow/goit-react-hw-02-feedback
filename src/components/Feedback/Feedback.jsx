import React from 'react';
import s from './Feedback.module.css';

function Feedback({ onGoodClick, onNeutralClick, onBadClick }) {
  return (
    <section className={s.section}>
      <h1 className={s.title}>Plese leave feedback</h1>
      <div className={s.buttonList}>
        <button
          type="button"
          className={s.button}
          data-action="good"
          // onClick={onUpdate}
          onClick={onGoodClick}
        >
          Good
        </button>
        <button
          type="button"
          className={s.button}
          data-action="neutral"
          // onClick={onUpdate}
          onClick={onNeutralClick}
        >
          Neutral
        </button>
        <button
          type="button"
          className={s.button}
          data-action="bad"
          // onClick={onUpdate}
          onClick={onBadClick}
        >
          Bad
        </button>
      </div>
    </section>
  );
}

export default Feedback;
