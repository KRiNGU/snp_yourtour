import classNames from 'classnames';
import { memo } from 'react';
import styles from './CheckBox.module.css';

const CheckBox = ({ id, text, classes = {}, name }) => (
  <div className={classNames(classes.container, styles.container)}>
    <input
      className={classNames(classes.checkbox, styles.checkbox)}
      type="checkbox"
      id={id}
      name={name}
    />
    <label className={classNames(classes.label, styles.label)} htmlFor={id}>
      {text}
    </label>
  </div>
);

export default memo(CheckBox);
