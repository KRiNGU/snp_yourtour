import { memo } from 'react';
import styles from './Footer.module.css';
import instagram from '../../assets/instagram.svg';
import vk from '../../assets/vk.svg';
import facebook from '../../assets/facebook.svg';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.socials}>
      <span className={styles.greyText}>Наши социальные сети</span>
      <div className={styles.logos}>
        <div className={styles.logo}>
          <img
            src={instagram}
            alt="Ссылка на инстаграм"
            className={styles.logoImage}
          />
          <div className={styles.logoText}>instagram</div>
        </div>
        <div className={styles.logo}>
          <img
            src={vk}
            alt="Ссылка на ВКонтакте"
            className={styles.logoImage}
          />
          <div className={styles.logoText}>vkontakte</div>
        </div>
        <div className={styles.logo}>
          <img
            src={facebook}
            alt="Ссылка на фейсбук"
            className={styles.logoImage}
          />
          <div className={styles.logoText}>facebook</div>
        </div>
      </div>
    </div>
  </footer>
);

export default memo(Footer);
