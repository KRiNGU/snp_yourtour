import classNames from 'classnames';
import { memo } from 'react';
import styles from './Tour.module.css';
import MoreButton from '../MoreButton/MoreButton';

const Tour = ({ name, cost, image, classes = {} }) => {
  return (
    <div className={classNames(styles.container, classes.container)}>
      <h3 className={styles.name}>{name}</h3>
      <p className={classNames('psmall', styles.cost)}>{cost}</p>
      <MoreButton classes={{ button: styles.button }} />
      <img src={image} alt="Задник тура" className={styles.image} />
    </div>
  );
};

export default memo(Tour);
