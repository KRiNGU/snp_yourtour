import styles from './Button.module.css';
import classNames from 'classnames';
import { memo } from 'react';

const Button = ({ text, classes = {} }) => (
  <button className={classNames(classes.button, styles.button)}>{text}</button>
);

export default memo(Button);
