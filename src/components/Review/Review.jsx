import classNames from 'classnames';
import { memo } from 'react';
import styles from './Review.module.css';

const Review = ({ name, text, photo, tour, classes = {} }) => (
  <div className={classNames(classes.container, styles.container)}>
    <p className={classNames('pbig', styles.text)}>{text}</p>
    <footer className={styles.footer}>
      <h3 className={classNames(classes.userName, styles.userName)}>{name}</h3>
      <img src={photo} alt="Фото обзорщика" className={styles.photo} />
      <p className={classNames('psmall', styles.greyText, classes.tour)}>
        {`Тур: ${tour}`}
      </p>
    </footer>
  </div>
);

export default memo(Review);
