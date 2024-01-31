import { useState, useEffect } from 'react';
import { Description } from './Description/Description';
import { Options } from './Options/Options';
import { Feedback } from './Feedback/Feedback';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [values, setValues] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('feedbacks')) ?? {
        good: 0,
        neutral: 0,
        bad: 0,
      }
    );
  });

  useEffect(() => {
    window.localStorage.setItem('feedbacks', JSON.stringify(values));
  }, [values]);

  const updateGood = () => {
    setValues({
      ...values,
      good: values.good + 1,
    });
  };

  const updateNeutral = () => {
    setValues({
      ...values,
      neutral: values.neutral + 1,
    });
  };

  const updateBad = () => {
    setValues({
      ...values,
      bad: values.bad + 1,
    });
  };

  const reset = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const total = values.good + values.neutral + values.bad;
  const positiveFeedback = Math.round(((values.good + values.neutral) / total) * 100) || 0;

  return (
    <>
      <Description />
      <Options
        updateGood={updateGood}
        updateNeutral={updateNeutral}
        updateBad={updateBad}
        reset={reset}
        total={total}
      />
      {total > 0 ? (
        <Feedback
          good={values.good}
          neutral={values.neutral}
          bad={values.bad}
          totalFeedback={total}
          PositiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification massage="No feedback yet" />
      )}
    </>
  );
};
