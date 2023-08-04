import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Section } from './Section';
import { Notification } from './Notification';
import PropTypes from 'prop-types';
import { useState } from 'react';

function CountFeedback() {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  // const [good, setGood] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);

  // useEffect(() => countTotalFeedback(), [state]);

  const handleOptionClick = option => {
    setState(prevState => {
      return { ...prevState, [option]: prevState[option] + 1 };
    });
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    const total = good + neutral + bad;
    if (total > 0) {
      return total;
    }
    return 0;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = state;
    const total = countTotalFeedback();
    const percentage = (good * 100) / total;

    if (good > 0) {
      return Math.round(percentage);
    }
    return 0;
  };

  const { good, neutral, bad } = state;

  return (
    <div>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={handleOptionClick}
        />
      </Section>
      <Section title={'Statistics'}>
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
}

CountFeedback.propTypes = {
  initialGood: PropTypes.number,
  initialNeutral: PropTypes.number,
  initialBad: PropTypes.number,
};

export default CountFeedback;
