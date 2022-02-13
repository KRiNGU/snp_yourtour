import { memo } from 'react';
import Choose from './Choose/Choose';
import Header from './Header/Header';
import styles from './Main.module.css';

const Main = () => (
  <div>
    <Header />
    <main className={styles.main}>
      <Choose />
    </main>
  </div>
);

export default memo(Main);
