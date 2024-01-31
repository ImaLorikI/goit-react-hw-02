import css from './Notification.module.css';

export const Notification = ({ massage }) => {
  return <h2 className={css.Notification}>{massage}</h2>;
};
