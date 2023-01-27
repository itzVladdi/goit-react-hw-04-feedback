import { useState } from 'react';

import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export function App() {
  const [option, setOption] = useState({ good: 0, neutral: 0, bad: 0 });
  const { good, neutral, bad } = option;

  function onBtnClick(event) {
    const { name } = event.target;
    setOption(prevState => ({ ...prevState, [name]: prevState[name] + 1 }));
  }
  function countTotalFeedback() {
    const { good, neutral, bad } = option;
    return good + neutral + bad;
  }
  function countPositiveFeedbackPercentage() {
    const total = countTotalFeedback();
    const { good } = option;
    return `${Math.round((good / total) * 100)}%`;
  }
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(option)}
          onLeaveFeedback={onBtnClick}
        />
      </Section>
      <Section title="Satistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}
