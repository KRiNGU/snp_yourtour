import classNames from 'classnames';
import { memo } from 'react';
import styles from './Input.module.css';

const Input = ({ fieldId, labelText, placeholder, classes = {} }) => (
  <li className={classNames(styles.container, classes.container)}>
    <label htmlFor={fieldId} className={classNames('pnormal', classes.label)}>
      {labelText}
    </label>
    <input
      type="text"
      id={fieldId}
      className={classNames(styles.input, classes.input)}
      placeholder={placeholder}
    />
  </li>
);

export default memo(Input);
