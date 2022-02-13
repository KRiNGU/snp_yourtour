import { memo } from 'react';
import Button from '../../components/Button/Button';
import NavigationPannel from '../../components/NavigationPannel/NavigationPannel';
import styles from './Header.module.css';

const Header = () => (
  <header>
    <NavigationPannel />
    <h1 className={styles.title}>Идеальные путешествия существуют</h1>
    <p className={styles.text}>
      Идейные соображения высшего порядка, а также рамки и место обучения кадров
    </p>
    <Button
      classes={{ button: styles.button, text: styles.text }}
      text={<p className="psmall">{'Найти тур'}</p>}
    />
  </header>
);

export default memo(Header);
