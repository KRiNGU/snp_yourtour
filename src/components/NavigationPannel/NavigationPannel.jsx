import styles from './NavigationPannel.module.css';
import { memo } from 'react';
import logo from '../../assets/logo.svg';
import classNames from 'classnames';

const NavigationPannel = () => (
  <div className={styles.pannel}>
    <img src={logo} alt="Логотип" className={styles.logo} />
    <nav>
      <p className={classNames('pnormal', styles.element)}>Туры</p>
      <p className={classNames('pnormal', styles.element)}>Создать тур</p>
      <p className={classNames('pnormal', styles.element)}>Отзывы</p>
      <p className={classNames('pnormal', styles.element)}>Истории</p>
    </nav>
    <p className={classNames('pnormal', styles.phone)}>+7 999 999 99 99</p>
  </div>
);

export default memo(NavigationPannel);
