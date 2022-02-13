import classNames from 'classnames';
import { memo } from 'react';
import Button from '../Button/Button';
import styles from './Tour.module.css';
import vector from '../../assets/vector.svg';

const Tour = ({ name, cost, bgImg, classes = {} }) => {
  return (
    <div className={classNames(styles.container, classes.container)}>
      <h3 className={styles.name}>{name}</h3>
      <p className={classNames('psmall', styles.cost)}>{cost}</p>
      <Button
        text={
          <>
            <p className={classNames('pbig', styles.buttonText)}>Подробнее</p>
            <img src={vector} alt="Подробнее" className={styles.vector} />
          </>
        }
        classes={{ button: styles.button }}
      />
      <img
        src={bgImg}
        alt="Фоновое изображение"
        className={styles.backgroundImage}
      />
    </div>
  );
};

export default memo(Tour);
