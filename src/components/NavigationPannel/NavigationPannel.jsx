import styles from './NavigationPannel.module.css';
import { memo } from 'react';
import logo from '../../assets/logo.svg';
import classNames from 'classnames';

const NavigationPannel = () => (
  <div className={styles.pannel}>
    <img src={logo} alt="Логотип" className={styles.logo} />
    <nav>
      <a href="/#" className={classNames('pnormal', styles.element)}>
        Туры
      </a>
      <a href="/#" className={classNames('pnormal', styles.element)}>
        Создать тур
      </a>
      <a href="/#" className={classNames('pnormal', styles.element)}>
        Отзывы
      </a>
      <a href="/#" className={classNames('pnormal', styles.element)}>
        Истории
      </a>
    </nav>
    <p className={classNames('pnormal', styles.phone)}>+7 999 999 99 99</p>
  </div>
);

export default memo(NavigationPannel);
