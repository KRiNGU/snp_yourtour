import { memo } from 'react';
import styles from './TravelTime.module.css';
import footer_photo from '../../assets/footer_photo.jpg';
import classNames from 'classnames';

const TravelTime = () => (
  <div className={styles.travelTime}>
    <img
      src={footer_photo}
      alt="Путешествуй с нами!"
      className={styles.photo}
    />
    <div className={styles.text}>
      <h3 className={styles.title}>Пора в путешествие вместе с нами!</h3>
      <p className={classNames('pnormal', styles.email)}>
        <span className={styles.greyText}>
          Напиши на почту и узнай подробности на{' '}
        </span>
        <a href="/#" className={styles.link}>
          yourtour@gmail.com
        </a>
      </p>
    </div>
  </div>
);

export default memo(TravelTime);
