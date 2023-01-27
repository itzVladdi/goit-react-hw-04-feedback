import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <p>Good:</p>
        <span>{good}</span>
      </li>
      <li className={css.item}>
        <p>Neutral:</p>
        <span>{neutral}</span>
      </li>
      <li className={css.item}>
        <p>Bad:</p>
        <span>{bad}</span>
      </li>
      <li className={css.item}>
        <p>Total:</p>
        <span>{total}</span>
      </li>
      <li className={css.item}>
        <p>Positive feedback:</p>
        <span>{positivePercentage}</span>
      </li>
    </ul>
  );
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
