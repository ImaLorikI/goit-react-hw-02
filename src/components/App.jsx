import { useState, useEffect } from 'react';
import { Description } from './Description/Description';
import { Options } from './Options/Options';
import { Feedback } from './Feedback/Feedback';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [values, setValues] = useState({
    good: JSON.parse(window.localStorage.getItem('saved-good')) ?? 0,
    neutral: JSON.parse(window.localStorage.getItem('saved-neutral')) ?? 0,
    bad: JSON.parse(window.localStorage.getItem('saved-bad')) ?? 0,
  });

  const updateGood = () => {
    setValues({
      ...values,
      good: values.good + 1,
    });
  };

  useEffect(() => {
    window.localStorage.setItem('saved-good', values.good);
  }, [values.good]);

  useEffect(() => {
    window.localStorage.setItem('saved-neutral', values.neutral);
  }, [values.neutral]);

  useEffect(() => {
    window.localStorage.setItem('saved-bad', values.bad);
  }, [values.bad]);

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
  const PositiveFeedback = Math.round(((values.good + values.neutral) / total) * 100);

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
          PositiveFeedback={PositiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};
