import s from './Statistics.module.css';

function Statistics(props) {
  return (
    <section className={s.section}>
      <h1 className={s.title}>Statistics</h1>
      <ul className={s.statList}>
        <li className={s.stat}>
          <span>Good:</span> {0}
        </li>
        <li className={s.stat}>
          <span>Neutral:</span> {0}
        </li>
        <li className={s.stat}>
          <span>Bad:</span> {0}
        </li>
      </ul>
    </section>
  );
}

export default Statistics;
