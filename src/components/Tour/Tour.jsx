import classNames from 'classnames';
import { memo } from 'react';
import styles from './Tour.module.css';
import MoreButton from '../MoreButton/MoreButton';

const Tour = ({ name, cost, bgImage, classes = {} }) => {
  return (
    <div
      className={classNames(styles.container, classes.container)}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.06) 48.44%, rgba(0, 0, 0, 0.5) 100%), url(${bgImage})`,
      }}
    >
      <h3 className={styles.name}>{name}</h3>
      <p className={classNames('psmall', styles.cost)}>{cost}</p>
      <MoreButton classes={{ button: styles.button }} />
    </div>
  );
};

export default memo(Tour);
