import { memo } from 'react';
import Button from '../Button/Button';
import styles from './MoreButton.module.css';
import vector from '../../assets/vector.svg';
import classNames from 'classnames';

const MoreButton = ({ classes = {} }) => (
  <Button
    text={
      <>
        <p className={classNames('pbig', styles.buttonText)}>Подробнее</p>
        <img src={vector} alt="Подробнее" className={styles.vector} />
      </>
    }
    classes={{ button: classNames(classes.button, styles.button) }}
  />
);

export default memo(MoreButton);
