import s from './Feedback.module.css';

function Feedback(prpps) {
  return (
    <section className={s.section}>
      <h1 className={s.title}>Plese leave feedback</h1>
      <div className={s.buttonList}>
        <button type="button" className={s.button}>
          Good
        </button>
        <button type="button" className={s.button}>
          Neutral
        </button>
        <button type="button" className={s.button}>
          Bad
        </button>
      </div>
    </section>
  );
}

export default Feedback;
