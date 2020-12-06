import s from './Statistics.module.css';

function Statistics({ statistics, totalFeedback, positiveFeedback }) {
  return (
    <section className={s.section}>
      <h1 className={s.title}>Statistics</h1>
      <ul className={s.statList}>
        <li className={s.stat}>
          <span>Good:</span> {statistics.good}
        </li>
        <li className={s.stat}>
          <span>Neutral:</span> {statistics.neutral}
        </li>
        <li className={s.stat}>
          <span>Bad:</span> {statistics.bad}
        </li>
        <li className={s.stat}>
          <span>Total:</span> {totalFeedback}
        </li>
        <li className={s.stat}>
          <span>Positive feedback:</span> {positiveFeedback}
        </li>
      </ul>
    </section>
  );
}

export default Statistics;
