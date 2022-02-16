import classNames from 'classnames';
import { memo } from 'react';
import styles from './Radio.module.css';

const Radio = ({ id, text, classes = {}, name }) => (
  <div className={classNames(styles.container, classes.container)}>
    <input
      className={classNames(styles.input, classes.input)}
      name={name}
      type="radio"
      id={id}
    />
    <label className={classNames(classes.label, styles.label)} htmlFor={id}>
      {text}
    </label>
  </div>
);

export default memo(Radio);
