import classNames from 'classnames';
import { memo } from 'react';
import MoreButton from '../MoreButton/MoreButton';
import styles from './Story.module.css';

const Story = ({ title, bgImage, text, links = [], advantages = [] }) => (
  <div className={styles.container}>
    <h3 className={styles.title}>{title}</h3>
    <p className={classNames('pnormal', styles.text)}>
      {text}
      {advantages.length !== 0 && (
        <ul className={styles.advantages}>
          {advantages.map((advantage) => (
            <li className={styles.advantage}>{advantage.text}</li>
          ))}
        </ul>
      )}
    </p>
    <footer className={styles.footer}>
      <MoreButton classes={{ button: styles.button }} />
      <ul className={styles.links}>
        {links.map((link, index) => (
          <li key={index} className={classNames(styles.link, 'pnormal')}>
            {link.name}
          </li>
        ))}
      </ul>
    </footer>
    <img src={bgImage} alt="Бэкграунд истории" className={styles.bgImage} />
  </div>
);

export default memo(Story);
