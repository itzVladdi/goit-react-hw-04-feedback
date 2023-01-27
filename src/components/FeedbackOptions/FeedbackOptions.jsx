import PropTypes from 'prop-types';

import css from './FeedbackOptions.module.css';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={css.wrapper}>
      {options.map(option => (
        <button
          className={css.btn}
          key={option}
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
