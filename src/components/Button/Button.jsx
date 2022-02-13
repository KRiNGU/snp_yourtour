import styles from './Button.module.css';
import classNames from 'classnames';
import { memo } from 'react';

const Button = ({ text, classes }) => (
  <button className={classNames(styles.button, classes.button)}>{text}</button>
);

export default memo(Button);
