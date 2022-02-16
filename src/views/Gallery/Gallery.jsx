import { memo } from 'react';
import styles from './Gallery.module.css';
import gallery_1 from '../../assets/gallery_1.jpg';
import gallery_2 from '../../assets/gallery_2.jpg';
import gallery_3 from '../../assets/gallery_3.jpg';
import gallery_4 from '../../assets/gallery_4.jpg';
import gallery_5 from '../../assets/gallery_5.jpg';
import gallery_6 from '../../assets/gallery_6.jpg';
import gallery_7 from '../../assets/gallery_7.jpg';
import gallery_8 from '../../assets/gallery_8.jpg';
import gallery_9 from '../../assets/gallery_9.jpg';
import gallery_10 from '../../assets/gallery_10.jpg';
import gallery_11 from '../../assets/gallery_11.jpg';
import gallery_12 from '../../assets/gallery_12.jpg';
import gallery_13 from '../../assets/gallery_13.jpg';

const Gallery = () => (
  <section>
    <h2>Фотографии путешествий</h2>
    <p className="pnormal description">
      Идейные соображения высшего порядка, а также рамки и место обучения кадров
    </p>
    <article className={styles.photos}>
      <div className={styles.fullLine}>
        <img src={gallery_1} alt="Первое фото" />
        <img src={gallery_2} alt="Второе фото" className={styles.table} />
        <img src={gallery_3} alt="Третье фото" className={styles.mobile} />
        <img src={gallery_4} alt="Четвёртое фото" />
      </div>
      <div className={styles.miniLine}>
        <img src={gallery_5} alt="Пятое фото" />
        <img src={gallery_6} alt="Шестое фото" className={styles.mobile} />
        <img src={gallery_7} alt="Седьмое фото" className={styles.table} />
        <img src={gallery_8} alt="Восьмое фото" />
        <img src={gallery_9} alt="Девятое фото" />
      </div>
      <div className={styles.fullLine}>
        <img src={gallery_10} alt="Десятое фото" />
        <img src={gallery_11} alt="Одиннадцатое фото" />
        <img
          src={gallery_12}
          alt="Двенадцатое фото"
          className={styles.mobile}
        />
        <img src={gallery_13} alt="Тринадцатое фото" className={styles.table} />
      </div>
    </article>
  </section>
);

export default memo(Gallery);
