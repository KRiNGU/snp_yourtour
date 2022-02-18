import classNames from 'classnames';
import { memo, useCallback, useState } from 'react';
import styles from './Dropdown.module.css';
import arrow from '../../assets/arrow.svg';

const Dropdown = ({
  classes = {},
  fieldId,
  labelText,
  placeholder,
  options = ['ТвГУ', 'Гималайи'],
}) => {
  const [selectedId, setSelectedId] = useState(0);

  const handleSelect = useCallback((e) => {
    setSelectedId(parseInt(e.currentTarget.value));
  }, []);
  return (
    <li className={classNames(styles.container, classes.container)}>
      <label className={classNames('pnormal', classes.label)}>
        {labelText}
      </label>
      <div className={styles.selectContainer}>
        <select
          className={classNames(
            'pnormal',
            styles.select,
            selectedId === 0 && styles.default
          )}
          style={{ backgroundImage: `url(${arrow})` }}
          placeholder={placeholder}
          name={`Выберите пункт`}
          onChange={handleSelect}
          id={fieldId}
          defaultValue={selectedId}
        >
          <option value={0} className={classNames('pnormal', styles.default)}>
            Выберите пункт
          </option>
          {options.map((option, index) => (
            <option key={++index} value={++index}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </li>
  );
};

export default memo(Dropdown);
