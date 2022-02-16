import { memo } from 'react';
import Assemble from './Assemble/Assemble';
import Choose from './Choose/Choose';
import Footer from './Footer/Footer';
import Gallery from './Gallery/Gallery';
import Header from './Header/Header';
import styles from './Main.module.css';
import Reviews from './Reviews/Reviews';
import Stories from './Stories/Stories';
import TravelTime from './TraverTime/TravelTime';

const Main = () => (
  <div>
    <Header />
    <main className={styles.main}>
      <div className={styles.container}>
        <Choose />
        <Assemble />
        <Reviews />
      </div>
      <Gallery />
      <div className={styles.container}>
        <Stories />
      </div>
      <TravelTime />
    </main>
    <Footer />
  </div>
);

export default memo(Main);
