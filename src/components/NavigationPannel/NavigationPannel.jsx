import styles from './NavigationPannel.module.css';
import { memo } from 'react';
import logo from '../../assets/logo.svg';

const NavigationPannel = () => (
  <div className={styles.pannel}>
    <img src={logo} alt="Логотип" className={styles.logo} />
    <nav>
      <p className={styles.element}>Туры</p>
      <p className={styles.element}>Создать тур</p>
      <p className={styles.element}>Отзывы</p>
      <p className={styles.element}>Истории</p>
    </nav>
    <p className={styles.phone}>+7 999 999 99 99</p>
  </div>
);

export default memo(NavigationPannel);
