import css from './Feedback.module.css';

export const Feedback = ({ good, neutral, bad, totalFeedback, PositiveFeedback }) => {
  return (
    <>
      <ul>
        <li className={css.Feedback}>Good:{good}</li>
        <li className={css.Feedback}>Neutral:{neutral}</li>
        <li className={css.Feedback}>Bad:{bad}</li>
        <li className={css.Feedback}>Total:{totalFeedback}</li>
        <li className={css.Feedback}>Positive:{PositiveFeedback}%</li>
      </ul>
    </>
  );
};
