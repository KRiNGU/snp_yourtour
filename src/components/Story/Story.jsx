import classNames from 'classnames';
import { memo } from 'react';
import MoreButton from '../MoreButton/MoreButton';
import styles from './Story.module.css';

const Story = ({ title, image, text, links = [], advantages = [] }) => (
  <div className={styles.container}>
    <h3 className={styles.title}>{title}</h3>
    <p className={classNames('pnormal', styles.text)}>{text}</p>
    {advantages.length !== 0 && (
      <ul className={styles.advantages}>
        {advantages.map((advantage, index) => (
          <li key={index} className={classNames(styles.advantage, 'pnormal')}>
            {advantage.text}
          </li>
        ))}
      </ul>
    )}
    <img src={image} alt="Задник истории" className={styles.image} />
    <footer className={styles.footer}>
      <MoreButton classes={{ button: styles.button }} />
      <div className={styles.links}>
        {links.map((link, index) => (
          <a
            key={index}
            href="/#"
            className={classNames(styles.link, 'pnormal')}
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
    {/* <img src={bgImage} alt="Бэкграунд истории" className={styles.bgImage} /> */}
  </div>
);

export default memo(Story);
