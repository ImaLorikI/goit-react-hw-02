import css from './Options.module.css';

export const Options = ({ updateGood, updateNeutral, updateBad, reset ,total }) => {
  return (
    <>
      <button type="button" className={css.button} onClick={updateGood}>
        Good
      </button>
      <button type="button" className={css.button} onClick={updateNeutral}>
        Neutral
      </button>
      <button type="button" className={css.button} onClick={updateBad}>
        Bad
      </button>
      {total>0 && <button type="button" className={css.button} onClick={reset}>
        Reset
      </button> }
    </>
  );
};
