import classNames from 'classnames';
import { memo } from 'react';
import Tour from '../../components/Tour/Tour';
import styles from './Choose.module.css';
import tourCar from '../../assets/tour-car.png';
import girlInSand from '../../assets/girl-in-sand.png';
import mountain from '../../assets/mountain.png';
import street from '../../assets/street.png';
import beach from '../../assets/beach.png';
import manOnTheBridge from '../../assets/man-on-the-bridge.png';

const Choose = () => (
  <>
    <h2 className={styles.title}>Выбери свой тур</h2>
    <div className={styles.types}>
      <p className={classNames('pbig', styles.type)}>Популярные</p>
      <p className={classNames('pbig', styles.type)}>Авторские</p>{' '}
      <p className={classNames('pbig', styles.type)}>Походы</p>{' '}
      <p className={classNames('pbig', styles.type)}>Сплавы</p>{' '}
      <p className={classNames('pbig', styles.type)}>Велопрогулки</p>{' '}
    </div>
    <div className={styles.tours}>
      <Tour
        name="Путешествие в горы"
        cost="от 80 000 руб"
        bgImg={tourCar}
        classes={{ container: styles.tour }}
      />
      <Tour
        name="Путешествие в горы"
        cost="от 80 000 руб"
        bgImg={girlInSand}
        classes={{ container: styles.tour }}
      />
      <Tour
        name="Путешествие в горы"
        cost="от 80 000 руб"
        bgImg={mountain}
        classes={{ container: styles.tour }}
      />
      <Tour
        name="Путешествие в горы"
        cost="от 80 000 руб"
        bgImg={street}
        classes={{ container: styles.tour }}
      />
      <Tour
        name="Путешествие в горы"
        cost="от 80 000 руб"
        bgImg={beach}
        classes={{ container: styles.tour }}
      />
      <Tour
        name="Путешествие в горы"
        cost="от 80 000 руб"
        bgImg={manOnTheBridge}
        classes={{ container: styles.tour }}
      />
    </div>
  </>
);

export default memo(Choose);
