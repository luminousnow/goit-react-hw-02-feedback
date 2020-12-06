import React from 'react';
import s from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <section className={s.section}>
      <ul className={s.statList}>
        <li className={s.stat}>
          <span>Good:</span> {good}
        </li>
        <li className={s.stat}>
          <span>Neutral:</span> {neutral}
        </li>
        <li className={s.stat}>
          <span>Bad:</span> {bad}
        </li>
        <li className={s.stat}>
          <span>Total:</span> {total()}
        </li>
        <li className={s.stat}>
          <span>Positive feedback:</span> {positivePercentage()}%
        </li>
      </ul>
    </section>
  );
}

export default Statistics;
