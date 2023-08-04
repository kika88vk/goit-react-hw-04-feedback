import css from './Counting.module.css';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <h2 className={css.text}>{message}</h2>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
