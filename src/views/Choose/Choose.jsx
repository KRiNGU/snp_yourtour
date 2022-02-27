import classNames from 'classnames';
import { memo, useCallback, useState } from 'react';
import Tour from '../../components/Tour/Tour';
import styles from './Choose.module.css';
import tourCar from '../../assets/tour-car.png';
import girlInSand from '../../assets/girl-in-sand.png';
import mountain from '../../assets/mountain.png';
import street from '../../assets/street.png';
import beach from '../../assets/beach.png';
import manOnTheBridge from '../../assets/man-on-the-bridge.png';

const Choose = () => {
  const [picked, setPicked] = useState(0);
  const types = ['Популярные', 'Авторские', 'Походы', 'Сплавы', 'Велопрогулки'];

  const handlePick = useCallback((e) => {
    setPicked(parseInt(e.currentTarget.id));
  }, []);

  return (
    <section>
      <h2 className={styles.title}>Выбери свой тур</h2>
      <div className={styles.types}>
        {types.map((type, index) => (
          <p
            key={index}
            id={index}
            className={classNames(
              'pbig',
              styles.type,
              picked === index && styles.picked
            )}
            onClick={handlePick}
          >
            {type}
          </p>
        ))}
      </div>
      <article className={styles.tours}>
        <Tour
          name="Путешествие в горы"
          cost="от 80 000 руб"
          image={tourCar}
          classes={{ container: styles.tour }}
        />
        <Tour
          name="Путешествие в горы"
          cost="от 80 000 руб"
          image={girlInSand}
          classes={{ container: styles.tour }}
        />
        <Tour
          name="Путешествие в горы"
          cost="от 80 000 руб"
          image={mountain}
          classes={{ container: styles.tour }}
        />
        <Tour
          name="Путешествие в горы"
          cost="от 80 000 руб"
          image={street}
          classes={{ container: styles.tour }}
        />
        <Tour
          name="Путешествие в горы"
          cost="от 80 000 руб"
          image={beach}
          classes={{ container: styles.tour }}
        />
        <Tour
          name="Путешествие в горы"
          cost="от 80 000 руб"
          image={manOnTheBridge}
          classes={{ container: styles.tour }}
        />
      </article>
    </section>
  );
};

export default memo(Choose);
