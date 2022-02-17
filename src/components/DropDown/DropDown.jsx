import classNames from 'classnames';
import { memo } from 'react';
import styles from './DropDown.module.css';
import arrow from '../../assets/arrow.svg';

const DropDown = ({ classes = {}, fieldId, labelText, placeholder }) => (
  <li className={classNames(styles.container, classes.container)}>
    <label htmlFor={fieldId} className={classNames('pnormal', classes.label)}>
      {labelText}
    </label>
    <div className={styles.inputContainer}>
      <input
        type="text"
        id={fieldId}
        className={classNames(styles.input, classes.input)}
        placeholder={placeholder}
      />
      <img src={arrow} alt="DropDown стрелка" className={styles.arrow} />
    </div>
  </li>
);

export default memo(DropDown);
